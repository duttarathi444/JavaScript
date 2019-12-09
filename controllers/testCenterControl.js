const Test_Center = require('../models/testCenterData');

exports.signin_employee = (req,res,next)=>{
    res.render('testCenterViews/centersignin',{
        pageTitle: 'Login',
        path: '/signin',
        editmode: false
    });
}

exports.signup_employee = (req,res,next)=>{
    res.render('testCenterViews/centersignup',{
        pageTitle: 'Sign Up',
        path: '/signup',
        editing: false
    });
}

exports.checkData = (req,res,next) =>{
    const testId = req.body.testId;
    Test_Center.find({
        email: req.body.email,
        password: req.body.password,
        ID: testId
    })
    .then(result =>{
        if(result.length > 0){
        req.session.isLoggedIn = true;
        console.log('Login Succesful');
        res.render('studentViews/home',{
            pageTitle: 'Home',
            edit: false,
            prods: result[0].ID
            })
        }else{
            res.render('testCenterViews/centersignin',{
                pageTitle: 'Login',
                editmode: 3,
            })
            console.log("Login Unsuccessful");
        }
    })
    .catch(err =>{
        console.log('Login Unsuccesful');
    });
}


exports.addData = (req,res,next) =>{

    const getId = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            Test_Center.countDocuments()
                    .then(resultData =>{
                        resolve(resultData);
                    })
                    .catch(err =>{
                        console.log(err);
                    });
        },10);
    });

    getId.then(Ids =>{
            var id;
            if(Ids == 0)
            id=1;
            else
            id = Ids+1;
            const testID = Math.random().toString(36).substr(2,9);
            const dataStore = new Test_Center({
                _id: id,
                centerName: req.body.name,
                address: req.body.address,
                email: req.body.email,
                password: req.body.password,
                phoneNo: req.body.phone_no,
                ID: testID});
            dataStore.save()
            .then(result =>{
                console.log(result);
                if(Object.entries(result).length > 0){
                console.log('Insert succesful');
                res.render('testCenterViews/centersignin',{
                    pageTitle: 'Login',
                    editmode: true,
                    prods: testID
                    })
                }else{
                    console.log('Insert unsuccesful');
                }
            })
            .catch(err =>{
                console.log(err);
            });

    })
    .catch(err =>{
        console.log(err);
    })

}


exports.logoutSession = (req,res,next)=>{
    req.session.destroy(()=>{
        console.log("Logout Succesful");
        res.render('testCenterViews/centersignin',{
            pageTitle: "Login",
            editmode: 2
        });
    })
};