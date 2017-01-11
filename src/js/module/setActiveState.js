
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
