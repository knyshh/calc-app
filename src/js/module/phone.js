
(function setPhone() {

    var telInput = $("#phone");
    telInput.intlTelInput({
        autoHideDialCode: false,
        defaultCountry: "auto",
        numberType: "MOBILE",
        autoPlaceholder: true,
        allowExtensions: false,
        nationalMode: false,
        initialCountry: 'auto',
        utilsScript : './public/js/utils.js',
        geoIpLookup: function(callback) {
            $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        }
    });

    telInput.on('click, blur, keyup',function(){

            var btnCall = $(this).closest('.contactus').find('button.btn--submit'),
                errorMsg = $(this).closest('.contactus__label').find('.error-msg');

            if ($.trim($(this).val())) {
                if ($(this).intlTelInput("isValidNumber")) {
                    btnCall.removeAttr("disabled");
                    errorMsg.addClass("hide");
                    return true;
                }
                else {
                    $(this).addClass("error");
                    btnCall.attr('disabled','disabled');
                    errorMsg.removeClass("hide");
                    return false;
                }
            }
        });

    })();