const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
});

        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
 });

       
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

       
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        
        const skillProgressBars = document.querySelectorAll('.skill-progress');
        
        const animateSkills = () => {
            skillProgressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        };

      
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const checkFade = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        };

        
        checkFade();
        
        
        window.addEventListener('scroll', checkFade);

       
        const experienceSection = document.getElementById('experience');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(experienceSection);
        const heroText = document.querySelector('.hero p');
        if (heroText) {
            const originalText = heroText.textContent;
            heroText.textContent = '';
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroText.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 30);
                }
            };
            if (window.innerWidth > 768) {
                setTimeout(typeWriter, 1000);
            } else {
                heroText.textContent = originalText;
            }
        }
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(22, 33, 62, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = '';
                header.style.backdropFilter = '';
            }
        });
function sendMail(){
    let parameters={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_l6kdtdb","template_7onvzh6",parameters);
}