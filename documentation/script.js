function smoothScrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    const headerOffset = document.querySelector('header').offsetHeight; // Get the height of the header
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerOffset; // Adjust the target position by subtracting the header height

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Smooth scroll behavior
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
