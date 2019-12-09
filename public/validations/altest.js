function myFunction(id){
    console.log(id);
    $('document').ready(function(){
    // $('#bank')
    // .mouseover(function() {
        // $( this ).find( "span" ).text( "mouse over x " + i );
        $.ajax({
            type: 'POST',
            data: {section: id},
            url: 'http://localhost:3000/student/lists',
            success: function(response){
                console.log('successful');
                // $('#bak').text(response.position);
                // $('#bak1').text(response.exam.exam1);
                // $('#bak2').text(response.exam.exam2);
                // $('#bak3').text(response.exam.exam2);
            }
        });
        // $('#bak').text('SBI PO');
      })
// })
}