import { promiseMap } from "./index.js"; // importing promiseMap from index.js

const nums = [1, 2, 3];

promiseMap(
  nums,
  (num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num * 2);
      }, 1000);
    });
  },
  2, // max 2 parralel tasks
)
  .then((results) => {
    console.log("Result (Promise):", results); // [2, 4, 6]
  })
  .catch((err) => {
    console.error("Error:", err);
  });
