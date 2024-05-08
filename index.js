const btn =  document.getElementById('btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
    btn.classList.toggle('open')
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show-menu')
}

function scrollPage() {
    const scrollPos = window.scrollY;
    if (scrollPos>100 && !scrollStarted) {
        CountUp();
        scrollStarted = true;
    } else if(scrollPos<100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
} 
function CountUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            // Get counter target
            const target = +counter.getAttribute('data-target');
            // Get current counter value
            const c = +counter.innerText;

            // Create an increment

            const increment = target / 100;
            
            if (c<target) {
                // Round UP and set counter value
                counter.innerText = `${Math.ceil(c + increment)}`;

               setTimeout(updateCounter, 75);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    })
}

function reset() {
    counters.forEach((counters) => counters.innerHTML = '0')
}