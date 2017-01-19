
var setAnimations = require("./module/animations.js");
var setPhone = require("./module/phone.js");
var setState = require("./module/setActiveState.js");
var scrollTo = require("./module/scrollTo.js");
var navigatoToSection = require("./module/asideNavigation.js");
var setActiveSection = require("./module/asideNavigation.js");

    setAnimations.setAnimationMain();

    $( window ).resize(function() {
        setAnimations.setAnimationMain();
    });

    //handle active state when press on radio  or checkbox
    setState.setActiveStateCheckbox($(".question-item__checkbox"));
    setState.setActiveStateRadio($(".question-item__radio"));

    //handle scrollto
    $(".btn--getdetails").on('click',function(){
        scrollTo($('.contactus__title'));
    });

    $(".btn--gocalculate").on('click',function(){
        scrollTo($('.calculator__containertxt'));
    });


    //handle aside navigation

    $('.aside-navigation__item').on('click', function() {
        navigatoToSection.navigatoToSection.apply($(this));
    });

    $(window).scroll(function() {
        setActiveSection.setActiveSection();
    });


    //set validation
    jQuery.validator.addMethod("validEmail", function(value, element)
    {
        if(value == '')
            return true;
        var temp1;
        temp1 = true;
        var ind = value.indexOf('@');
        var str2=value.substr(ind+1);
        var str3=str2.substr(0,str2.indexOf('.'));
        if(str3.lastIndexOf('-')==(str3.length-1)||(str3.indexOf('-')!=str3.lastIndexOf('-')))
            return false;
        var str1=value.substr(0,ind);
        if((str1.lastIndexOf('_')==(str1.length-1))||(str1.lastIndexOf('.')==(str1.length-1))||(str1.lastIndexOf('-')==(str1.length-1)))
            return false;
        str = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(\.[a-zA-Z]{2,6})$/ ;

        temp1 = str.test(value);
        return temp1;
    }, "Please enter valid email.");

    $("#calcAppForm").validate({
        focusInvalid: false,
        invalidHandler: function(form, validator) {
            if (!validator.numberOfInvalids())
                return;

            $('html, body').animate({
                scrollTop: $(validator.errorList[0].element).offset().top - 200
            }, 2000);

            $(validator.errorList[0].element).focus();
            $(validator.errorList[0].element).closest('.question').addClass('first-invalid');

        },
        rules: {
            field: {
                required: true,
                validEmail: true
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                //url: $(form).attr('path'),
                data: $("#calcAppForm").serialize(),
                dataType: 'json',
                cache: false,
                success: function (msg) {
                    if (msg.status) {
                        if (msg.status === 'fail') {
                            //$('#ok-popup .popup-content').text('').append('Sorry, something has going wrong');
                            console.log('Oops, something went wrong.Please, refresh your page and try again.');
                        }
                        else if (msg.status === 'ok') {
                            console.log('Success');
                            //$('.btn-send-planner').attr('disabled','disabled');
                        }
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            });

        }
    });





