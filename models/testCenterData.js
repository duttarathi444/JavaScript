const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const testregSchema = new Schema({
_id: {
    type: Number,
    required: true,
    unique: true
},
centerName: {
    type: String,
    required: true
},
address: {
    type: String,
    required: true 
},
email: {
    type: String,
    required: true,
    unique: true
},
password: {
    type: String,
    required: true
},
phoneNo: {
    type: Number,
    required: true
},
ID: {
    type: String,
    required: true,
    unique: true
}
})

module.exports = mongoose.model('Test_Center',testregSchema);


// const getDb = require('../util/database').getDb;
// module.exports = class Logindata{
//     constructor(_id,Name,address,email,password,phoneNo,ID){
//         this._id = _id;
//         this.Name = Name;
//         this.address = address;
//         this.email = email;
//         this.password = password;
//         this.phoneNo = phoneNo;
//         this.ID = ID;
//     }
//     insert(){
//         console.log(this._id);
//         const db = getDb();
//         return db.collection('Test_Center')
//         .insertOne(this)
//         .then(result =>{
//             return result;
//         })
//         .catch(err =>{
//             console.log(err);
//         });
//         // return retdb.execute('INSERT INTO `employee` (`Fname`, `Lname`, `Sex`, `Birth_Data`, `Address`, `Email`, `Password`, `Mobile_No`) \
//         // VALUES (?,?,?,?,?,?,?,?)',[this.fName,this.lName,this.gen,this.dob,this.address,this.email,this.password,this.phoneNo]);
//     }
//     checkLogin(email,pass,testId){
//         const db = getDb();
//         return db
//         .collection('Test_Center')
//         .find({email: email,password: pass,ID: testId})
//         .next()
//         .then(result =>{
//             return result;
//         })
//         .catch(err =>{
//             Console.log(err);
//         }); 
//         // return db
//         // .collection('question')
//         // .find({_id: {$gt:40, $lt:65} })
//         // .toArray()
//         // .then(result=>{
//         //     console.log(result);
//         //     return result;
//         // })
//         // .catch(err =>{
//         //     console.log(err);
//         // });
//     }

//     countdetail(){
//         const db = getDb();
//         return db
//         .collection('Test_Center')
//         .find({}).count()
//         .then(result=>{
//             console.log(result);
//             return result;
//         })
//         .catch(err =>{
//             console.log(err);
//         });
//     }


// }