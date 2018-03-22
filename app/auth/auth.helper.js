const axios = require('axios');

function getToken() {
  const url = 'https://geo-reminder.auth0.com/oauth/token';
  const headers = { 'content-type': 'application/json' };
  const body = {
    client_id: 'RRbEX8SNLiINQtOHMcyTDOx6Cdq9Cw9C',
    client_secret: 'EiBRU11CgOvt4HRfn2was8f0UHMtt_VUzabG1igOnR6iBFTMGXupgfMnEmVYySmQ',
    audience: 'geo-reminder.com',
    grant_type: 'client_credentials'
  };

  return axios.post(url, body, { headers })
}

module.exports = {
  getToken,
}
