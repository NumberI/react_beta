import axios from 'axios';

const id = "32a588f947f4b88f36ea";
const sec = "5048b4f8c8903bf5f6d64e6887825e7ad13437c8";
const param = `?client_id=${id}&cient_secret=${sec}`;

function getUserInfo (username = 'NumberI') {
  return axios.get(`https://api.github.com/users/${username + param}`)
}

function getRepos (username = 'NumberI') {
  return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`)
}

function getTotalStars (repos) {
  return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0)
}

async function getPlayersData (player) {
  try {
    const repos = await getRepos(player.login)
    const totalStars = await getTotalStars(repos)
    return {
      followers: player.followers,
      totalStars
    }
  } catch (err) {
    console.warn('Error in githubHelpers:', err)
  }
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

export async function getPlayersInfo (players) {
  try {
    const info = await Promise.all(players.map((username) => getUserInfo(username)))
    return info.map((user) => user.data)
  } catch (err) {
    console.warn('Error in getPlayersInfo', err)
  }
};

export async function battle (players) {
  try {
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);
    const data = await Promise.all([playerOneData, playerTwoData])
    return await calculateScores(data)
  } catch (err) {
    console.warn('Error in getPlayersInfo: ', err)
  }
};