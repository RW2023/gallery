

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

// Define the anime.js animation
function dropBounceImage(img) {
    anime.timeline({
        targets: img,
        easing: 'easeOutBounce'
    })
        .add({
            translateY: [-500, 0], // Drop from above
            duration: 1000
        })
        .add({
            scale: [1, 1.1, 1], // Slight bounce effect
            duration: 500,
        });
}
// Image Bounce Effect
// Set up the intersection observer
// let observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             dropBounceImage(entry.target); // If the image is in the viewport, drop and bounce the image
//             observer.unobserve(entry.target); // Stop observing the image after the animation has been triggered
//         }
//     });
// }, { threshold: 0.1 }); // Threshold: 10% - start the animation when 10% of the image is visible

// // Observe each image
// document.querySelectorAll('img[data-src]').forEach(img => {
//     observer.observe(img);
// });

