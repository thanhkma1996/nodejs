// khong co promise
// function1(function(err,data1){
//     function2(function(err,data2){
//         function3(function(err,data3){

//         });
//     });
// });

// suwr dung promise trong nodejs npm install -g node-modules
var q = require("q");

function show(err,data){
    var defer = q.defer();
    if(err){
        defer.reject(err);
    }
        defer.resolve(data);
        return defer.promise;
}
    show(false,"data 1")
    .then(function(data){
        console.log(data);
        var data2 = "data2";
        return data2;
    })
    .then(function(data2){
        console.log(data2);
    })
    .catch(function(err){
        console.log(err);
    })