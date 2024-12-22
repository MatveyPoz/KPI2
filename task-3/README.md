# Task 3: Async version of Array.prototype.map based on promises with AbortSignal handling

## Description

`promiseMap` function is an async version of function `Array.prototype.map`, based on promises. Added support AbortSignal from AbortContoller

---

## Function signature

```javascript
promiseMapWithAbort(array, asyncCallback, { concurrency = Infinity, signal } = {})

array (Array) - an array of input data.
asynCallback (Function) - asynchronous callback used to each element of the array.
  Returns Promise, which is allowed with the result of processing the current element.
options:
  Concurrency (Number) - (optionally) the maximum number of parallel tasks. By default - Infinity.
  signal (AbortSignal) - object for managing operations cancelling
Returns Promise<Array>, which is resolved with an array of results or rejectes if the operation is canceled.
```
## Demonstration
run demo.js
```bash
node demo.js
```
uncomment demo.js:10 to send AbortSignal
