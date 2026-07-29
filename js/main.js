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