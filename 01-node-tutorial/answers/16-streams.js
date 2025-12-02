const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 1000,
});

let counter = 0;

stream.on("data", (result) => {
  counter++; 
  console.log(result); 
});

stream.on("end", () => {
  console.log(`\nStream finished! Total chunks received: ${counter}`);
});

stream.on("error", (err) => {
  console.log(err);
});