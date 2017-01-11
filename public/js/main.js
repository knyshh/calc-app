(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var setAnimations = require("./module/animations.js");
var setPhone = require("./module/phone.js");
var setState = require("./module/setActiveState.js");
var scrollTo = require("./module/scrollTo.js");
var navigatoToSection = require("./module/asideNavigation.js");
var setActiveSection = require("./module/asideNavigation.js");

    setAnimations.setAnimationMain();

    $( window ).resize(function() {
        console.log('resize');
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

    $("#contactus").validate({
        rules: {
            field: {
                required: true,
                validEmail: true
            }
        }
    });






},{"./module/animations.js":2,"./module/asideNavigation.js":3,"./module/phone.js":4,"./module/scrollTo.js":5,"./module/setActiveState.js":6}],2:[function(require,module,exports){

function setAnimationMain() {

    var controller = new ScrollMagic.Controller();

    if (window.innerWidth > 1023) {
        //pin intro
        var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '.calculator-header',
            triggerHook: 0,
            duration: '90%'
        })
            .setPin('.calculator-header', {pushFollowers: false})
            .addTo(controller);

        $('.question').each(function () {
            //new scenee
            var ourScene = new ScrollMagic.Scene({
                triggerElement: this.children[0],
                triggerHook: 0.85
            }).setClassToggle(this, 'fade-in')
                .addTo(controller);
        });

        new ScrollMagic.Scene({
            triggerElement: ".wrap-calculator",
            triggerHook: 0.2,
            duration: '100%'
        }).setClassToggle('.calculator__title', 'fade-in')
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: ".wrap-calculator",
            triggerHook: 0.2,
            duration: '100%'
        }).setClassToggle('.calculator__subtitle', 'fade-in')
            .addTo(controller);

        /**--- ---- */

        let widthBody = $(window).width();
        let windowHeight = $(window).height();

        TweenLite.defaultEase = Linear.easeNone;

        var tl = new TimelineMax();
        tl.fromTo(".loader__line-left", 1, {height: 0}, {height: windowHeight})
            .fromTo(".loader__line-top", 1, {width: 0}, {width: widthBody}, 1)
            .fromTo(".loader__line-right", 1, {height: 0}, {height: windowHeight}, 2)
            .fromTo(".loader__line-bottom", 1, {width: 0}, {width: widthBody}, 3)
            .fromTo(".loader__sticker", 0.5, {opacity: 1}, {opacity: 0}, 3.8)

            .set($('.logo-sticky'), {
                className: "logo-sticky fade-in"
            })
            .set($('.coast--sticky'), {
                className: "coast--sticky fade-in"
            })
            .set($('.section-name'), {
                className: "section-name fade-in-x"
            })
            .set($('.footer'), {
                className: "footer fade-in"
            })
            .set($('.aside-navigation'), {
                className: "aside-navigation fade-in"
            })
            .staggerFromTo(".aside-navigation__href", 0.2, {scale: 0.45, autoAlpha: 0, x: 60}, {
                scale: 1,
                autoAlpha: 1,
                x: 0,
                ease: Power1.easeIn
            }, 0.21);

        new ScrollMagic.Scene({
            triggerElement: '.wrap-calculator',
            triggerHook: 0.15
        }).setClassToggle('.wrap-calculator', 'is-active').setTween(tl.timeScale(3))
            .addTo(controller);
    }
    else {
        console.log('active');

        new ScrollMagic.Scene({
            triggerElement: '.wrap-calculator',
            triggerHook: 0.15
        }).setClassToggle('.wrap-calculator', 'is-active')
            .addTo(controller);
    }

    // new ScrollMagic.Scene({
    //     triggerElement: ".wrap-calculator",
    //     triggerHook: 'onEnter',
    //     duration: '100%'
    // }).setClassToggle('.calculator__subtitle', 'fade-in')
    //     .addTo(controller);

}

module.exports = { setAnimationMain }


},{}],3:[function(require,module,exports){


function navigatoToSection() {
    let currentSection = $(this).data('section');
    console.log(currentSection);
    if (currentSection) {
        $('body,html').animate({
            scrollTop: $('[data-question="' + currentSection + '"]').offset().top - 110
        }, 1000);
    }
}

function setActiveSection() {
    let  sectionGeneral =  $('div[data-question="general"]:first').offset().top;
    let  sectionFeatures =  $('div[data-question="features"]:first').offset().top - 400;
    let  sectionDesign =  $('div[data-question="design"]:first').offset().top - 400;
    let  sectionEstimate =  $('.get-details').offset().top - 200;
    let  sectionContactForm =  $('.contactus').offset().top - 100;

    if ($(document).scrollTop() >= sectionGeneral && $(document).scrollTop() < sectionDesign) {
        $('.aside-navigation__href').removeClass('active');
        $('.section-name__item').removeClass('active');
        $('.aside-navigation__href.general').addClass('active');
        $('.section-name__item.general').addClass('active');

    }
    else if ($(document).scrollTop() >= sectionDesign && $(document).scrollTop() < sectionFeatures) {
        $('.aside-navigation__href').removeClass('active');
        $('.section-name__item').removeClass('active');
        $('.aside-navigation__href.design').addClass('active');
        $('.section-name__item.design').addClass('active');
    }
    else if($(document).scrollTop() >= sectionFeatures && $(document).scrollTop() < sectionEstimate ){
        $('.aside-navigation__href').removeClass('active');
        $('.section-name__item').removeClass('active');
        $('.aside-navigation__href.features').addClass('active');
        $('.section-name__item.features').addClass('active');

    }
    else if($(document).scrollTop() >= sectionEstimate && $(document).scrollTop() < sectionContactForm ){
        $('.aside-navigation__href').removeClass('active');
        $('.section-name__item').removeClass('active');
        $('.aside-navigation__href.estimate').addClass('active');
        $('.section-name__item.estimate').addClass('active');

    }
    else if($(document).scrollTop() >= sectionContactForm ){
        $('.aside-navigation__href').removeClass('active');
        $('.section-name__item').removeClass('active');
        $('.aside-navigation__href.contactform').addClass('active');
        $('.section-name__item.contactform').addClass('active');

    }
}

module.exports  = {navigatoToSection , setActiveSection};
},{}],4:[function(require,module,exports){

(function setPhone() {

    var telInput = $("#phone");
    telInput.intlTelInput({
        autoHideDialCode: false,
        defaultCountry: "auto",
        numberType: "MOBILE",
        autoPlaceholder: true,
        allowExtensions: false,
        nationalMode: false,
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
                    console.log('yes');
                    btnCall.removeAttr("disabled");
                    errorMsg.addClass("hide");
                    return true;
                }
                else {
                    console.log('no');
                    $(this).addClass("error");
                    btnCall.attr('disabled','disabled');
                    errorMsg.removeClass("hide");
                    return false;
                }
            }
        });




    })();
},{}],5:[function(require,module,exports){

    function scrollTo(nameDiv) {
        let goTo = nameDiv.offset().top - 60
        if (goTo) {
            $('body,html').animate({
                scrollTop:  goTo
            }, 1000);
        }
    }
    module.exports  = scrollTo;


},{}],6:[function(require,module,exports){

    function setActiveStateRadio(area) {
        $(area).on('click', function() {
            $(this).closest('.question-item').find('.question-item__label').removeClass('active');
            if ( $(this).closest('.question-item__label').hasClass("active")) {
                $(this).closest('.question-item__label').removeClass("active");
            } else {
                $(this).closest('.question-item__label').addClass("active");
            }
        });
    }

    function setActiveStateCheckbox(area) {
        $(area).on('click', function() {
            $(this).closest('.question-item__label').toggleClass("active");
        });
    }

    module.exports = {
        setActiveStateCheckbox: setActiveStateCheckbox,
        setActiveStateRadio: setActiveStateRadio
    }

},{}]},{},[1])