// Navbar scrolling effect
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var mobileMenu = document.querySelector('.menu');
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
        document.getElementById('navbar').style.boxShadow = 'none';
        mobileMenu.style.top = '80px';
    } else {
        document.getElementById('navbar').style.top = '-100px';
        document.getElementById('navbar').style.boxShadow = '0px 2px 10px #14a76c';
        mobileMenu.style.top = '-150px';
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
// Send Mail
function sendMail() {
    var body = document.getElementById("message").value;
    var subject = document.getElementById("cname").value;

    window.location.replace(`mailto:ebenezerdavid2233@gmail.com?body=${body}&subject=${subject} wants to contact you`);
}

// // Making the Projects Section into different Categories

// function myLogo() {
//     console.log('Get here in time');
// }