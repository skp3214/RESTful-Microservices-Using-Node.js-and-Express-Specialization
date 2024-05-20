const axios = require('axios');
const config = require("../config");

// Function to get the access token
function getGithubAccessToken(code, done) {
  const body = {
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET,
    code,
  };
  const opts = { headers: { accept: 'application/json' } };

  axios.post('https://github.com/login/oauth/access_token', body, opts)
    .then(response => response.data.access_token)
    .then(token => {
      if (!token) {
        throw new Error('Invalid token');
      }
      done(null, token);
    })
    .catch(err => {
      done({ err: err.message });
    });
}

module.exports = {
  getGithubAccessToken
};
