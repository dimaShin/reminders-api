function toSQL(input) {
  switch (true) {
    case Array.isArray(input):
      return pointsToPolygon(input);
    case input.radius:
      return pointToPolygon(input);
    case !input.radius:
      return pointToPolygon({ point: input, radius: 1000 });
    default:
      throw new Error('Incorrect input format for Polygon.toSQL');
  }
}

function pointToPolygon({ point, radius }) {
  return `polygon(circle(point${pointToSQL(point)}, ${radius}))`;
}

function pointsToPolygon(points) {
  const result = points.reduce((acc, point) => {
    acc += pointToSQL(point);
    return acc;
  }, '').replace(/\)\(/g, '),(');

  return `'${result}'`;
}

function pointToSQL({ lat, lng }) {
  return `(${lat},${lng})`;
}

function toJSON(polygon) {
  return polygon
    .replace(/\)|\(/g, '')
    .split(',')
    .reduce((acc, value) => {
      const last = acc[acc.length -1];
      if (!last || last.lng) {
        acc.push({ lat: value });
      } else {
        last.lng = value;
      }

      return acc;
    }, [])
}

function isSQL(value) {
  return typeof value === 'string';
}

module.exports = {
  toSQL,
  toJSON,
  isSQL,
  pointToSQL,
}