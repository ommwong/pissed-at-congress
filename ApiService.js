const senateURL = 'https://api.propublica.org/congress/v1/116/senate/members.json';

// const houseURL = 'https://api.propublica.org/congress/v1/116/house/members.json';

// // const googleAPI = `https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAgcguYWQBmTmoc49ZxiMM4myA6q27cEso&address=${line1}%20${}%20St.%20Las%20Vegas%20NV`

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

// export function getHouse() {
//   return fetch (houseURL, {
//     headers: {
//       "X-Api-Key": "aVcWODV3HFAzELWz5pPE8Vcz4SRN3pAieStnAMTA"
//     }
//   })
//     .then((res) => res.json())
//     .catch(error => {
//       console.log('Error:', error);
//     })
// };

export function getRepByAddress(line1, city, state, zip) {

  return fetch ('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAgcguYWQBmTmoc49ZxiMM4myA6q27cEso&address=${line1}%20${city}%20${state}%20${zip}')

  .then((res) => res.json())
    .catch(error => {
      console.log('Error:', error);
    })
}