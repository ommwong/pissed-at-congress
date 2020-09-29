const senateURL = 'https://api.propublica.org/congress/v1/116/senate/members.json';

const houseURL = 'https://api.propublica.org/congress/v1/116/house/members.json';

const BASE_URL = 'http://localhost:3000/';


export function getSenate() {
  return fetch (senateURL, {
    headers: {
      "X-Api-Key": "aVcWODV3HFAzELWz5pPE8Vcz4SRN3pAieStnAMTA"
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
      "X-Api-Key": "aVcWODV3HFAzELWz5pPE8Vcz4SRN3pAieStnAMTA"
    }
  })
    .then((res) => res.json())
    .catch(error => {
      console.log('Error:', error);
    })
};

export function getRepByAddress(line1, city, state, zip) {

  return fetch (`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAgcguYWQBmTmoc49ZxiMM4myA6q27cEso&address=${line1}%20
  ${city}%20${state}%20${zip}`)

  // return fetch ('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAgcguYWQBmTmoc49ZxiMM4myA6q27cEso&address=5789 Heywood St%20Simi Valley%20CA%2093065')

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
