// console.log("hello world");
// var n = 5;
// console.log(n);

var x = "5";
x = parseInt(x);
var y = "7";
y = parseInt(y);
console.log(x + y);

var mang = ["a","b","c"];
console.log(mang[1]);
// them 1 phan tu vao mang
mang.push("d");
console.log(mang.length);

// Function in nodejs
function tinhtong(a,b) {
  return a + b;
}

var xx = tinhtong(5,3);
console.log(xx);

function hello() {
  console.log("xin choa");
}
function goiham(fn) {
   fn();
}

goiham(hello);

///////
var tong = function(){
    console.log ("lap trinh nodejs");
}
tong();
