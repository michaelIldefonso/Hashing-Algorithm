function smoothScrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    const headerOffset = document.querySelector('header').offsetHeight; 
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerOffset;
                            

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
    const header = document.querySelector('header');
    if (window.scrollY > header.offsetHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
