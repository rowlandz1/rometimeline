// Canvas API documentation
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

// Initialized by draw(), never altered.
var ctx;
var canvas;
var intervals2pixels;

var timespan = eventsInfo.end - eventsInfo.start;

function draw() {
  canvas = document.getElementById('canvas');
  canvas.width = renderInfo.widthPx;
  canvas.height = renderInfo.heightPx;
  canvas.onclick = handleMouseClick;
  canvas.onmousemove = handleMouseMove;
  canvas.style.position = "absolute";
  canvas.style.left = "0px";
  canvas.style.top = "0px";
  intervals2pixels = canvas.width / (eventsInfo.end - eventsInfo.start);

  if (canvas.getContext == undefined) return;
  ctx = canvas.getContext('2d');
  ctx.lineWidth = 2;

  // background tiling image
  var bgimg = new Image();
  bgimg.src = "scroll.jpg";
  bgimg.onload = function() {
    ctx.fillStyle = ctx.createPattern(bgimg, 'repeat');
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
    //ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawMainLine(eventsInfo, canvas.height / 2);
    drawIntervalEvents(eventsInfo.intervalEvents, canvas.height/2 + renderInfo.eventHeightPx/2 + 5, "align-left");
    drawEvents(eventsInfo.events, canvas.height / 2 - 8, 50);
  };

  //var re117 = new Image();
  // re117.src = 'RE117.png';
  // re117.onload = function() {
  //   ctx.drawImage(re117, 0, 150, 2534/2, 1614/2);
  // };
}

function drawMainLine(line, yPx) {
  var eraPxSize = line.eraSize * intervals2pixels;
  var topPx = yPx - renderInfo.eventHeightPx/2;
  var textYPx = topPx - 3;

  var x = 0;
  var timeLabel = line.start;
  ctx.font = '14px Sans';

  while (true) {
    ctx.fillStyle = 'rgb(252, 224, 179)';
    if(x + eraPxSize < canvas.width) {
      ctx.fillRect(x, topPx, eraPxSize, renderInfo.eventHeightPx);
      drawLabel(String(timeLabel), x+3, textYPx);
      x += eraPxSize;
      timeLabel += line.eraSize;
    } else { break; }
    ctx.fillStyle = 'rgb(209, 173, 116)';
    if(x + eraPxSize < canvas.width) {
      ctx.fillRect(x, topPx, eraPxSize, renderInfo.eventHeightPx);
      drawLabel(String(timeLabel), x+3, textYPx);
      x += eraPxSize;
      timeLabel += line.eraSize;
    } else { break; }
  }
  ctx.fillRect(x, topPx, canvas.width - x, renderInfo.eventHeightPx);
  drawLabel(String(timeLabel), x+3, textYPx);
}

// Draw the interval events below the main line. The labelstyle determines how
// to draw the labels:
//   "squish"     -- Resize label to fit inside the interval
//   "adj-right"  -- Draw label on the right, adjacent to the interval
//   "align-left" -- No squish, just align left boundaries
function drawIntervalEvents(evnts, yPx, labelstyle) {
  if (evnts.length <= 0) return;
  evnts.sort((x, y) => x.start - y.start);  // increasing start time
  var lanes = [evnts[0].end*intervals2pixels]; // end times (in pixels)
  var sepPx = renderInfo.eventHeightPx + renderInfo.eventSpacingPx;

  drawIntervalEvent(evnts[0], yPx, labelstyle);
  for (var i = 1; i < evnts.length; i++) {
    var t = 0;
    var evntStartPx = evnts[i].start * intervals2pixels;
    var evntEndPx = evnts[i].end * intervals2pixels;
    var evntTextWidth = ctx.measureText(evnts[i].name).width;

    var rightBoundary;
    if (labelstyle == "adj-right") {
      rightBoundary = evntEndPx + evntTextWidth + 8;
    } else if (labelstyle == "align-left") {
      rightBoundary = Math.max(evntEndPx, evntStartPx + evntTextWidth + 8);
    } else {
      rightBoundary = evntEndPx;
    }

    while (t < lanes.length && evntStartPx < lanes[t]) t++;
    drawIntervalEvent(evnts[i], yPx + sepPx*t, labelstyle);
    if (t < lanes.length)
      lanes[t] = rightBoundary;
    else
      lanes.push(rightBoundary);
  }
}

function drawIntervalEvent(evnt, yPx, labelstyle) {
  var evntPxStart = (evnt.start - eventsInfo.start) / timespan * canvas.width;
  var evntPxLength = (evnt.end - evnt.start) / timespan * canvas.width;

  // draw rounded rect
  ctx.fillStyle = evnt.color;
  fillRoundedRect(ctx, evntPxStart, yPx, evntPxLength, renderInfo.eventHeightPx, 5);
  var oldstrokestyle = ctx.strokeStyle;
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
  drawRoundedRect(ctx, evntPxStart, yPx, evntPxLength, renderInfo.eventHeightPx, 5);
  ctx.strokeStyle = oldstrokestyle;

  // draw text
  if (labelstyle == "adj-right") {
    drawLabel(evnt.name, evntPxStart + evntPxLength + 4, yPx + 16);
  } else if (labelstyle == "align-left") {
    drawLabel(evnt.name, evntPxStart + 4, yPx + 16);
  } else {
    ctx.fillStyle = 'white';
    ctx.fillText(evnt.name, evntPxStart + 4, yPx + 16, evntPxLength - 8);
  }

  // make invisible button
  addButton(evntPxStart, yPx, evntPxLength, renderInfo.eventHeightPx, evnt.name);
}

function drawEvents(evnts, pointYPx, stalkPx) {
  if (evnts.length <= 0) return;
  evnts.sort((a, b) => b.when - a.when);
  var lanes = [];  // left pixel boundaries
  var sepPx = 25;

  var textWidth = ctx.measureText(evnts[0].name).width;
  var pointXPx = (evnts[0].when - eventsInfo.start) / timespan * canvas.width;
  var textXPx = Math.min(pointXPx - 10, canvas.width - textWidth);
  lanes.push(textXPx);
  drawEvent(evnts[0], pointXPx, pointYPx, textXPx, pointYPx - stalkPx, textWidth);
  for (var i = 1; i < evnts.length; i++) {
    textWidth = ctx.measureText(evnts[i].name).width;
    pointXPx = (evnts[i].when - eventsInfo.start) / timespan * canvas.width;
    textXPx = Math.min(pointXPx - 10, canvas.width - textWidth);

    var t = 0;
    while (t < lanes.length && lanes[t] < textWidth + textXPx) t++;
    var textYPx = pointYPx - stalkPx - sepPx*t;
    drawEvent(evnts[i], pointXPx, pointYPx, textXPx, textYPx, textWidth);
    if (t < lanes.length)
      lanes[t] = textXPx;
    else
      lanes.push(textXPx);
  }
}

function drawEvent(evnt, pointXPx, pointYPx, textXPx, textYPx, textWidth) {
  drawLabel(evnt.name, textXPx, textYPx, textWidth);

  ctx.fillStyle = 'black';
  ctx.strokeStyle = '#444444';
  ctx.beginPath();
  ctx.moveTo(pointXPx, pointYPx - 5);
  ctx.lineTo(pointXPx, textYPx + 3);            // vertical line
  ctx.moveTo(textXPx, textYPx + 3);
  ctx.lineTo(textXPx + textWidth, textYPx + 3); // horizontal line
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(pointXPx, pointYPx, 5, 0, Math.PI * 2, true);
  ctx.stroke();
}

// Draws a label with black text and a semi-transparent white background.
// Providing a textWidth can prevent recalculating it.
function drawLabel(text, x, y, textWidth=0) {
  if (textWidth == 0) textWidth = ctx.measureText(text).width;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  fillRoundedRect(ctx, x - 4, y - 14, textWidth + 8, 18, 9);
  ctx.fillStyle = 'black';
  ctx.fillText(text, x, y);
}

function handleMouseClick(e) {
  //console.log(e.offsetX + " " + e.offsetY);
}

function handleMouseMove(e) {

}

function addButton(x, y, width, height, eventName) {
  var b = document.createElement('button');
  b.onclick = function() {
    var evnt = eventsInfo.intervalEvents.find((e) => { return e.name == eventName; });
    var descrLabel = document.getElementById('descr-label');
    descrLabel.style.left = x+'px';
    descrLabel.style.top = (y+height)+'px';
    descrLabel.style.backgroundColor = 'white';
    descrLabel.innerHTML = `<u>${evnt.name}</u> (${evnt.start} - ${evnt.end})<br>${evnt.descr}`;
  };
  b.style.backgroundColor = 'transparent';
  b.style.border = 'transparent';
  b.style.position = 'absolute';
  b.style.left = x+'px';
  b.style.top = y+'px';
  b.style.width = width+'px';
  b.style.height = height+'px';
  document.body.appendChild(b);
}
