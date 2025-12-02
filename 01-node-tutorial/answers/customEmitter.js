const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("response", (name, id) => {
  console.log(`Data received! User: ${name} with ID: ${id}`);
});

emitter.emit("response", "John", 34);
emitter.emit("response", "Jane", 99);

emitter.on("timer", (msg) => console.log(msg));
setInterval(() => {
  emitter.emit("timer", "Timer event fired: Hi there!");
}, 2000);

const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on("happens", (msg) => resolve(msg));
  });
};

const doWait = async () => {
  const msg = await waitForEvent();
  console.log("We got an event! Here it is: ", msg);
};

doWait();
emitter.emit("happens", "Hello World!");