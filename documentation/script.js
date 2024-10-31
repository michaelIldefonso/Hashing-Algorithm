function smoothScrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    const headerOffset = document.querySelector('header').offsetHeight; 
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerOffset
                            - (window.innerHeight / 2) + (targetSection.offsetHeight / 2) - 50;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' 
    });
}

document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.classList.contains('try-it-link')) {
            return; 
        }

        event.preventDefault(); 
        const sectionId = this.getAttribute('href').substring(1); 
        smoothScrollToSection(sectionId);
        
        navbar.classList.remove('active'); 
        burger.classList.remove('hidden'); 
    });
});

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close');

burger.addEventListener('click', () => {
    navbar.classList.toggle('active'); 
    burger.classList.add('hidden'); 
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active'); 
    burger.classList.remove('hidden'); 
});

window.addEventListener('scroll', () => {
    if (navbar.classList.contains('active')) {
    }
});
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});
