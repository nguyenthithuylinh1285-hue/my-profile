/* =============================================
   PROFILE INTERACTIVE SCRIPT
   Nguyễn Thị Thùy Linh · Business Analyst
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── 1. Theme Toggle ─── */
    const themeBtn = document.getElementById('themeBtn');
    const root = document.documentElement;

    const applyTheme = (theme) => {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('profile-theme', theme);
        themeBtn.innerHTML = theme === 'dark'
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    };

    const savedTheme = localStorage.getItem('profile-theme') || 'light';
    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    /* ─── 2. Sticky Nav Active Link on Scroll ─── */
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const OFFSET = 100;

    const setActive = () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - OFFSET) {
                current = sec.id;
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    };

    window.addEventListener('scroll', setActive, { passive: true });
    setActive();

    /* ─── 3. Smooth Scroll for Nav Links ─── */
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
            }
        });
    });

    /* ─── 4. Animate Progress Bars on Intersection ─── */
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => { bar.style.width = targetWidth; }, 150);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(bar);
    });

    /* ─── 5. Fade-in Cards on Scroll ─── */
    const cards = document.querySelectorAll(
        '.skill-block, .tl-body, .proj-card, .edu-card, .awards-card, .certs-card, .obj-card, .intro-text-block'
    );

    const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(16px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        fadeObserver.observe(card);
    });

    /* ─── 6. Hero Photo Hover Subtle Zoom ─── */
    const photo = document.querySelector('.hero-photo-wrap');
    if (photo) {
        photo.addEventListener('mouseenter', () => {
            photo.style.transform = 'scale(1.03)';
            photo.style.transition = '0.3s ease';
        });
        photo.addEventListener('mouseleave', () => {
            photo.style.transform = 'scale(1)';
        });
    }

});
