document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple scroll animation for elements (optional, can be expanded)
    const elementsToAnimate = document.querySelectorAll('.feature-item, .cta-button, h2, p'); // Add more selectors as needed

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class to trigger CSS animation
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust to trigger slightly before entering viewport
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Add a simple fade-in effect via CSS for elements observed by JS
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInElement 0.8s ease-out forwards;
        }

        @keyframes fadeInElement {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(styleSheet);
});
