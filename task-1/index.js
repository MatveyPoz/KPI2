//const nums = [1, 2, 3];
//const double_nums = nums.map((num) => num * 2);
//console.log(double_nums);

// async map implementation
// asyncMap takes an array, asyncCallback and returns mapped array throw finalCallback
function asyncMap(array, asyncCallback, finalCallback) {
  const results = [];
  let completed = 0;

  array.forEach((item, index) => {
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
  });
}

// demonstration (added 1000 ms delay for async operations emulating)
const nums = [1, 2, 3];

asyncMap(
  nums,
  (num, cb) => {
    setTimeout(() => {
      cb(null, num * 2);
    }, 1000); // Эмулируем асинхронную операцию
  },
  (err, result) => {
    if (err) {
      console.error("Ошибка:", err);
    } else {
      console.log("Результат:", result); // [2, 4, 6]
    }
  },
);
