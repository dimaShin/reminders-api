const auth = require('./auth.helper');

module.exports = {
  async signin(ctx) {
    console.log('authorized ctx: ', ctx.state);
    const token = await auth.getToken();
    console.log('got token: ', token.data);
    ctx.body = token.data;
  }
};
/**
 * { user: 
    { iss: 'https://geo-reminder.auth0.com/',
      sub: 'RRbEX8SNLiINQtOHMcyTDOx6Cdq9Cw9C@clients',
      aud: 'geo-reminder.com',
      iat: 1521496630,
      exp: 1521583030,
      azp: 'RRbEX8SNLiINQtOHMcyTDOx6Cdq9Cw9C',
      gty: 'client-credentials' } }
 * 
 * **/