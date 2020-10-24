const senateURL = 'https://api.propublica.org/congress/v1/116/senate/members.json';

const houseURL = 'https://api.propublica.org/congress/v1/116/house/members.json';

const BASE_URL = 'http://localhost:3000/';


export function getSenate() {
  return fetch (senateURL, {
    headers: {
      "X-Api-Key": process.env.PROPUBLICA_API_KEY
    }
  })
    .then((res) => res.json())
    .catch(error => {
      console.log('Error:', error);
    })
};

export function getHouse() {
  return fetch (houseURL, {
    headers: {
      "X-Api-Key": process.env.PROPUBLICA_API_KEY
    }
  })
    .then((res) => res.json())
    .catch(error => {
      console.log('Error:', error);
    })
};

export function getRepByAddress(line1, city, state, zip) {

  return fetch (`https://www.googleapis.com/civicinfo/v2/representatives?key=process.env.GOOGLE_API_KEY&address=${line1}%20
  ${city}%20${state}%20${zip}`)


  .then((res) => res.json())
    .catch(error => {
      console.log('Error:', error);
    })
}

export function register (name, username, password) {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(name, username, password),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function login (username, password) {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(username, password),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
