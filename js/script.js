document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    setTimeout(function() {
        const changingIcons = document.querySelector(".changing-icons");
        changingIcons.style.visibility = "visible"; // Make the icons visible
        changingIcons.style.animationPlayState = "running"; // Start the animation
    }, 3100); // Increased delay to ensure the cursor effect is fully settled
});

document.addEventListener("DOMContentLoaded", function() {
    const navbarHeight = document.querySelector("header").offsetHeight;

    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: "smooth"
            });
        });
    });
});