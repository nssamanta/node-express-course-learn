const { writeFile } = require("fs");
const path = require("path");

console.log("at start");

const filepath = path.join(__dirname, "temporary", "fileB.txt");

writeFile(filepath, "This is line 1\n", (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log(err);
    return;
  }

  writeFile(filepath, "This is line 2\n", { flag: "a" }, (err, result) => {
    console.log("at point 2");
    if (err) {
      console.log(err);
      return;
    }

    writeFile(filepath, "This is line 3\n", { flag: "a" }, (err, result) => {
      console.log("at point 3");
      if (err) {
        console.log(err);
        return;
      }
      console.log("SUCCESS: All lines written");
    });
  });
});

console.log("at end");
