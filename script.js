document.addEventListener("DOMContentLoaded", function () {

    // -------------------- NAVBAR HIDE ON SCROLL --------------------
    let lastScrollTop = 0;
    navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || this.document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.style.top="-50px";
        } else {
            navbar.style.top="0";
        }
        lastScrollTop = scrollTop;
    })

    // -------------------- TYPED.js ANIMATION --------------------
    var typed = new Typed('.typed', {
        // Waits 1000ms after typing "First"
        strings: ["^1200 Hi! I am a French student currently doing a double master's degree at ESSEC Business School and CentraleSupélec. ^1500 Passionate about finance, I am keen on learning more about this field and enthusiastic about the idea of developing new skills in order to pursue a future career in market finance. ^2000 I consider myself dynamic, perseverant and hard-working. ^700 I like to think ahead and beyond regular solutions for ordinary problems. ^1000 I enjoy new challenges and the idea of having to solve complex issues under high pressure, as they push me to excel and better myself. ^1000 Last but not least, I cherish the values of teamwork and organization to accomplish tasks in time."],//à chaque virgule il repart en arrière
        typeSpeed: 10,
        backSpeed: 0,
        loop: false
    });

    // -------------------- AOS (Animate On Scroll) --------------------
    AOS.init();

    // -------------------- DROPDOWN MENU FOR SMALL SCREENS --------------------
    document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarContent = document.querySelector('#navbarContent');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            navbarContent.classList.toggle('show');
        });
    }
    
    // Handle submenu toggles on mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 1179) {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle immediate dropdown
                const parent = this.parentElement;
                const dropdown = this.nextElementSibling;
                
                // Close all other dropdowns
                dropdownToggles.forEach(otherToggle => {
                    if (otherToggle !== this && otherToggle.nextElementSibling) {
                        otherToggle.nextElementSibling.classList.remove('show');
                        otherToggle.parentElement.classList.remove('show');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('show');
                parent.classList.toggle('show');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1179) {
            if (!e.target.closest('.navbar')) {
                const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
                openDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('show');
                    if (dropdown.parentElement) {
                        dropdown.parentElement.classList.remove('show');
                    }
                });
                
                if (navbarContent.classList.contains('show')) {
                    navbarContent.classList.remove('show');
                }
            }
        }
    });
    
    // Adjust behavior when screen size changes
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1179) {
            // Reset mobile-specific classes on desktop
            const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
            openDropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
            
            if (navbarContent.classList.contains('show')) {
                navbarContent.classList.remove('show');
            }
        }
    });
});

});

// -------------------- Cursor -----------------------------------
// const cursor = document.getElementById('cursor');
//         const trailContainer = document.body;
//         const trailHistory = [];
//         const maxTrailLength = 5;

//         document.addEventListener('mousemove', (e) => {
//             cursor.style.left = `${e.clientX - 25}px`;
//             cursor.style.top = `${e.clientY - 12}px`;

//             const trail = document.createElement('div');
//             trail.classList.add('money-trail');
//             trail.style.left = `${e.clientX - 20}px`;
//             trail.style.top = `${e.clientY - 10}px`;
//             trail.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
//             trailContainer.appendChild(trail);

//             trailHistory.push(trail);

//             if (trailHistory.length > maxTrailLength) {
//                 const oldestTrail = trailHistory.shift();
//                 oldestTrail.style.opacity = 0;
//                 setTimeout(() => oldestTrail.remove(), 200);
//             }
//         });
