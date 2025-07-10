// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Project Description
document.querySelectorAll('.toggle-desc').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.parentElement;
        const shortDesc = card.querySelector('.short-desc');
        const fullDesc = card.querySelector('.full-desc');
        const isHidden = fullDesc.classList.contains('hidden');

        if (isHidden) {
            fullDesc.classList.remove('hidden');
            shortDesc.classList.add('hidden');
            this.textContent = 'Show Less';
        } else {
            fullDesc.classList.add('hidden');
            shortDesc.classList.remove('hidden');
            this.textContent = 'Show More';
        }
    });
});

// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
        setTimeout(() => {
            backToTopButton.style.display = 'none';
        }, 300);
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});