$(document).ready(function(){
    $("#alterEmail").click(function(event){
        event.preventDefault();
        $("#emailAlter").show({'border':'2px'});
        $("#alterEmail").hide();
    });
    $("#emailAlter").hide();
});


$(document).ready(function(){
    $("#alterAddre").click(function(event){
        event.preventDefault();
        $("#addreAlter").show({'border':'2px'});
        $("#alterAddre").hide();
    });
    $("#addreAlter").hide();
});

// $('document').ready(function(){
//     $("#emailid").change(function(){
//         var email = $('#emailid').val();
//         var data = {email: email};
//         if(email == ""){
//             $('#em').text('');
//         }else{
//         $.ajax({
//             type: 'POST',
//             data: {email1:email},
//             url: 'http://localhost:3000/student/isexist',
//             success: function(response){
//                 if(response == 'taken'){
//                     $('#emailid').parent().removeClass();
//                     $('#emailid').parent().addClass("form_error");
//                     $('#em').text('Sorry... Email already taken');
//                 }else if(response == 'not_taken'){
//       	            $('#emailid').parent().removeClass();
//       	            $('#emailid').parent().addClass("form_success");
//                     $('#em').text('Email available');
//                     $(".btn1").attr("disabled", false);  
//                 }
//             }
//         });
//     }
//     });
// });

$('document').ready(function(){
        $("#emailid").keypress(function(){
            console.log('clicked');
            var email = $('#emailid').val();
            if(email.length>=3){
                console.log("click");
            if(email == ""){
                $('#em').text('');
            }else{
            $.ajax({
                type: 'POST',
                data: {email1:email},
                url: 'http://localhost:3000/student/isexist',
                success: function(response){
                    for(exa in response){
                        $('#ids').append('<li class="list-group-item" onclick="func(this.id)" style="cursor: pointer;" id="'+response[exa].email+'">'+response[exa].email+'</li>');
                        console.log(response[exa].email);
                    }
                    if(response == 'taken'){
                        $('#emailid').parent().removeClass();
                        $('#emailid').parent().addClass("form_error");
                        // $('#em').text('Sorry... Email already taken');
                    }else if(response == 'not_taken'){
          	            $('#emailid').parent().removeClass();
          	            $('#emailid').parent().addClass("form_success");
                        $('#em').text('Email available');
                        // $(".btn1").attr("disabled", false);  
                    }
                }
            });
        }
    }else{
        $('#ids').empty();
    }
        });
    });

   function func(id1){
        console.log(id1);
        
        // var val= document.getElementById('ga').value;
        // console.log(val);
        // var id = getElementById('ga').value;
        // console.log(id);
   }