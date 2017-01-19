
    function setActiveStateRadio(area) {
        $(area).on('click', function() {
            $(this).closest('.question-item').find('.question-item__label').removeClass('active');
            if ( $(this).closest('.question-item__label').hasClass("active")) {
                $(this).closest('.question-item__label').removeClass("active");
                $(this).closest('.question-item').removeClass("valid");
            } else {
                $(this).closest('.question-item__label').addClass("active");
                $(this).closest('.question-item').addClass("valid");
            }
        });
    }

    function setActiveStateCheckbox(area) {
        $(area).on('click', function() {
            $(this).closest('.question-item__label').toggleClass("active");
            $(this).closest('.question-item').toggleClass("validcheck");
        });
    }

    module.exports = {
        setActiveStateCheckbox: setActiveStateCheckbox,
        setActiveStateRadio: setActiveStateRadio
    }
