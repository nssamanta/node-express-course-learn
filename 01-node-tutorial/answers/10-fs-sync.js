const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

console.log("start");

const filePath = path.join(__dirname, "temporary", "fileA.txt");

writeFileSync(filePath, "This is line 1\n");

writeFileSync(filePath, "This is line 2\n", { flag: "a" });

writeFileSync(filePath, "This is line 3\n", { flag: "a" });

console.log("done with this task");
console.log("starting the next one");

const result = readFileSync(filePath, "utf8");
console.log("--- File Contents ---");
console.log(result);
