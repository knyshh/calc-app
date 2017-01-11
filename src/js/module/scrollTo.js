
    function scrollTo(nameDiv) {
        let goTo = nameDiv.offset().top - 60
        if (goTo) {
            $('body,html').animate({
                scrollTop:  goTo
            }, 1000);
        }
    }
    module.exports  = scrollTo;

