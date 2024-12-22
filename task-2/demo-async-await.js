import { promiseMap } from "./index.js"; // importing promiseMap from index.js
(async () => {
  const nums = [1, 2, 3];

  try {
    const results = await promiseMap(
      nums,
      async (num) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(num * 2);
          }, 1000);
        });
      },
      2, // max 2 parallel tasks
    );

    console.log("Result (Async/Await):", results); // [2, 4, 6]
  } catch (err) {
    console.error("Error:", err);
  }
})();
