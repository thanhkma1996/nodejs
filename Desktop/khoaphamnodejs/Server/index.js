// On tap bat dong bo
let mang = [2,3,4,5,6];
mang.forEach(function(e){
   console.log(e);
});

// var mang2 = mang.map(function(e){
//     return e*2;
// })
// viet duoi dang async function in ES6, arrow function
var mang2 = mang.map(e => e* 2);
// console.log(mang2);

//
let add = (a,b) => a + b;
// console.log(add(4,5));

let getfunction = (number) => {
  // if(number >= 0) {
  //   return () => console.log("so nguyen duong");
  // }else {
  //   return () => console.log("so am roi nhes");
  // }
  // co the viet lai ntn de toi gian code
  if(number >= 0) return()=>console.log("so nguyen duong");
  return()=>console.log("so am roi nhe");
}

getfunction(-1)(); // cach viet ntn co nghia goi ham getfunction ra de hien thi va them dau ()  de console.log ket qua hien thi
