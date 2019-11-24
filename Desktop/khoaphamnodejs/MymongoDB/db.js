// 1.require mongoose
const mongoose = require('mongoose');
// 2.connect mongoose
mongoose.connect('mongodb://localhost/myDatabase');
// 3.tao schema
const userSchema = new mongoose.Schema({
    name:String,
    age : Number
});
// 4.tao model
const user = mongoose.model('user',userSchema);
// 5. CRUD

// user.create(
//     [
//         { name:"thanh", age:20 },
//         { name: "hoa", age:22}
//     ]
//  );

// 6. goi db show
// user.find().exec((err,users)=>{
//     console.log(users);
// })

// 7. chinh sua
// user.update({name:"thanh"},{name:"thanhkma"}).exec((err,users)=>{
//     console.log(users);
// });

// 8 remove 
user.remove({name:"thanhkma"}).exec((err,users)=>{
    console.log(users);
});