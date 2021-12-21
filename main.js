
// SVG namespace
const svgns = "http://www.w3.org/2000/svg";

var svg;
var descrBox;
var descrBoxTitle;
var descrBoxBody;
var intervals2pixels;

var timespan = eventsInfo.end - eventsInfo.start;

// set by user interaction
var zoom = 1.0;
var stretch = 1.0;
var visibleGroups = ["rulers", undefined];

function init() {
  svg = document.getElementById('svg');
  descrBox = document.getElementById('descr-box');
  descrBoxTitle = document.getElementById('descr-box-title');
  descrBoxBody = document.getElementById('descr-box-body');

  // Parse dates (this really shouldn't happen here)
  for (var evnt of eventsInfo.events) {
    evnt.when = parseDate(evnt.when).year;
  }
  for (var evnt of eventsInfo.intervalEvents) {
    evnt.start = parseDate(evnt.start).year;
    evnt.end = parseDate(evnt.end).year;
  }
  for (var map of eventsInfo.maps) {
    map.when = parseDate(map.when).year;
  }

  renderInfo.widthPxOrig = renderInfo.widthPx;
  redraw();
}

function redraw() {
  svg.innerHTML = "";
  svg.setAttribute("viewBox", `0 0 ${renderInfo.widthPx} ${renderInfo.heightPx}`);
  svg.setAttribute("width", zoom * renderInfo.widthPx);
  intervals2pixels = renderInfo.widthPx / (eventsInfo.end - eventsInfo.start);

  drawMainLine(eventsInfo, renderInfo.heightPx / 2);
  var toDraw = eventsInfo.intervalEvents.filter((e) => {return visibleGroups.includes(e.group);});
  drawIntervalEvents(toDraw, renderInfo.heightPx/2 + renderInfo.eventHeightPx/2 + 5, "align-left");
  drawEvents(eventsInfo.events, renderInfo.heightPx / 2 - 8, 70);
  drawMaps(eventsInfo.maps, renderInfo.heightPx / 2 - 15);
  drawTimeMarkers(eventsInfo, renderInfo.heightPx / 2);
}

function drawMainLine(line, yPx) {
  var eraPxSize = line.eraSize * intervals2pixels;
  var topPx = yPx - renderInfo.eventHeightPx/2;
  var textYPx = topPx - 3;

  var x = 0;
  var odd = false;

  while (x + eraPxSize < renderInfo.widthPx) {
    var rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("fill", odd ? "rgb(209, 173, 116)" : "rgb(252, 224, 179)");
    rect.setAttribute("x", x);
    rect.setAttribute("y", topPx);
    rect.setAttribute("width", eraPxSize);
    rect.setAttribute("height", renderInfo.eventHeightPx);
    svg.appendChild(rect);
    x += eraPxSize;
    odd = !odd;
  }
  var rect = document.createElementNS(svgns, "rect");
  rect.setAttribute("fill", odd ? "rgb(209, 173, 116)" : "rgb(252, 224, 179)");
  rect.setAttribute("x", x);
  rect.setAttribute("y", topPx);
  rect.setAttribute("width", renderInfo.widthPx - x);
  rect.setAttribute("height", renderInfo.eventHeightPx);
  svg.appendChild(rect);
}

function drawTimeMarkers(line, yPx) {
  var eraPxSize = line.eraSize * intervals2pixels;
  var textYPx = yPx - renderInfo.eventHeightPx/2 - 6;
  var x = 0;
  var timeLabel = line.start;
  while (x + eraPxSize < renderInfo.widthPx) {
    var label = mkLabel(year2string(timeLabel), x+4, textYPx);
    svg.appendChild(label);
    x += eraPxSize;
    timeLabel += line.eraSize;
  }
  svg.appendChild(mkLabel(year2string(timeLabel), x+4, textYPx));
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
    var evntTextWidth = getTextWidth(evnts[i].name, "14px Laila");

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
  var evntPxStart = (evnt.start - eventsInfo.start) / timespan * renderInfo.widthPx;
  var evntPxLength = (evnt.end - evnt.start) / timespan * renderInfo.widthPx;
  var g = document.createElementNS(svgns, "g");
  g.setAttribute("class", "changeOnHover");

  // draw rounded rect
  var rect = document.createElementNS(svgns, "rect");
  rect.setAttribute("x", evntPxStart);
  rect.setAttribute("y", yPx);
  rect.setAttribute("width", evntPxLength);
  rect.setAttribute("height", renderInfo.eventHeightPx);
  rect.setAttribute("rx", 5);
  rect.setAttribute("ry", 5);
  rect.setAttribute("style", `fill: ${evnt.color}; stroke: rgba(0,0,0,0.1); stroke-width: 1px`);
  g.appendChild(rect);

  // draw text
  if (labelstyle == "adj-right") {
    g.appendChild(mkLabel(evnt.name, evntPxStart + evntPxLength + 4, yPx + 16));
  } else if (labelstyle == "align-left") {
    g.appendChild(mkLabel(evnt.name, evntPxStart + 4, yPx + 16));
  } else {
    console.log("interval event must be adj-right or align-left");
  }

  // click action
  g.onclick = getDisplayEventInfoFunction(evnt.name);

  svg.appendChild(g);
}

function drawEvents(evnts, pointYPx, stalkPx) {
  if (evnts.length <= 0) return;
  evnts.sort((a, b) => b.when - a.when);
  var lanes = [];  // left pixel boundaries
  var sepPx = 25;

  for (var i = 0; i < evnts.length; i++) {
    textWidth = getTextWidth(evnts[i].name, "14px Laila");
    pointXPx = (evnts[i].when - eventsInfo.start) / timespan * renderInfo.widthPx;
    textXPx = Math.min(pointXPx - 10, renderInfo.widthPx - textWidth - 8);

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
  var stalk = document.createElementNS(svgns, "line");
  stalk.setAttribute("x1", pointXPx);
  stalk.setAttribute("y1", pointYPx - 5);
  stalk.setAttribute("x2", pointXPx);
  stalk.setAttribute("y2", textYPx + 3);
  stalk.setAttribute("style", "stroke: #444444; stroke-width: 2px");
  svg.appendChild(stalk);

  var circle = document.createElementNS(svgns, "circle");
  circle.setAttribute("cx", pointXPx);
  circle.setAttribute("cy", pointYPx);
  circle.setAttribute("r", 4);
  circle.setAttribute("style", "fill: transparent; stroke: #444444; stroke-width: 2px");
  svg.appendChild(circle);
}

function drawEventText(text, textXPx, textYPx, textWidth) {
  var buttonLabel = mkButtonLabel(text, textXPx, textYPx, textWidth)

  var line = document.createElementNS(svgns, "line");
  line.setAttribute("x1", textXPx);
  line.setAttribute("y1", textYPx + 3);
  line.setAttribute("x2", textXPx + textWidth);
  line.setAttribute("y2", textYPx + 3);
  line.setAttribute("style", "stroke: #444444; stroke-width: 2px");
  buttonLabel.appendChild(line);
  svg.appendChild(buttonLabel);
}

function drawMaps(maps, yPx) {
  for (let map of maps) {
    let xPx = (map.when - eventsInfo.start) / timespan * renderInfo.widthPx;
    let icon = document.createElementNS(svgns, 'image');
    icon.onclick = function() {
      descrBoxBody.style.width = "auto";
      descrBoxBody.innerHTML = `<img src="${map.image}" style="max-width: 1500px; max-height: 900px"/>`;
      descrBoxTitle.innerHTML = `${year2string(map.when)}: ${map.title}`;
      descrBox.hidden = false;
    };
    icon.setAttribute("class", "changeOnHover")
    icon.setAttribute("href", "map.svg");
    icon.setAttribute("x", (xPx-25));
    icon.setAttribute("y", (yPx-55));
    icon.setAttribute("width", 50);
    icon.setAttribute("height", 50);
    svg.appendChild(icon);
  }
}


// Makes a label with black text and a semi-transparent white background.
// Providing a textWidth can prevent recalculating it.
function mkLabel(text, x, y, textWidth=0) {
  if (textWidth == 0) textWidth = getTextWidth(text, "14px Laila");

  var txt = document.createElementNS(svgns, "text");
  txt.innerHTML = text;
  txt.setAttribute("x", x);
  txt.setAttribute("y", y);
  txt.setAttribute("fill", "black");
  txt.setAttribute("style", "font: 14px Laila; cursor: default;");

  var rect = document.createElementNS(svgns, "rect");
  rect.setAttribute("x", x - 4);
  rect.setAttribute("y", y - 14);
  rect.setAttribute("rx", 9);
  rect.setAttribute("ry", 9);
  rect.setAttribute("height", 18);
  rect.setAttribute("width", textWidth + 8);
  rect.setAttribute("style", "fill: white; opacity: 0.7;");

  var g = document.createElementNS(svgns, "g");
  g.appendChild(rect);
  g.appendChild(txt);
  return g;
}

// same as mkLabel with an onclick set by getDisplayEventInfoFunction(text)
function mkButtonLabel(text, x, y, textWidth=0) {
  var g = mkLabel(text, x, y, textWidth);
  g.onclick = getDisplayEventInfoFunction(text);
  g.setAttribute("class", "changeOnHover");
  return g;

}

function getDisplayEventInfoFunction(eventName) {
  // find the event specified by text
  var evnt = eventsInfo.intervalEvents.find((e) => { return e.name == eventName; })
          || eventsInfo.events.find((e) => { return e.name == eventName; });
  var evntWhen = evnt.when ? year2string(evnt.when) : `${year2string(evnt.start)} - ${year2string(evnt.end)}`;
  var boxPxWidth;
  var evntDescr;
  if (evnt.file) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        evntDescr = this.responseText;
        boxPxWidth = Math.max(Math.round(Math.sqrt(evntDescr.length))*18, 300);
      } else if (this.readyState == 4) {
        evntDescr = "description unavailable";
        boxPxWidth = 300;
      }
    };
    xhttp.open("GET", evnt.file);
    xhttp.send();
  } else if (evnt.descr) {
    evntDescr = evnt.descr;
    boxPxWidth = Math.max(Math.round(Math.sqrt(evntDescr.length))*18, 300);
  } else {
    evntDescr = "description unavailable";
    boxPxWidth = 300;
  }

  return function() {
    descrBoxTitle.innerHTML = `<u>${evnt.name}</u> (${evntWhen})`;
    descrBoxBody.innerHTML = evntDescr;
    descrBoxBody.style.width = boxPxWidth + "px";
    descrBox.hidden = false;
  };
}

// This method should not have to exist, but it does because web
// programming is stupid.
function getTextWidth(text, font) {
  // re-use canvas object for better performance
  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

function setZoom() {
  zoom = document.getElementById("zoom-input").value / 100;
  svg.setAttribute("width", zoom * renderInfo.widthPx);
}

function setStretch() {
  stretch = document.getElementById("stretch-input").value / 100;
  renderInfo.widthPx = renderInfo.widthPxOrig * stretch;
  redraw();
}

function userSettingChanged() {
  stretch = document.getElementById("stretch-input").value / 100;
  renderInfo.widthPx = renderInfo.widthPxOrig * stretch;

  visibleGroups = [];
  if (document.getElementById("rulers-checkbox").checked) visibleGroups.push("rulers");
  if (document.getElementById("others-checkbox").checked) visibleGroups.push(undefined);

  redraw();
}
