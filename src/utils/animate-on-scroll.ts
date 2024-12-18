export function setupAnimationObserver() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        element.classList.add('animate-init');
        void element.offsetHeight;
        requestAnimationFrame(() => {
          element.classList.add('animate');
        });
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  animatedElements.forEach(element => {
    element.classList.add('animate-init');
    observer.observe(element);
  });
} 