import fs from "fs";
import readline from "readline";

/**
 * Porecesse file line by line
 *
 * @param {string} filePath
 * @param {Function} processFn - function, which processing every element
 * @returns {Promise} gets after procession
 */
async function processFile(filePath, processFn) {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // every endline symbols
  });

  for await (const line of rl) {
    await processFn(line); // processing every line
  }
}

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
