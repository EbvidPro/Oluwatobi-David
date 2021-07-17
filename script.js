// Navbar scrolling effect
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
    } else {
        document.getElementById('navbar').style.top = '-100px';
    }
    prevScrollpos = currentScrollPos;
}
// Mobile Navbar 
function menu() {
    let hamburger = document.querySelector('.hamburg');
    let closeBtn = hamburger.getAttribute('src');
    let mobileMenu = document.querySelector('.menu');

    if (closeBtn == "icon-hamburger.svg") {
        hamburger.setAttribute('src', 'icon-close.svg');
        mobileMenu.style.display = 'block';
    } else {
        hamburger.setAttribute('src', 'icon-hamburger.svg');
        mobileMenu.style.display = 'none';
    }
}