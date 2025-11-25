// Countdown Timer
function initCountdown() {
    const countdownDate = new Date('December 11, 2025 08:00:00').getTime();
    const gallerySection = document.getElementById('gallery');
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        if (distance < 0) {
            // Cuenta regresiva terminada - mostrar 00:00:00:00
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            
            // Activar galería de fotos automáticamente
            if (gallerySection) {
                gallerySection.style.display = 'block'; // Quitar el display none
                gallerySection.classList.add('active');
                // Scroll suave a la galería (opcional)
                setTimeout(() => {
                    gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 1000);
            }
            
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Scroll Reveal Animation
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
}

// Confetti Animation
function createConfetti() {
    const colors = ['#d4af37', '#f4e4c1', '#b8941f', '#ffffff'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            
            // Random shapes
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }
            
            document.body.appendChild(confetti);
            
            // Remove after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 100);
    }
}

// Form Submission with Formspree
function initForm() {
    const form = document.getElementById('rsvp-form');
    const successMessage = document.getElementById('success-message');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        
        try {
            // Send to Formspree
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                successMessage.classList.add('show');
                
                // Create confetti effect
                createConfetti();
                
                // Reset form
                form.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
                
                // Scroll to top smoothly
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                alert('Hubo un error al enviar el formulario. Por favor intenta de nuevo.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario. Por favor intenta de nuevo.');
        }
    });
}

// Smooth Scroll for Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax Effect for Hero
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / 600);
        }
    });
}

// Add floating animation to detail icons
function initFloatingIcons() {
    const icons = document.querySelectorAll('.detail-icon');
    icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initScrollReveal();
    initForm();
    initSmoothScroll();
    initParallax();
    initFloatingIcons();
    
    // Create initial confetti on page load
    setTimeout(() => {
        createConfetti();
    }, 1000);
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Crear destellos/sparkles
function createSparkles() {
    const sparkleCount = 20; // Número de destellos en pantalla
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = `sparkle sparkle-${(i % 5) + 1}`;
        
        // Posición aleatoria
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        
        // Tamaño aleatorio
        const size = Math.random() * 3 + 2; // Entre 2px y 5px
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        document.body.appendChild(sparkle);
        
        // Recrear el destello después de que termine su animación
        setTimeout(() => {
            sparkle.remove();
            createSingleSparkle();
        }, 2500);
    }
}

// Crear un destello individual
function createSingleSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = `sparkle sparkle-${Math.floor(Math.random() * 5) + 1}`;
    
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    
    const size = Math.random() * 3 + 2;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
        createSingleSparkle();
    }, 2500);
}

// Iniciar destellos cuando carga la página
document.addEventListener('DOMContentLoaded', () => {
    createSparkles();
});
