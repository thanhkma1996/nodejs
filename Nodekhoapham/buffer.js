// truyền tải bufer
// var buffer = new Buffer("hello","utf-8");
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toJSON());

// xu ly file
var fs = require("fs");
var noidung = fs.readFileSync(__dirname + "/danhsach.txt");
console.log(noidung);
console.log(noidung.toString());