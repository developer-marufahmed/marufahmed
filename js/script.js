var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Digital Marketer", "Web Designer", "Graphic Designer", "Freelancer", "YouTuber", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})



/**************Toggle icon navber****************/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


/*----ScrollSection active link--*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    //Sticky navber

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /**************Remove Toggle icon navber****************/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



/******scroll reveal******/
ScrollReveal({
    reset: true,
    distance: '10px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-box, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});









