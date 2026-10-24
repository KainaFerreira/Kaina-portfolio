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
        coverTitle: "BarberControl Finance",
        category: "Sistema de gestão",
        description:
            "Sistema para gestão de barbearias, clientes, fidelidade e controle financeiro.",
        image: "./assets/images/projects/barbercontrol-cover.jpg",
        technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
        deploy: "https://barbercontrolfinance.netlify.app/",
        repository: "",
        status: "Online",
        featured: true,
    },

    {
        title: "App de Termo de Entrega",
        coverTitle: "App de Termo de Entrega",
        category: "Aplicação web",
        description:
            "Aplicativo privado de termo de entrega, atualmente em desenvolvimento.",
        image: "./assets/images/projects/termo-entrega-cover.png",
        technologies: [],
        deploy: "",
        repository: "",
        status: "Em desenvolvimento",
        featured: false,
    },

    {
        title: "Refri do Dev",
        coverTitle: "Refri do Dev",
        category: "Landing page interativa",
        description:
            "Página interativa de refrigerantes com navegação animada entre os sabores morango, abacate e laranja.",
        previewThemeClass: "project-card__image-wrapper--refri",
        flavors: [
            { name: "Morango", image: "./assets/images/projects/refri-morango.png" },
            { name: "Abacate", image: "./assets/images/projects/refri-abacate.png" },
            { name: "Laranja", image: "./assets/images/projects/refri-laranja.png" },
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
        deploy: "",
        repository:
            "https://github.com/KainaFerreira/PROJETO-AULA-REFRI-DO-DEV",
        status: "Não hospedado",
        statusClass: "project-card__status--repository",
        featured: true,
    },

    {
        title: "ClimaDev",
        coverTitle: "ClimaDev",
        category: "Aplicação web",
        description:
            "Aplicativo de previsão do tempo com busca por cidade, consulta por voz e sugestões personalizadas.",
        image: "./assets/images/projects/app-temperatura-cover.png",
        technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
        deploy: "https://app-temperatura-dkdev.netlify.app/",
        repository: "https://github.com/KainaFerreira/App-temperatura-DKDev",
        status: "Não hospedado",
        statusClass: "project-card__status--repository",
        featured: true,
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
            <div class="project-card__image-wrapper ${project.previewThemeClass || ""}">
                ${project.flavors
                    ? `<div class="project-card__flavors">
                        ${project.flavors.map((flavor) => `
                            <div class="project-card__flavor">
                                <img src="${flavor.image}" alt="Lata sabor ${flavor.name}" loading="lazy">
                                <span>${flavor.name}</span>
                            </div>
                        `).join("")}
                    </div>`
                    : `<img
                        src="${project.image}"
                        alt="Prévia do projeto ${project.title}"
                        class="project-card__image"
                        loading="lazy"
                    >`}

                ${project.coverTitle
                    ? `<span class="project-card__cover-title">${project.coverTitle}</span>`
                    : ""}

                <span class="project-card__status ${project.statusClass || ""}">
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
