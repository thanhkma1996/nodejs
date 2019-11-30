setTimeout(
  () => console.log("da het 1s"),1000
)
console.log("ket thuc");

let fs = require("fs");
let data = fs.readFileSync('a.txt','utf8');
console.log(data);
