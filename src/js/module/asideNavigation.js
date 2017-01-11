

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