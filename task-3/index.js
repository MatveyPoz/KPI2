// async map implementation with AbortController support

export function promiseMapWithAbort(
  array,
  asyncCallback,
  { concurrency = Infinity, signal } = {},
) {
  const results = [];
  const executing = [];
  let currentIndex = 0;

  // check is operarion aborted
  if (signal?.aborted) {
    return Promise.reject(new Error("Operation was aborted"));
  }

  function enqueue() {
    if (currentIndex >= array.length) {
      return Promise.resolve();
    }

    const index = currentIndex++;
    const task = asyncCallback(array[index]).then((result) => {
      results[index] = result;
    });

    executing.push(task);

    const removeTask = () => {
      executing.splice(executing.indexOf(task), 1);
    };

    task.finally(removeTask);

    // if amount of parallel tasks overlimited, waiting
    if (executing.length >= concurrency) {
      return Promise.race(executing).then(enqueue);
    }

    return enqueue();
  }

  return new Promise((resolve, reject) => {
    // cancel signal handler
    const onAbort = () => {
      reject(new Error("Operation was aborted"));
    };

    signal?.addEventListener("abort", onAbort);

    enqueue()
      .then(() => Promise.all(executing))
      .then(() => resolve(results))
      .catch(reject)
      .finally(() => {
        signal?.removeEventListener("abort", onAbort);
      });
  });
}
