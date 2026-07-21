const fs = require("fs");

const createReadStreamPromise = (path) => {
  return new Promise((resolve, reject) => {
    const data = [];

    const readStream = fs.createReadStream(path, {
      highWaterMark: 16,
    });

    readStream.on("data", (chunk) => {
      data.push(chunk);
    });

    readStream.on("end", () => {
      resolve(Buffer.concat(data).toString());
    });

    readStream.on("error", (err) => {
      reject(err);
    });
  });
};

createReadStreamPromise("./readme3.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
