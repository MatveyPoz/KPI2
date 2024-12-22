import { asyncMap } from "./index.js"; // importing asyncMap from index.js

const nums = [1, 2, 3];

//demonstrtion running asyncMap with debounce
asyncMap(
  nums,
  (num, cb) => {
    // async callback (emulates 1000 ms delay), returns an array with doubled elements
    setTimeout(() => {
      cb(null, num * 2);
    }, 1000);
  },
  (err, result) => {
    if (err) console.error("Error:", err);
    else console.log("Result with debounce:", result);
  },
  500, // debounceTime = 500ms
);
