# Task 4: Stream processing

## Description

This task implements stream processing using `Readable` from the `stream` module and the `readline` library. This allows you to process large arrays or files that do not fit in RAM, loading them in parts.

---

## Implementation

### Stream processing of an array
The `createStreamFromArray` function creates a stream (`Readable`), which sequentially passes the elements of the array to the handler. The `processStream` function processes the data from the stream line by line.

### Stream processing of files
The `fs` module is used to read the file as a stream. Line by line processing is implemented using `readline`.

---

## Installation and usage

###Example of usage: array processing

```javascript
(async () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1); // generating large array
  const stream = createStreamFromArray(largeArray);

  console.log("Processing data...");

  await processStream(stream, async (data) => {
    // emulating async processing (for 500000 lines its enough)
    await new Promise((resolve) => setTimeout(resolve, 1));
    console.log(`Processed: ${data}`);
  });

  console.log("Ended succesfully!");
})();
```

### Example of usage: file processing

```javascript
(async () => {
  const filePath = "./largeFile.txt";
  console.log("Processing file...");

  await processFile(filePath, async (line) => {
    // Эмулируем асинхронную обработку строки
    await new Promise((resolve) => setTimeout(resolve, 1));
    console.log(`Procesed: ${line}`);
  });

  console.log("Done!");
})();
```

## Testing
Limit memory (largeFile is about 5.9 Mb, whic bigger then 5 Mb RAM limit) and run the script:
```bash
node --max-old-space-size=5 processFile.js
```

## Features
Stream processing: Minimizes memory usage.
Asynchronous: Supports asynchronous processing of each element.
Flexible: Works with arrays and large files.

## Note
Processing such a big text file can take a while, but i can`t find simpler example to demonstrate processing relatively big files
