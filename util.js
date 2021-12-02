function partition(lst, getGroup) {
  var ret = {};
  for (var x of lst) {
    var g = String(getGroup(x));
    if (g in ret)
      ret[g].push(x);
    else
      ret[g] = [x];
  }
  return ret;
}

function year2string(date) {
  if (date < 0) return `${-date} BCE`;
  if (date > 0) return `${date} CE`;
  return "1 CE";
}

function parseDate(date) {
  date = String(date).toLowerCase();

  // "day month year" format
  var result = (/(\d+)\s+([a-z]+)\s+(\d+)\s*(bce|ce|)/).exec(date);
  if (result != null) return {
    "day" : Number(result[1]),
    "month" : result[2],
    "year" : Number(result[3]) * (result[4] == 'bce' ? -1 : 1)
  };

  // "month year" format
  result = (/([a-z]+)\s+(\d+)\s*(bce|ce|)/).exec(date);
  if (result != null) return {
    "month" : result[1],
    "year" : Number(result[2]) * (result[3] == 'bce' ? -1 : 1)
  };

  // "year" format
  result = (/(\d+)\s*(bce|ce|)/).exec(date);
  if (result != null) return {
    "year" : Number(result[1]) * (result[2] == 'bce' ? -1 : 1)
  }

  throw `Error: "${date}" is an invalid date`;
}
