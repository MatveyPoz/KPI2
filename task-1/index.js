//asyncMap with debonce implementation
export function asyncMap(
  array,
  asyncCallback,
  finalCallback,
  debounceTime = 0,
) {
  const results = [];
  let completed = 0; // amount of ended operations
  let lastExecutionTime = Date.now(); // last callback`s execution time

  array.forEach((item, index) => {
    // ths function runs asyncCllback for each element im array
    const execute = () => {
      asyncCallback(item, (err, result) => {
        if (err) {
          finalCallback(err, null);
          return;
        }
        results[index] = result;
        completed++;
        if (completed === array.length) {
          finalCallback(null, results);
        }
      });
    };

    // implementatin of debounce
    // for reference used contruction of realization async running tasks on arduino
    const now = Date.now();
    if (now - lastExecutionTime >= debounceTime) {
      lastExecutionTime = now;
      execute();
    } else {
      setTimeout(execute, debounceTime - (now - lastExecutionTime));
      lastExecutionTime = now + debounceTime;
    }
  });
}
