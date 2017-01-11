
    $(".question-item__radio").click(function(e){
        e.preventDefault();
        $.ajax({type: "POST",
            url: "/",
            dataType: 'json',
            data: { id: $(this).val() /*, access_token: $("#access_token").val()*/ },
            success:function(result){
               // $("#sharelink").html(result);
            },
            error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }});
    });
