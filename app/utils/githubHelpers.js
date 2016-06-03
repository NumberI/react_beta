var axios = require('axios');

var id = "32a588f947f4b88f36ea";
var sec = "5048b4f8c8903bf5f6d64e6887825e7ad13437c8";
var param = "?client_id=" + id + "&cient_secret="+ sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username);
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo', err);
    })
  }
};

module.exports = helpers;