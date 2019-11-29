setTimeout(
  () => console.log("da het 1s"),1000
)
console.log("ket thuc");

var fs = require("fs");
var filename = "./a.txt";

function start(resp) {
    fs.readFile(filename, "utf8", function(err, data) {
        if (err) throw err;
        resp.write(data);
        resp.end();
    });
}
