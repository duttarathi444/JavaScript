const Students = require('../models/studentData');
const Sections = require('../models/testSections');

exports.studentLogin = (req,res,next)=>{
    var testid = req.body.codeID;
    res.render('studentViews/studentSignin',{
        pageTitle: "Student Login",
        editmode: false,
        prods: testid
    });
};

exports.studentReg = (req,res,next)=>{
    const code = req.body.codeID;
    res.render('studentViews/studentSignup',{
        pageTitle: "Student Registation",
        prods: code,
        editing: false
    });
};

exports.studentRegData = (req,res,next)=>{
    const getId = new Promise((resolve, reject) => {
        setTimeout(() => {
            Students.count()
                .then(resultData => {
                    resolve(resultData);
                })
                .catch(err => {
                    console.log(err);
                });
        }, 10);
    });
    getId.then(countId => {
        var id;
        if (countId == 0) {
            id = countId + 1;
        } else {
            id = countId + 1;
        }
        var passId = req.body.codeId;
            const regData = new Students({
                _id: id,
                first_name: req.body.fname,
                last_name: req.body.lname,
                gender: req.body.gender,
                dob:req.body.dob,
                qualification1: req.body.qalification,
                address: {
                    currentState1: req.body.state,
                    currentAdd1: req.body.address,
                    currentDist1: req.body.district,
                    currentBloc1: req.body.block
                },
                alternate_address: {
                    alterAdd2: req.body.alterAddress,
                    alterState2: req.body.alterState,
                    alterDist2: req.body.alterDist,
                    alterBloc2: req.body.alterBloc
                },
                email: req.body.email,
                alternate_email: req.body.alterEmai,
                password: req.body.password,
                phone_no: req.body.phone_no,
                test_id: passId
            });
            regData.save()
            .then(result => {
                console.log("Registation Succesful");
                res.render('studentViews/studentSignin',{
                    pageTitle: "Student Login",
                    editmode: true,
                    prods: passId
                });
            })
            .catch(err => {
                console.log(err);
            });
    }).catch(err => {
        console.log(err);
    });
};

exports.studentLoginData = (req,res,next)=>{
    var testid = req.body.codeId;
    Students.find({
            email: req.body.email,
            password: req.body.password,
            test_id: testid
        })
    .then(result=>{
        if(result.length != 0){
        console.log("Student Login Successful");
        res.render('studentViews/home',{
            pageTitle: "Home",
            prods: testid,
            edit: true
        });
        }else{
            console.log("Login Unsuccessful");
        }
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.showStudents = (req,res,next)=>{
    if(req.session.isLoggedIn == true){
    Students.find({test_id: req.body.codeID})
    .then(result =>{
        res.render('studentViews/studentDetails',{
            pageTitle: "Show Students",
            prods: result
            });
        })
    .catch(err=>{
        console.log(err);
        });
    }
};

exports.studentDataEdit = (req,res,next)=>{
    Students.find({_id: req.body.stuID})
    .then(result =>{
        res.render('studentViews/studentSignup',{
            pageTitle: "Show Students",
            prods: result,
            editing: true
        });
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.studentUpdate = (req,res,next)=>{
    Students.findById({_id: req.body.stuId})
    .then(student=>{
        student.first_name = req.body.fname;
        student.last_name = req.body.lname;
        student.gender = req.body.gender;
        student.dob = req.body.dob;
        student.qualification1 = req.body.qalification;
        student.address.currentState1 = req.body.state;
        student.address.currentAdd1 = req.body.address;
        student.address.currentDist1 = req.body.district;
        student.address.currentBloc1 = req.body.block;
        student.alternate_address.alterAdd2 = req.body.alterAddress;
        student.alternate_address.alterState2 = req.body.alterState;
        student.alternate_address.alterDist2 = req.body.alterDist;
        student.alternate_address.alterBloc2 = req.body.alterBloc;
        student.email = req.body.email;
        student.alternate_email = req.body.alterEmai;
        student.password = req.body.password;
        student.phone_no = req.body.phone_no;
        return student.save();
    }).then(result=>{
        res.render('studentViews/home',{
            pageTitle: "Home",
            prods: req.body.codeId,
            edit: true
        });
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.showDetails = (req,res,next)=>{
    Students.findById({_id: req.body.stdID})
    .then(result=>{
        res.render('studentViews/allDetails',{
            pageTitle: "Details",
            prods: result
        })
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.isEmailExist = (req,res)=>{
    var em = req.body.email1;
    // Students.findOne({email: req.body.email1})
    Students.find({email: {$regex: em, $options: 'i'}})
    .then(result=>{
        if(result != null){
            res.send(result);
        }
        // }else{
        //     res.send('not_taken');
        // }
        })
};

exports.tests = (req,res,next)=>{
    res.render('studentViews/AllTest',{
        pageTitle: "Test"
    })
}

exports.list = (req,res,next) =>{
    Sections.findOne({_id: req.body.section})
    .then(result=>{
        res.send(result);
        })
}