var data = [
  {
    high: 78.2,
    location: 'Gainesville, FL'
  },
  {
    high: 68,
    location: 'Santa Monica, CA',
  },
  {
    high: 85,
    location: 'Miami, FL',
  }
];

// give me the location with highest temperature

// return the highest temperature
const highTempFunc = (acc,cur) => Math.max(acc, cur.high);


// highTempvalue will hold the highest temperature
const highTempValue = data.reduce(highTempFunc, 0);

// filteredData will contain the data for the highest temperature
const filteredData = data.filter((val) => val.high === highTempValue);

// now loop return the location containing the highest temperature.
console.log(filteredData.map((val) => val.location)[0]);
