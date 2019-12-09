// // const mysql = require('mysql2');

// // const pool = mysql.createPool({
// //     host: 'localhost',
// //     user: 'root',
// //     password: '',
// //     database: 'employee_details'
// // })
// // module.exports = pool.promise();
 

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = callback =>{
//     MongoClient.connect('mongodb+srv://root:root@cluster0-qr0ma.mongodb.net/Questions?retryWrites=true&w=majority')
// .then(client =>{
// console.log('Connected');
// _db = client.db()
// callback(client);
// })
// .catch(err =>{
//     console.log('Not Connected');
//     console.log(err);
// });
// };

// const getDb = () =>{
//     if(_db){
//         return _db;
//     }else{
//         throw 'NO Database Found';
//     }
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;