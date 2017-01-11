
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

