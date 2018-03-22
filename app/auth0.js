const jwt = require('koa-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = jwt({
  secret: jwks.koaJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://geo-reminder.auth0.com/.well-known/jwks.json"
  }),
  audience: 'geo-reminder.com',
  issuer: "https://geo-reminder.auth0.com/",
  algorithms: ['RS256']
});

module.exports = jwtCheck;