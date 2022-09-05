var fs = require('fs');

let dict = {
  "1" : 10.001,
  "2" : 10.002,
  "3" : 10.003,
  "4" : 10.004,
  "5" : 10.005,
  "6" : 10.006,
  "7" : 10.007,
  "8" : 10.008,
  "9" : 10.009,
  "10" : 10.010,
  "11" : 10.011,
  "12" : 10.012,
  "13" : 10.013,
  "14" : 10.014,
  "15" : 10.015,
  "16" : 10.016,
  "17" : 10.017,
  "18" : 10.018,
  "19" : 10.019,
  "20" : 10.020,
  "21" : 10.021,
  "22" : 10.022,
  "23" : 10.023,
  "24" : 10.024,
  "25" : 10.025,
  "26" : 10.026,
  "27" : 10.027,
  "28" : 10.028,
  "29" : 10.029,
  "30" : 10.030,
  "31" : 10.031,
  "32" : 10.032,
  "33" : 10.033,
  "34" : 10.034,
  "35" : 10.035,
  "36" : 10.036,
  "37" : 10.037,
  "38" : 10.038,
  "39" : 10.039,
  "40" : 10.040,
  "41" : 10.041,
  "42" : 10.042,
  "43" : 10.043,
  "44" : 10.044,
  "45" : 10.045
}

let my_array = [
  44,
  44,
  44,

];
let file = [];

const main = () => {
  for (let i = 0; i < my_array.length; i++) {
    file.push(dict[my_array[i]]);
  }
  let json = JSON.stringify(file);
  fs.writeFile('currentArray.json', json, 'utf8', (err) => {
    if (err) {
      console.log("failed");
    } else {
      console.log("success");
    }
  });
  console.log(file);
}

main();
