// * Interactive Background Script
//  * Smooth Cursor Spotlight Tracking
//  */
const bg = document.getElementById("bg");

document.addEventListener("mousemove", function (e) {

    let x = (e.clientX / window.innerWidth) * 100;
    let y = (e.clientY / window.innerHeight) * 100;

    bg.style.background = `
        radial-gradient(
            circle at ${x * 0.3}% ${y * 0.4}%,
            rgba(170, 145, 255, 0.50),
            transparent 32%
        ),
        radial-gradient(
            circle at ${70 + x * 0.3}% ${40 + y * 0.3}%,
            rgba(80, 220, 245, 0.40),
            transparent 30%
        ),
        radial-gradient(
            circle at ${30 + x * 0.2}% ${85 + y * 0.2}%,
            rgba(190, 140, 255, 0.35),
            transparent 28%
        ),
        #f8f9ff
    `;
});