

    ScrollReveal().reveal('.image-card', {
        delay: 10,
        distance: '100px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'top',
        interval: 200, // interval in ms
        reset: true,
    });

    ScrollReveal().reveal('.image-title', {
        delay: 10,
        distance: '100px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'top',
        interval: 200,
        reset: true,
    });

anime({
    targets: '#flower',
    translateX: 250,
    backgroundColor: '#000', // change the color to black
    duration: 2000,
    easing: 'easeInOutSine'
});
