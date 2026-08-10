import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('LightBase Website Loaded');

  // Intersection Observer for Scroll Animations
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right').forEach(el => {
    animObserver.observe(el);
  });

  // Handle active states for docs sidebar
  const sidebarLinks = document.querySelectorAll('.docs-sidebar a');
  if (sidebarLinks.length > 0) {
    
    // Intersection Observer to highlight active section in sidebar
    const sections = document.querySelectorAll('.docs-content section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${entry.target.id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => observer.observe(sec));
    
    // Smooth scroll for sidebar links
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
  }
});
