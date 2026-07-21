const fs = require("fs");
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data); // readFile 의 결과물은 Buffer 라는 형식으로 제공된다.-> 메모리의 데이터라고 이해하자
  console.log(data.toString());
});
