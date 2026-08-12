/* =============================================
   PORTFOLIO INTERACTIVE SCRIPT
   Nguyễn Thị Thùy Linh · Business Analyst
   Editorial Feminine Minimalism
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── 1. Fade-in Cards on Scroll (Staggered) ─── */
    const cards = document.querySelectorAll('.bento-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    /* ─── 2. Smooth Scroll for Internal Links ─── */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ─── 3. Parallax on Hero Card ─── */
    const hero = document.querySelector('.card-hero');
    const heroPattern = document.querySelector('.hero-bg-pattern');

    if (hero && heroPattern) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.15;
            heroPattern.style.transform = `translateY(${rate}px)`;
        }, { passive: true });
    }

    /* ─── 4. Skill Icon Pulse on Hover ─── */
    const skillIcons = document.querySelectorAll('.skill-icon-wrap');
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.animation = 'pulse 0.4s ease';
        });
        icon.addEventListener('animationend', () => {
            icon.style.animation = '';
        });
    });

    /* ─── 5. Typing Effect for Hero Title (optional subtle) ─── */
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }

    /* ─── 6. Photo Grid Hover Effect ─── */
    const photoItems = document.querySelectorAll('.photo-item img');
    photoItems.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transition = 'transform 0.4s ease';
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    /* ─── 7. Contact Script Hover Wave ─── */
    const contactScript = document.querySelector('.contact-script');
    if (contactScript) {
        contactScript.addEventListener('mouseenter', () => {
            contactScript.style.transition = 'transform 0.3s ease, color 0.3s ease';
            contactScript.style.transform = 'rotate(-1deg) scale(1.02)';
            contactScript.style.color = '#C09088';
        });
        contactScript.addEventListener('mouseleave', () => {
            contactScript.style.transform = 'rotate(0) scale(1)';
            contactScript.style.color = '';
        });
    }

    /* ─── 8. Cert Badge Click Copy ─── */
    const certBadges = document.querySelectorAll('.cert-badge');
    certBadges.forEach(badge => {
        badge.style.cursor = 'pointer';
        badge.addEventListener('click', () => {
            badge.style.transform = 'scale(0.95)';
            setTimeout(() => {
                badge.style.transform = 'scale(1)';
            }, 150);
        });
    });

});

/* ─── Pulse Keyframe ─── */
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.15); }
        100% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);
