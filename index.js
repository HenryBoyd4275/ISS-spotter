// index.js

const { nextISSTimesForMyLocation } = require('./iss');


const print = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next at ${datetime} for ${duration} seconds`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("Error:", error);
  }
  print(passTimes);
});
