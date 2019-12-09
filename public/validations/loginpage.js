function testpass(pas){
    var passpattern  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var bool = passpattern.test(pas);
    return bool;
}
function testemail(email){
    var emailpattern = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    //var bool = emailpattern.test(email);
    return true;
}
function testpon(phon){
    var phonepattern = /^(([7-9]+)([0-9]))*$/;
    var bool = phonepattern.test(phon);
    return bool;
}


function myFunction(){
    var emai = document.getElementsByName("email");
    console.log(emai[0].type);
    var emailval = document.getElementById("emailid").value;
    var pass = document.getElementById("pass").value;
    var conpass = document.getElementById("conpass").value;
    var phoneno = document.getElementById("phone").value;
        if(emai[0].type === "text" && testemail(emailval) === true){
            if(testpass(pass) === true){
                if(pass === conpass){
                    if(phoneno.length === 10 && testpon(phoneno) == true){
                        return true;
                    }else{
                        document.getElementById("pon").innerHTML="Enter Correct Phone No";
                        return false;
                    }
                }else{
                    document.getElementById("conpw").innerHTML="ReEnter Correct Password";
                    return false;
                }
            }else{
                document.getElementById("pw").innerHTML="Enter Correct Password";
                return false;
            }
        }else{
            document.getElementById("em").innerHTML="Enter Correct Email";
            return false;
        }

}

function check(){
    var pass = document.getElementById("pass");
    if(pass.type === 'password'){
        pass.type = 'text';
    }else{
        pass.type = 'password';
    }
}

