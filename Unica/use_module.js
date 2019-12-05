var my_module = require("./my_module");

var my_message = my_module.message("hello, this is mesasge");
console.log(my_message);

var result = my_module.add(4,9);
console.log(result);

var res = my_module.sub(9,3);
console.log(res);