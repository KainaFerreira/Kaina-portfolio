const projects = [
    {
        title: "Manual Digital",
        category: "Aplicação corporativa",
        description:
            "Aplicação web para disponibilização de manuais industriais e confirmação digital de leitura.",
        image: "./assets/images/projects/manual-digital.png",
        technologies: ["HTML", "CSS", "JavaScript", "EmailJS"],
        deploy: "https://app-confirmacao-leitura.netlify.app/",
        repository:
            "https://github.com/KainaFerreira/leitura-digital-manual-canteiro",
        status: "Online",
        featured: true,
    },

    {
        title: "BarberControl Finance",
        category: "Sistema de gestão",
        description:
            "Sistema para gestão de barbearias, clientes, fidelidade e controle financeiro.",
        image: "./assets/images/projects/barbercontrol.png",
        technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
        deploy: "https://barbercontrolfinance.netlify.app/",
        repository: "",
        status: "Online",
        featured: true,
    },

    {
        title: "AlmoSys",
        category: "Sistema empresarial",
        description:
            "Sistema em desenvolvimento para gestão e análise de processos de almoxarifado.",
        image: "./assets/images/projects/almosys.png",
        technologies: ["React", "Tailwind", "Firebase", "Vite"],
        deploy: "",
        repository: "",
        status: "Em desenvolvimento",
        featured: false,
    },
];

function createTechnologyTags(technologies) {
    return technologies
        .map(
            (technology) => `
                <li class="project-card__technology">
                    ${technology}
                </li>
            `
        )
        .join("");
}

function createProjectLink(url, label, modifier) {
    if (!url) {
        return "";
    }

    return `
        <a
            href="${url}"
            class="project-card__link ${modifier}"
            target="_blank"
            rel="noopener noreferrer"
        >
            ${label}
            <span aria-hidden="true">↗</span>
        </a>
    `;
}

function createProjectCard(project) {
    return `
        <article class="project-card reveal">
            <div class="project-card__image-wrapper">
                <img
                    src="${project.image}"
                    alt="Prévia do projeto ${project.title}"
                    class="project-card__image"
                    loading="lazy"
                >

                <span class="project-card__status">
                    ${project.status}
                </span>
            </div>

            <div class="project-card__body">
                <span class="project-card__category">
                    ${project.category}
                </span>

                <h3 class="project-card__title">
                    ${project.title}
                </h3>

                <p class="project-card__description">
                    ${project.description}
                </p>

                <ul class="project-card__technologies">
                    ${createTechnologyTags(project.technologies)}
                </ul>

                <div class="project-card__actions">
                    ${createProjectLink(
                        project.deploy,
                        "Ver projeto",
                        "project-card__link--primary"
                    )}

                    ${createProjectLink(
                        project.repository,
                        "GitHub",
                        "project-card__link--secondary"
                    )}
                </div>
            </div>
        </article>
    `;
}

const projectsGrid = document.querySelector("#projects-grid");

if (projectsGrid) {
    projectsGrid.innerHTML = projects
        .map(createProjectCard)
        .join("");
}