const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
//const mongoConnect = require('./util/database').mongoConnect;

const app = express();
app.set('view engine','ejs');
app.set('views','views');
const MONGODB_URL = "mongodb+srv://root:root@cluster0-qr0ma.mongodb.net/Questions";
const employeeData = require('./routes/employee');
const studentDetails = require('./routes/students');
const errorController = require('./controllers/error');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

const store = new MongoDBStore({
    uri: MONGODB_URL,
    collection: "sessions"
});

app.use(session({secret: "my secret",resave: false,saveUninitialized: false,store: store}));

app.use(employeeData);
app.use('/student',studentDetails);
app.use(errorController.get404);
//mongoConnect(() =>{
//   app.listen(3000);
//});
mongoose.connect(MONGODB_URL)
.then(
    result=>{
        app.listen(3000);
})
.catch(err=>{
    console.log(err);
});
