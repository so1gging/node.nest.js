console.log("require 가 가장 위에 오지 않아도 돼");
module.exports = "나를 찾아봐";

require("./var");

console.log("require.cache");
console.log(require.cache);
console.log("require.main");
console.log(require.main === module);
console.log(require.main.filename);
