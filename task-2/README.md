# Task 2: Async version of Array.prototype.map based on promises

## Description

`promiseMap` function is an async version of function `Array.prototype.map`, based on promises. It allows you to process the elements of the array in parallel with a limitation on the number of simultaneously performed tasks.

---

## Function signature

```javascript
promiseMap(array, asyncCallback, concurrency = Infinity)

array (Array) - an array of input data.
Asyncallback (Function) - asynchronous callback used to each element of the array.
  Returns Promise, which is allowed with the result of processing the current element.

Concurrency (Number) - (optionally) the maximum number of parallel tasks. By default - Infinity.

Returns Promise, which is resolved with an array of results.
```
## Demonstration
run demo-promise.js for promise based solution
```bash
node demo-promise.js
```
run demo-async-await for async/await solution
