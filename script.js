document.addEventListener('DOMContentLoaded', function() {
    // Typing effect in hero
    const phrases = ["Mantu Kumar Morya", "a Full Stack Developer", "a MERN Expert", "a Next.js Developer"];
    let idx = 0, ch = 0, isDeleting = false;
    const el = document.querySelector(".typing");
    
    function type() {
      const currentPhrase = phrases[idx];
      
      if (isDeleting) {
        el.textContent = currentPhrase.substring(0, ch - 1);
        ch--;
      } else {
        el.textContent = currentPhrase.substring(0, ch + 1);
        ch++;
      }
      
      let typeSpeed = 100;
      
      if (isDeleting) {
        typeSpeed /= 2;
      }
      
      if (!isDeleting && ch === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && ch === 0) {
        isDeleting = false;
        idx = (idx + 1) % phrases.length;
        typeSpeed = 500;
      }
      
      setTimeout(type, typeSpeed);
    }
    
    // Start typing effect after 1 second
    setTimeout(type, 1000);
    
    // Smooth scroll & scroll-spy
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section, header');
    
    links.forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu if open
        if (document.querySelector('.nav-links').classList.contains('open')) {
          document.querySelector('.nav-links').classList.remove('open');
        }
      });
    });
    
    window.addEventListener('scroll', () => {
      let cur = '';
      const scrollPos = window.scrollY + 100;
      
      sections.forEach(sec => {
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        
        if (scrollPos >= offset && scrollPos < offset + height) {
          cur = sec.id;
        }
      });
      
      links.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${cur}`) {
          a.classList.add('active');
        }
      });
    });
    
    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('open');
    });
    
    // Form submission
    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
      });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });