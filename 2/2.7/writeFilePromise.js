const fs = require("fs").promises;

fs.writeFile("./writetext2.txt", "야호")
  .then((data) => {
    console.log("성공");
  })
  .catch((err) => {
    throw err;
  });
