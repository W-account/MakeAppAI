document.addEventListener('DOMContentLoaded', () => {
    const partnerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.partners-grid img').forEach(img => {
        partnerObserver.observe(img);
    });

    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('[data-animate]').forEach(el => {
        animateOnScroll.observe(el);
    });

    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        timelineObserver.observe(item);
    });

    
    const glitchElements = document.querySelectorAll('[data-glitch]');
    glitchElements.forEach(el => {
        setInterval(() => {
            el.classList.toggle('glitch-effect');
        }, 3000 + Math.random() * 2000);
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    const burger = document.createElement('div');
    burger.className = 'mobile-menu-toggle';
    burger.innerHTML = '☰';
    const navbar = document.querySelector('.navbar');
    navbar.appendChild(burger);

    const navLinks = document.querySelector('.nav-links');
    
    
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        }
    });

    
    document.querySelector('.footer-bottom p').textContent = 
        `© ${new Date().getFullYear()} MakeAppAI. All rights reserved.`;
});


function copyContract() {
    const address = document.querySelector('.contract-address').textContent.replace('CA: ', '????'); //adress
    navigator.clipboard.writeText(address)
        .then(() => showNotification('Contract address copied!'))
        .catch(err => {
            console.error('Copy failed:', err);
            showNotification('Error copying');
        });
}


function showNotification(text) {
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = text;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 300);
    }, 1700);
}


const pieChartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.pie-chart').forEach(chart => {
    pieChartObserver.observe(chart);
});


const observerOptions = {
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));



document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            y: -3,
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});
