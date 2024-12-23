import EventEmitter from "events";

// create class qhich extends EventEmitter
class DataEmitter extends EventEmitter {
  constructor() {
    super();
  }

  /**
   * emulating line by line data
   * @param {Array} data - data transmit array
   */
  emitData(data) {
    data.forEach((item, index) => {
      setTimeout(() => {
        this.emit("data", item); // send every element as event
        if (index === data.length - 1) {
          this.emit("end"); // emulating end as event
        }
      }, index * 500); // delay between events
    });
  }
}

// usage example
const dataEmitter = new DataEmitter();

dataEmitter.on("data", (item) => {
  console.log(`Get data: ${item}`);
});

dataEmitter.on("end", () => {
  console.log("Got all data.");
});

// data array
const largeArray = [1, 2, 3, 4, 5];
dataEmitter.emitData(largeArray);
