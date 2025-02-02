// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})

// TYPED
var typed = new Typed('.typed', {
    // Waits 1000ms after typing "First"
    strings: ["^1200 Hi! I am a French student currently doing a double master's degree at ESSEC Business School and CentraleSupélec. ^1500 Passionate about finance, I am keen on learning more about this field and enthusiastic about the idea of developing new skills in order to pursue a future career in market finance. ^2000 I consider myself dynamic, perseverant and hard-working. ^700 I like to think ahead and beyond regular solutions for ordinary problems. ^1000 I enjoy new challenges and the idea of having to solve complex issues under high pressure, as they push me to excel and better myself. ^1000 Last but not least, I cherish the values of teamwork and organization to accomplish tasks in time."],//à chaque virgule il repart en arrière
    typeSpeed: 10,
    backSpeed: 0,
    loop: false
    //change fontSize?
  });

//AOS
AOS.init();
