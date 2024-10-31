function smoothScrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    const headerOffset = document.querySelector('header').offsetHeight; 
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerOffset
                            - (window.innerHeight / 2) + (targetSection.offsetHeight / 2)-50;

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
    });
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        if (!link.classList.contains('try-it-link')) {
            event.preventDefault(); 
        }
    });
});
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the navbar visibility
});
