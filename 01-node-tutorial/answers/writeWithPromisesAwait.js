const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile("temp.txt", "Line 1\n");
    await writeFile("temp.txt", "Line 2\n", { flag: "a" });
    await writeFile("temp.txt", "Line 3\n", { flag: "a" });
  } catch (error) {
    console.log("An error occurred while writing: ", error);
  }
}

async function reader() {
  try {
    const data = await readFile("temp.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log("An error occurred while reading: ", error);
  }
}

async function readWrite() {
  await writer();
  await reader();
}

readWrite();