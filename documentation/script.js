function smoothScrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
