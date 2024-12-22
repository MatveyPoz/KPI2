import Readable from "stream";

function createStreamFromArray(data) {
  let index = 0;

  return new Readable({
    objectMode: true, // permit object stream
    read() {
      if (index < data.length) {
        this.push(data[index++]); // divwe next array element to stream
      } else {
        this.push(null); // data is ended
      }
    },
  });
}

/**
 * processe data from stream line buy line
 *
 * @param {Readable} stream - actually, stream
 * @param {Function} processFn - function, which procesiing every element
 * @returns {Promise} gets after procession
 */
async function processStream(stream, processFn) {
  for await (const chunk of stream) {
    await processFn(chunk);
  }
}

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
