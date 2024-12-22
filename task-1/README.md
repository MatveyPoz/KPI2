# Task 1: Async version of Array.prototype.map

## Description

`asyncMap` function is an async version of function `Array.prototype.map`. It allows to work with array`s elements using async operations

Implemention supports **debounce** to minimize the frequency of processors, in case they are performed too quickly

---

## Function signature

```javascript
asyncMap(array, asyncCallback, finalCallback, debounceTime = 0)

array (Array) - internal data array
asyncCallback (Function) - async callback, applied to each element of an array
  Accepts:
  current element of array,
  callback, which accepts err (error) and result (result of function)

finalCallback (Function) - callback, which calls after end of processing all elements
  Accepts:
  err (error if it was),
  results (array of results)
debounceTime (Number) - (optional) min time between calling asyncCallback (in ms)

```
## Demonstration
run demo.js
```bash
node demo.js
```
