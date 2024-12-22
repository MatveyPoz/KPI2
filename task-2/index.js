//asyncMap on promise implementation
export function promiseMap(array, asyncCallback, concurrency = Infinity) {
  const results = [];
  const executing = [];
  let currentIndex = 0;

  function enqueue() {
    // if all array elements processed return resoled promise
    if (currentIndex >= array.length) return Promise.resolve();
    const index = currentIndex++;

    // create promise which performs asyncallback for current element in array.
    const task = asyncCallback(array[index]).then((result) => {
      results[index] = result;
    });
    executing.push(task);

    // removing executed promise
    const removeTask = () => {
      executing.splice(executing.indexOf(task), 1);
    };
    task.finally(removeTask);

    // check for limit of parallels
    if (executing.length >= concurrency)
      return Promise.race(executing).then(enqueue);
    return enqueue();
  }

  // runing process, calling enqueue.
  return enqueue()
    .then(() => Promise.all(executing))
    .then(() => results);
}
