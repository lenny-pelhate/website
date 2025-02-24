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
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarContent = document.querySelector("#navbarContent");

    if (navbarToggler && navbarContent) {
        navbarToggler.addEventListener("click", function () {
            if (window.innerWidth < 1179) { // Only toggle for small screens
                navbarContent.classList.toggle("show");
            }
        });
    }    

    // Function to handle dropdown toggles
    function handleDropdownClick(e) {
        if (window.innerWidth < 1179) { // Only for small screens
            e.preventDefault();
            e.stopPropagation(); // Prevent event bubbling
            const nextMenu = this.nextElementSibling;
            if (nextMenu && nextMenu.classList.contains("dropdown-menu")) {
                // If we're clicking a different dropdown toggle, close all open ones first
                if (!nextMenu.classList.contains("show")) {
                    // Only close siblings at the same level, not all dropdowns
                    const parent = this.parentElement.parentElement;
                    parent.querySelectorAll(".dropdown-menu.show").forEach(menu => {
                        if (menu !== nextMenu) {
                            menu.classList.remove("show");
                        }
                    });
                }
                
                // Toggle the clicked dropdown
                nextMenu.classList.toggle("show");
                
                // Toggle active class on the toggle element
                this.classList.toggle("active");
            }
        }
    }

    // Add event listeners to ALL dropdown toggles (both top-level and submenu)
    document.addEventListener("DOMContentLoaded", function() {
    // Apply to all dropdown toggles
    document.querySelectorAll(".dropdown-toggle").forEach(element => {
        element.addEventListener("click", handleDropdownToggle);
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener("click", function(e) {
        if (window.innerWidth < 1179) {
            const isDropdownButton = e.target.classList.contains("dropdown-toggle") || 
                                    e.target.closest(".dropdown-toggle");
            
            if (!isDropdownButton) {
                document.querySelectorAll(".dropdown-menu.show").forEach(dropdown => {
                    dropdown.classList.remove("show");
                });
                
                document.querySelectorAll(".dropdown-toggle.active").forEach(toggle => {
                    toggle.classList.remove("active");
                });
            }
        }
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
