function myFunction(id) {
    $('document').ready(function () {
        $.ajax({
            type: 'POST',
            data: { section: id.title },
            url: 'http://localhost:3000/student/lists',
            success: function (response) {
                $('#branch').html(response._id.charAt(0).toUpperCase() + response._id.slice(1));
                var ht = '';
                var count = 0;
                for (var i = 0; i < response.exams.length; i++) {
                    ++count;
                    ht += '<div class="col-md-4" style="margin-top:12px;">\
                    <div style="border:0px solid #333; background-color:#f1f1f1; border-radius:5px; padding:16px; height: 200px;">\
                    <h3>'+ response.exams[i].position + '</h3>\
                        <ol style="color: #474747">\
                            <li>Time:'+ response.exams[i].duration + '</li>\
                            <li>Section:'+ response.exams[i].section + '</li>\
                        </ol>\
                    </div>\
                    </div>';
                    if (count == 3) {
                        ht += '<br>';
                    }
                }
                //console.log(response.exams.length);
                $('#show').html(ht);
            }
        });
    })
}


function myFunc() {
    $('document').ready(function () {
        $.ajax({
            type: 'POST',
            data: { section: 'banking' },
            url: 'http://localhost:3000/student/lists',
            success: function (response) {
                $('#branch').html(response._id.charAt(0).toUpperCase() + response._id.slice(1));
                var ht = '';
                for (var i = 0; i < response.exams.length; i++) {
                    ht += '<div class="col-md-4" style="margin-top:12px;">\
                    <div style="border:0px solid #333; background-color:#f1f1f1; border-radius:5px; padding:16px; height: 200px;">\
                    <h3>'+ response.exams[i].position + '</h3>\
                        <ol style="color: #474747">\
                            <li>Time:'+ response.exams[i].duration + '</li>\
                            <li>Section:'+ response.exams[i].section + '</li>\
                        </ol>\
                    </div>\
                    </div>';
                }
                //console.log(response.exams.length);
                $('#show').html(ht);
            }
        });
    })
}
