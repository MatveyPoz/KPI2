import { promiseMapWithAbort } from "./index.js";

(async () => {
  const nums = [1, 2, 3];
  const controller = new AbortController(); // create controller for managment canceling
  const { signal } = controller;

  // emulating cancel operation in 1500 ms
  // comment to remove cancel operation
  setTimeout(() => controller.abort(), 1500);

  try {
    const results = await promiseMapWithAbort(
      nums,
      async (num) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Processing: ${num}`);
            resolve(num * 2);
          }, 1000);
        });
      },
      { concurrency: 2, signal },
    );

    console.log("Result:", results);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
