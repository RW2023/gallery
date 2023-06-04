function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img[data-src], img[src]');

    lazyImages.forEach((img) => {
        if (isElementInViewport(img) && img.getAttribute('data-src')) {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.onload = () => {
                img.removeAttribute('data-src');
            };
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('DOMContentLoaded', lazyLoadImages);
window.addEventListener('scroll', lazyLoadImages);
