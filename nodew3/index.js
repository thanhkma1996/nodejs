var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // insert database
//   var myobj = {
//        name: "Company Inc", address: "Highway 37" ,
//        name: "Thanhkma", address: "Highway 38",
//        name: "Xuaan nhat", address: "Highway 41",
//        name: 'John', address: 'Highway 71',
//        name: "Anh tú", address: "Highway 42"
//     };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
  
    // find database 
    // dbo.collection("customers").findOne({}, function(err, result) {
    //     if (err) throw err;
    //     console.log(result.address);
    //     db.close();
    //   });
    
      // find all
    // dbo.collection("customers").find({}).toArray(function(err, result) {
    // if (err) throw err;
    // console.log(result);
    // db.close();
    // });
    // filter
    // var query = {address:'Highway 42'};
    // dbo.collection("customers").find(query).toArray(function(err,result){
    //     if(err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    //Filter With Regular Expressions loc theo ki tu 
    // var query = {address: /^H/ };
    // dbo.collection("customers").find(query).toArray(function(err,result){
    //     if(err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // Sort
    var mysort = { name: -1 }; 
    dbo.collection("customers").find().sort(mysort).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        db.close();
    });

    // delete document
    var mydelete = { address : 'Thanhkma'};
    dbo.collection("customers").deleteOne(mydelete,function(err,obj){
        if(err) throw err;
        console.log("da xoa 1 document");
        db.close();
    });
});
