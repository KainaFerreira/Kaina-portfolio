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

const contactForm = document.querySelector("#contact-form");
const contactFeedback = document.querySelector("#contact-feedback");

const EMAILJS_PUBLIC_KEY = "ZxAaIWuzvkS6l4YCi";
const EMAILJS_SERVICE_ID = "service_b18gqki";
const EMAILJS_TEMPLATE_ID = "template_4b3hfbg";

emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
});

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const submitButton = contactForm.querySelector(
            ".contact-form__button"
        );

        const originalButtonContent = submitButton.innerHTML;

        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";

        contactFeedback.textContent = "";
        contactFeedback.className = "contact-form__feedback";

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                contactForm
            );

            contactFeedback.textContent =
                "Mensagem enviada com sucesso! Em breve entrarei em contato.";

            contactFeedback.classList.add(
                "contact-form__feedback--success"
            );

            contactForm.reset();
        } catch (error) {
            console.error("Erro no envio:", error);

            contactFeedback.textContent =
                "Não foi possível enviar a mensagem. Tente novamente ou utilize outro canal de contato.";

            contactFeedback.classList.add(
                "contact-form__feedback--error"
            );
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonContent;
        }
    });
}