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

  for (var evnt of eventsInfo.events) {
    evnt.when = parseDate(evnt.when).year;
  }
  for (var evnt of eventsInfo.intervalEvents) {
    evnt.start = parseDate(evnt.start).year;
    evnt.end = parseDate(evnt.end).year;
  }

  // background tiling image
  var bgimg = new Image();
  bgimg.src = "scroll.jpg";
  bgimg.onload = function() {
    ctx.fillStyle = ctx.createPattern(bgimg, 'repeat');
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
    //ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawMainLine(eventsInfo, canvas.height / 3);
    var partitionedEvents = partition(eventsInfo.intervalEvents, (e) => {return e.group;});
    var yPx = canvas.height/3 + renderInfo.eventHeightPx/2 + 5;
    for (var group of eventsInfo.groupOrder) {
      var h = drawIntervalEvents(partitionedEvents[group], yPx, "align-left");
      yPx += h;
    }
    drawEvents(eventsInfo.events, canvas.height / 3 - 8, 50);
    drawTimeMarkers(eventsInfo, canvas.height / 3);
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
  ctx.font = '12px Sans';

  while (true) {
    ctx.fillStyle = 'rgb(252, 224, 179)';
    if(x + eraPxSize < canvas.width) {
      ctx.fillRect(x, topPx, eraPxSize, renderInfo.eventHeightPx);
      x += eraPxSize;
    } else { break; }
    ctx.fillStyle = 'rgb(209, 173, 116)';
    if(x + eraPxSize < canvas.width) {
      ctx.fillRect(x, topPx, eraPxSize, renderInfo.eventHeightPx);
      x += eraPxSize;
    } else { break; }
  }
  ctx.fillRect(x, topPx, canvas.width - x, renderInfo.eventHeightPx);
}

function drawTimeMarkers(line, yPx) {
  var eraPxSize = line.eraSize * intervals2pixels;
  var textYPx = yPx - renderInfo.eventHeightPx/2 - 6;
  var x = 0;
  var timeLabel = line.start;
  ctx.font = '12px Sans';
  while (x + eraPxSize < canvas.width) {
    drawLabel(year2string(timeLabel), x+4, textYPx);
    x += eraPxSize;
    timeLabel += line.eraSize;
  }
  drawLabel(year2string(timeLabel), x+4, textYPx);
}

// Draw the interval events below the main line. The labelstyle determines how
// to draw the labels:
//   "squish"     -- Resize label to fit inside the interval
//   "adj-right"  -- Draw label on the right, adjacent to the interval
//   "align-left" -- No squish, just align left boundaries
function drawIntervalEvents(evnts, yPx, labelstyle) {
  if (evnts.length <= 0) return;
  evnts.sort((x, y) => x.start - y.start);  // increasing start time
  var lanes = []; // end times (in pixels)
  var sepPx = renderInfo.eventHeightPx + renderInfo.eventSpacingPx;

  for (var i = 0; i < evnts.length; i++) {
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
  return lanes.length*sepPx;
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

  for (var i = 0; i < evnts.length; i++) {
    textWidth = ctx.measureText(evnts[i].name).width;
    pointXPx = (evnts[i].when - eventsInfo.start) / timespan * canvas.width;
    textXPx = Math.min(pointXPx - 10, canvas.width - textWidth - 8);

    var t = 0;
    while (t < lanes.length && lanes[t] < textXPx + textWidth + 8) t++;
    var textYPx = pointYPx - stalkPx - sepPx*t;
    evnts[i].textXPx = textXPx;
    evnts[i].textYPx = textYPx;
    evnts[i].textWidth = textWidth;
    drawEventStalk(pointXPx, pointYPx, textYPx);
    if (t < lanes.length)
      lanes[t] = textXPx;
    else
      lanes.push(textXPx);
  }

  // draw labels
  for (var evnt of evnts)
    drawEventText(evnt.name, evnt.textXPx, evnt.textYPx, evnt.textWidth);
}

function drawEventStalk(pointXPx, pointYPx, textYPx) {
  ctx.strokeStyle = '#444444';
  ctx.beginPath();
  ctx.moveTo(pointXPx, pointYPx - 5);
  ctx.lineTo(pointXPx, textYPx + 3);            // vertical line
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(pointXPx, pointYPx, 4, 0, Math.PI * 2, true);
  ctx.stroke();
}

function drawEventText(text, textXPx, textYPx, textWidth) {
  drawLabel(text, textXPx, textYPx, textWidth);
  ctx.beginPath();
  ctx.moveTo(textXPx, textYPx + 3);
  ctx.lineTo(textXPx + textWidth, textYPx + 3); // horizontal line
  ctx.stroke();

  // invisible button
  addButton(textXPx, textYPx - 16, textWidth, 18, text);
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

  // find the event specified by eventName
  var evnt = eventsInfo.intervalEvents.find((e) => { return e.name == eventName; });
  if (!evnt) {
    evnt = eventsInfo.events.find((e) => { return e.name == eventName; });
  }
  var evntWhen = evnt.when ? year2string(evnt.when) : `${year2string(evnt.start)} - ${year2string(evnt.end)}`;

  // set up the button
  var b = document.createElement('button');
  var descrLabel = document.getElementById('descr-label');
  var boxPxWidth = evnt.descr ? Math.max(Math.round(Math.sqrt(evnt.descr.length))*20, 300) : 300;
  b.onclick = function() {
    descrLabel.style.left = x+'px';
    descrLabel.style.top = (y+height+5)+'px';
    descrLabel.style.width = boxPxWidth + "px";
    descrLabel.style.backgroundColor = 'white';
    descrLabel.innerHTML = `<u>${evnt.name}</u> (${evntWhen})<br>${evnt.descr}`;
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
