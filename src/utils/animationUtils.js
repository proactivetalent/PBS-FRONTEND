import { gsap } from "gsap";

/**
 * Creates a staggered text animation effect for headings
 * @param {React.RefObject} ref - The ref to the heading element
 * @param {Object} options - Animation options
 * @param {number} options.duration - Animation duration in seconds (default: 0.6)
 * @param {number} options.stagger - Delay between each character in seconds (default: 0.05)
 * @param {number} options.delay - Initial delay before animation starts (default: 0.3)
 * @param {string} options.ease - GSAP easing function (default: "power2.out")
 * @param {number} options.threshold - Intersection observer threshold (default: 0.3)
 * @param {string} options.rootMargin - Intersection observer root margin (default: '0px 0px -50px 0px')
 * @param {boolean} options.useIntersectionObserver - Whether to use intersection observer (default: true)
 */
export const createStaggeredTextAnimation = (ref, options = {}) => {
  const {
    duration = 0.6,
    stagger = 0.05,
    delay = 0.3,
    ease = "power2.out",
    threshold = 0.3,
    rootMargin = '0px 0px -50px 0px',
    useIntersectionObserver = true
  } = options;

  if (!ref.current) return;

  const animateText = (element) => {
    // Split the text into individual characters
    const text = element.textContent;
    element.innerHTML = '';
    
    // Create spans for each character
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      element.appendChild(span);
    });

    // Animate each character with stagger
    const chars = element.querySelectorAll('span');
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease,
      delay
    });
  };

  if (useIntersectionObserver) {
    // Create intersection observer to trigger animation when element comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateText(entry.target);
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold,
      rootMargin
    });

    // Start observing the element
    observer.observe(ref.current);

    // Return cleanup function
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  } else {
    // Immediate animation without intersection observer
    animateText(ref.current);
  }
};
