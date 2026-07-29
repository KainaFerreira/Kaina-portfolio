const statisticNumbers = document.querySelectorAll(
    ".featured-stat__number"
);

function animateStatistic(element) {
    const target = Number(element.dataset.target);
    const duration = 1200;
    const startTime = performance.now();

    function updateStatistic(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const currentValue = Math.floor(progress * target);

        element.textContent = `${currentValue}+`;

        if (progress < 1) {
            requestAnimationFrame(updateStatistic);
        }
    }

    requestAnimationFrame(updateStatistic);
}

statisticNumbers.forEach((number) => {
    animateStatistic(number);
});


const revealElements = document.querySelectorAll(".reveal");

function showInitialElements() {
    revealElements.forEach((element) => {
        const delay = Number(element.dataset.delay) || 0;

        setTimeout(() => {
            element.classList.add("is-visible");
        }, delay);
    });
}

window.addEventListener("load", showInitialElements);