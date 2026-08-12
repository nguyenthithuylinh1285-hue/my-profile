/* =============================================
   PORTFOLIO INTERACTIVE SCRIPT
   Nguyễn Thị Thùy Linh · Business Analyst
   Presentation Slide System
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── 1. Active Dot Tracking on Scroll ─── */
    const slides = document.querySelectorAll('.slide-page');
    const cards = document.querySelectorAll('.editorial-card');
    const dots = document.querySelectorAll('.ind-dot');

    const updateActiveSlide = () => {
        let activeIndex = 0;
        let minDiff = Infinity;

        slides.forEach((slide, index) => {
            const rect = slide.getBoundingClientRect();
            const diff = Math.abs(rect.top);

            if (diff < minDiff) {
                minDiff = diff;
                activeIndex = index;
            }
        });

        // Update indicators
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });

        // Trigger fade-in for card in active slide
        const currentCard = cards[activeIndex];
        if (currentCard && !currentCard.classList.contains('visible')) {
            currentCard.classList.add('visible');
        }
    };

    // Listen on window scroll
    window.addEventListener('scroll', updateActiveSlide, { passive: true });

    // Run once on load
    setTimeout(updateActiveSlide, 100);

    /* ─── 2. Smooth Navigation via Dots ─── */
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = dot.getAttribute('href');
            const targetSlide = document.querySelector(targetId);

            if (targetSlide) {
                targetSlide.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* ─── 3. Parallax Hero Effect ─── */
    const heroBg = document.querySelector('.hero-bg-pattern');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            heroBg.style.transform = `translateY(${scrolled * 0.1}px)`;
        }, { passive: true });
    }

    /* ─── 4. Experience Cards Tilt Hover ─── */
    const expCards = document.querySelectorAll('.exp-card');
    expCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px) scale(1.01)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    /* ─── 5. Certificate Micro-Interaction ─── */
    const certCards = document.querySelectorAll('.cert-card-mini');
    certCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.97)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });

});
