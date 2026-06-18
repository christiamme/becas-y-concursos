// Mock database of opportunities
const OPPORTUNITIES_DATA = [
    {
        id: "beca-santander-2026",
        title: "Beca Santander Estudios | Graduados",
        type: "beca",
        institution: "Banco Santander",
        area: "academia",
        areaLabel: "Academia & Investigación",
        reward: "Apoyo de $10,000 MXN + Mentoría",
        modality: "En línea",
        deadline: "2026-09-30",
        description: "Beca dirigida a estudiantes de licenciatura y posgrado que deseen complementar sus estudios universitarios con apoyo de manutención y formación especializada.",
        requirements: [
            "Ser alumno regular de una universidad mexicana.",
            "Tener promedio mínimo de 8.5 en el ciclo anterior.",
            "Completar el curso en la plataforma Santander antes de la fecha límite."
        ],
        url: "https://www.becas-santander.com"
    },
    {
        id: "concurso-innovacion-sostenible",
        title: "Premio a la Innovación Sostenible",
        type: "concurso",
        institution: "Fundación Coca-Cola & Tecnológico de Monterrey",
        area: "tecnologia",
        areaLabel: "Tecnología & Ciencia",
        reward: "$150,000 MXN para el proyecto ganador",
        modality: "Presencial / Híbrido",
        deadline: "2026-07-15",
        description: "Certamen nacional que premia proyectos tecnológicos enfocados en el reciclaje, el cuidado del agua y la reducción de huella de carbono.",
        requirements: [
            "Participación en equipos de 2 a 5 personas.",
            "Presentar un prototipo funcional o MVP.",
            "Proyecto alineado a los Objetivos de Desarrollo Sostenible (ODS)."
        ],
        url: "https://concursos.tec.mx"
    },
    {
        id: "hackathon-ia-creativa",
        title: "Hackathon de Inteligencia Artificial Creativa",
        type: "concurso",
        institution: "Microsoft & Platzi",
        area: "tecnologia",
        areaLabel: "Tecnología & Ciencia",
        reward: "Bolsa de premios de $5,000 USD",
        modality: "En línea",
        deadline: "2026-07-05",
        description: "Competencia de desarrollo acelerado de 48 horas donde equipos de todo LATAM construirán soluciones generativas de IA utilizando la nube de Azure.",
        requirements: [
            "Registro libre e individual o en equipo.",
            "Desarrollar soluciones de IA de código abierto.",
            "Presentar un pitch de video de 3 minutos."
        ],
        url: "https://platzi.com/hackathon"
    },
    {
        id: "beca-creadores-digitales",
        title: "Beca Creadores Digitales Emergentes",
        type: "beca",
        institution: "Secretaría de Cultura",
        area: "arte",
        areaLabel: "Arte & Cultura",
        reward: "Fondo mensual de $8,000 MXN por un año",
        modality: "Híbrido",
        deadline: "2026-09-01",
        description: "Estímulo económico y académico para artistas visuales, diseñadores y animadores que quieran desarrollar su primer cortometraje o portafolio digital interactivo.",
        requirements: [
            "Tener entre 18 y 29 años.",
            "Presentar portafolio de trabajos artísticos previos.",
            "Proyecto de creación a desarrollar en 12 meses."
        ],
        url: "https://www.gob.mx/cultura"
    },
    {
        id: "concurso-emprende-social",
        title: "Desafío Conexión Social 2026",
        type: "concurso",
        institution: "Ashoka México",
        area: "impacto",
        areaLabel: "Impacto Social",
        reward: "Financiamiento semilla de $80,000 MXN + Aceleración",
        modality: "En línea",
        deadline: "2026-07-28",
        description: "Convocatoria abierta para emprendedores sociales que cuenten con un modelo de negocio validado enfocado en solucionar problemas de desigualdad económica.",
        requirements: [
            "Contar con ventas iniciales o validación de mercado.",
            "Proyecto enfocado en poblaciones vulnerables.",
            "Disponibilidad para cursar el programa de aceleración."
        ],
        url: "https://ashoka.org/es-mx"
    },
    {
        id: "concurso-intersecciones-2026",
        title: "Intersecciones 2026 | Congreso de Arquitectura, Diseño, Ciudad y Territorio",
        type: "concurso",
        institution: "Tecnológico de Monterrey & Pontificia Universidad Católica de Chile",
        area: "academia",
        areaLabel: "Academia & Investigación",
        reward: "Publicación indexada en Scopus + Ponencia",
        modality: "Presencial (Guadalajara, México)",
        deadline: "2026-06-30",
        description: "VI Congreso interdisciplinario enfocado en la investigación aplicada y la creación como actividades académicas comprometidas y transformadoras en diseño, arquitectura y urbanismo.",
        requirements: [
            "Presentar abstract de máximo 300 palabras en español o inglés antes del 30 de junio.",
            "Indicar el nivel del trabajo (Pregrado/Licenciatura, Maestría, Doctorado o Académico/Profesional).",
            "Adscribir la propuesta a uno de los tres ejes temáticos del congreso (Territorios, Metodologías de Investigación-Creación, Herramientas/Tecnologías)."
        ],
        url: "https://www.intersecciones2026.com/"
    },
    {
        id: "concurso-golden-camellia-2026",
        title: "The 9th Golden Camellia International Cultural & Creative Design Competition 2026",
        type: "concurso",
        institution: "World Crafts Council",
        area: "arte",
        areaLabel: "Arte & Cultura",
        reward: "Premio principal de $1,450 USD",
        modality: "En línea (Envío por Email)",
        deadline: "2026-08-31",
        description: "Certamen internacional de prestigio enfocado en premiar diseños innovadores y contemporáneos que celebren la excelencia cultural y creativa, abierto a artistas digitales, artesanos tradicionales y diseñadores de todo el mundo.",
        requirements: [
            "Participación libre y gratuita.",
            "Preparar un diseño que cumpla con los criterios culturales y creativos del Golden Camellia Award.",
            "Descargar el formulario oficial de inscripción a través del enlace de la convocatoria.",
            "Enviar el formulario completo junto con los archivos digitales del diseño por correo electrónico a: jchsjds@vip.163.com"
        ],
        url: "https://www.linkedin.com/posts/world-crafts-council_global-textileartist-sculpturalart-activity-7442051567178125312-1lE1/"
    },
    {
        id: "concurso-andreu-world-2026",
        title: "25th Andreu World International Design Contest",
        type: "concurso",
        institution: "Andreu World",
        area: "arte",
        areaLabel: "Arte & Cultura",
        reward: "1er Premio: €5,000 | 2do Premio: €2,500",
        modality: "Híbrido (Digital + Envío de maqueta 1:5)",
        deadline: "2026-09-16",
        description: "Concurso internacional de diseño bajo la temática 'Manufacturing the Future'. Desafía a estudiantes y profesionales a crear asientos o mesas con criterios de sostenibilidad, economía circular e innovación industrial.",
        requirements: [
            "Participación libre para estudiantes y profesionales del diseño sin límite de edad.",
            "Diseñar una mesa o asiento innovador alineado a principios de diseño sostenible.",
            "Registrarse en el sitio oficial y subir la memoria técnica del proyecto.",
            "Enviar una maqueta física a escala 1:5 a la sede del organizador."
        ],
        url: "https://andreuworld.com/en/talent/design-contest"
    },
    {
        id: "concurso-porada-award-2026",
        title: "Porada International Design Award 2026",
        type: "concurso",
        institution: "Porada & POLI.design",
        area: "arte",
        areaLabel: "Arte & Cultura",
        reward: "Fondo total de premios de €11,000",
        modality: "En línea (Envío Digital)",
        deadline: "2027-01-31",
        description: "14ª edición de este certamen internacional de diseño de mobiliario enfocado este año en el concepto de 'MESAS'. Reta a diseñar propuestas donde la madera maciza sea el elemento principal, combinando funcionalidad y tradición artesanal.",
        requirements: [
            "Abierto a profesionales del diseño y estudiantes de carreras creativas de todo el mundo.",
            "Crear un concepto inédito de mesa donde la madera maciza sea el material predominante.",
            "Presentar una memoria descriptiva de máximo 3,000 caracteres en inglés o italiano.",
            "Subir tres láminas gráficas ISO-A3 en formato PDF de máximo 5 MB."
        ],
        url: "https://www.porada.it/es/porada-international-design-award/"
    }
];

// App State
let currentType = 'all'; // 'all', 'beca', 'concurso', 'favorites'
let favorites = JSON.parse(localStorage.getItem('fav_opportunities')) || [];
let viewLayout = 'grid'; // 'grid' or 'list'

// DOM Elements
const gridContainer = document.getElementById('opportunities-grid');
const searchInput = document.getElementById('search-input');
const filterArea = document.getElementById('filter-area');
const filterStatus = document.getElementById('filter-status');
const navAll = document.getElementById('nav-all');
const navBecas = document.getElementById('nav-becas');
const navConcursos = document.getElementById('nav-concursos');
const navFavorites = document.getElementById('nav-favorites');
const favBadge = document.getElementById('fav-count');
const sectionTitle = document.getElementById('section-title');

// Stat Elements
const statTotal = document.getElementById('stat-total');
const statBecas = document.getElementById('stat-becas');
const statConcursos = document.getElementById('stat-concursos');

// View Toggle Elements
const viewGridBtn = document.getElementById('view-grid');
const viewListBtn = document.getElementById('view-list');

// Modal Elements
const modal = document.getElementById('details-modal');
const modalClose = document.getElementById('modal-close');
const modalBadge = document.getElementById('modal-badge');
const modalTitle = document.getElementById('modal-title');
const modalInstitution = document.getElementById('modal-institution');
const modalDeadline = document.getElementById('modal-deadline');
const modalReward = document.getElementById('modal-reward');
const modalModality = document.getElementById('modal-modality');
const modalDescription = document.getElementById('modal-description');
const modalRequirements = document.getElementById('modal-requirements');
const modalFavBtn = document.getElementById('modal-fav-btn');
const modalApplyBtn = document.getElementById('modal-apply-btn');

let activeModalOpportunity = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    updateFavoritesBadge();
    calculateStats();
    renderOpportunities();
});

// Event Listeners Setup
function setupEventListeners() {
    // Nav Navigation
    navAll.addEventListener('click', () => changeNavTab('all', navAll, "Todas las Oportunidades"));
    navBecas.addEventListener('click', () => changeNavTab('beca', navBecas, "Becas Disponibles"));
    navConcursos.addEventListener('click', () => changeNavTab('concurso', navConcursos, "Concursos & Convocatorias"));
    navFavorites.addEventListener('click', () => changeNavTab('favorites', navFavorites, "Mis Oportunidades Guardadas"));

    // Inputs & Filters
    searchInput.addEventListener('input', renderOpportunities);
    filterArea.addEventListener('change', renderOpportunities);
    filterStatus.addEventListener('change', renderOpportunities);

    // Layout Toggle
    viewGridBtn.addEventListener('click', () => setLayout('grid'));
    viewListBtn.addEventListener('click', () => setLayout('list'));

    // Modal Close
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Modal Add Fav Action
    modalFavBtn.addEventListener('click', () => {
        if (activeModalOpportunity) {
            toggleFavorite(activeModalOpportunity.id);
            updateModalFavButtonState();
            renderOpportunities();
        }
    });

    // Close Modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function changeNavTab(type, buttonElement, titleText) {
    currentType = type;
    
    // Remove active classes
    [navAll, navBecas, navConcursos, navFavorites].forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    buttonElement.classList.add('active');
    
    // Set Section title
    sectionTitle.textContent = titleText;
    
    renderOpportunities();
}

function setLayout(layoutType) {
    viewLayout = layoutType;
    if (layoutType === 'grid') {
        viewGridBtn.classList.add('active');
        viewListBtn.classList.remove('active');
        gridContainer.className = 'opportunities-grid grid-layout';
    } else {
        viewListBtn.classList.add('active');
        viewGridBtn.classList.remove('active');
        gridContainer.className = 'opportunities-grid list-layout';
    }
}

// Calculate Dashboard Stats
function calculateStats() {
    const total = OPPORTUNITIES_DATA.length;
    const becas = OPPORTUNITIES_DATA.filter(o => o.type === 'beca').length;
    const concursos = OPPORTUNITIES_DATA.filter(o => o.type === 'concurso').length;

    statTotal.textContent = total;
    statBecas.textContent = becas;
    statConcursos.textContent = concursos;
}

// Format Deadline for user display
function formatDisplayDate(dateString) {
    const parts = dateString.split('-');
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

// Check if opportunity is closing soon (e.g. less than 30 days from now, simulating 2026-06-18)
function isClosingSoon(dateString) {
    const deadlineDate = new Date(dateString);
    const currentDate = new Date('2026-06-18');
    const diffTime = deadlineDate - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 && diffDays <= 30;
}

// Favorites Action Handlers
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('fav_opportunities', JSON.stringify(favorites));
    updateFavoritesBadge();
}

function updateFavoritesBadge() {
    favBadge.textContent = favorites.length;
    if (favorites.length > 0) {
        favBadge.style.display = 'inline-block';
    } else {
        favBadge.style.display = 'none';
    }
}

function updateModalFavButtonState() {
    if (!activeModalOpportunity) return;
    const isFav = favorites.includes(activeModalOpportunity.id);
    if (isFav) {
        modalFavBtn.classList.add('active');
        modalFavBtn.innerHTML = `<i class="fa-solid fa-heart"></i> Quitar Favorito`;
    } else {
        modalFavBtn.classList.remove('active');
        modalFavBtn.innerHTML = `<i class="fa-regular fa-heart"></i> Favorito`;
    }
}

// Modal View Controller
function openModal(opportunity) {
    activeModalOpportunity = opportunity;
    
    modalBadge.className = `opportunity-badge type-${opportunity.type}`;
    modalBadge.textContent = opportunity.type === 'beca' ? 'Beca' : 'Concurso';
    
    modalTitle.textContent = opportunity.title;
    modalInstitution.innerHTML = `<i class="fa-solid fa-building-columns"></i> ${opportunity.institution}`;
    modalDeadline.textContent = formatDisplayDate(opportunity.deadline);
    modalReward.textContent = opportunity.reward;
    modalModality.textContent = opportunity.modality;
    modalDescription.textContent = opportunity.description;
    
    // Fill requirements list
    modalRequirements.innerHTML = '';
    opportunity.requirements.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        modalRequirements.appendChild(li);
    });
    
    modalApplyBtn.href = opportunity.url;
    
    updateModalFavButtonState();
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock main scroll
}

function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto'; // Unlock main scroll
    activeModalOpportunity = null;
}

// Render Core Dashboard Grid/List cards
function renderOpportunities() {
    gridContainer.innerHTML = '';
    
    const searchText = searchInput.value.toLowerCase().trim();
    const areaFilter = filterArea.value;
    const statusFilter = filterStatus.value;
    
    const filtered = OPPORTUNITIES_DATA.filter(opp => {
        // Nav tab filter
        if (currentType === 'beca' && opp.type !== 'beca') return false;
        if (currentType === 'concurso' && opp.type !== 'concurso') return false;
        if (currentType === 'favorites' && !favorites.includes(opp.id)) return false;
        
        // Search filter
        if (searchText) {
            const matchesText = opp.title.toLowerCase().includes(searchText) || 
                                opp.institution.toLowerCase().includes(searchText) ||
                                opp.description.toLowerCase().includes(searchText);
            if (!matchesText) return false;
        }
        
        // Area dropdown filter
        if (areaFilter !== 'all' && opp.area !== areaFilter) return false;
        
        // Status dropdown filter
        if (statusFilter === 'open') {
            const dateDiff = new Date(opp.deadline) - new Date('2026-06-18');
            if (dateDiff < 0) return false;
        } else if (statusFilter === 'closing') {
            if (!isClosingSoon(opp.deadline)) return false;
        }
        
        return true;
    });

    // Sort by deadline (closest first)
    filtered.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    if (filtered.length === 0) {
        gridContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-folder-open"></i>
                <h3>No se encontraron convocatorias</h3>
                <p>Intenta cambiar los filtros de búsqueda o categoría.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(opp => {
        const isFav = favorites.includes(opp.id);
        const card = document.createElement('div');
        card.className = 'opportunity-card';
        card.setAttribute('data-id', opp.id);
        
        const isAlert = isClosingSoon(opp.deadline);
        const deadlineClass = isAlert ? 'info-value deadline-alert' : 'info-value';
        const displayDate = formatDisplayDate(opp.deadline);
        
        if (viewLayout === 'grid') {
            card.innerHTML = `
                <div>
                    <div class="card-top">
                        <span class="opportunity-badge type-${opp.type}">${opp.type === 'beca' ? 'Beca' : 'Concurso'}</span>
                        <button class="favorite-btn ${isFav ? 'active' : ''}" aria-label="Agregar a favoritos" onclick="event.stopPropagation(); window.appToggleFav('${opp.id}')">
                            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        </button>
                    </div>
                    <h3 class="card-title">${opp.title}</h3>
                    <div class="card-institution">
                        <i class="fa-solid fa-building-columns"></i> ${opp.institution}
                    </div>
                    <div class="card-tags">
                        <span class="tag">${opp.areaLabel}</span>
                        <span class="tag"><i class="fa-solid fa-earth-americas"></i> ${opp.modality}</span>
                    </div>
                </div>
                <div class="card-bottom">
                    <div class="card-info">
                        <span class="info-label">Apoyo / Premio</span>
                        <span class="info-value text-gradient">${opp.reward.length > 30 ? opp.reward.substring(0, 30) + '...' : opp.reward}</span>
                    </div>
                    <div class="card-info" style="text-align: right;">
                        <span class="info-label">Cierre</span>
                        <span class="${deadlineClass}">${isAlert ? '<i class="fa-solid fa-triangle-exclamation"></i> ' : ''}${displayDate}</span>
                    </div>
                </div>
            `;
        } else {
            // List layout rendering
            card.innerHTML = `
                <div class="card-content">
                    <div>
                        <span class="opportunity-badge type-${opp.type}">${opp.type === 'beca' ? 'Beca' : 'Concurso'}</span>
                    </div>
                    <div>
                        <h3 class="card-title" style="margin-bottom: 0.25rem;">${opp.title}</h3>
                        <div class="card-institution" style="margin-bottom: 0;">
                            <i class="fa-solid fa-building-columns"></i> ${opp.institution}
                        </div>
                    </div>
                    <div class="card-tags" style="margin-bottom: 0; justify-content: flex-start;">
                        <span class="tag">${opp.areaLabel}</span>
                        <span class="tag">${opp.modality}</span>
                    </div>
                </div>
                <div class="card-bottom">
                    <div class="card-info">
                        <span class="info-label">Apoyo</span>
                        <span class="info-value text-gradient">${opp.reward}</span>
                    </div>
                    <div class="card-info" style="text-align: right;">
                        <span class="info-label">Límite</span>
                        <span class="${deadlineClass}">${displayDate}</span>
                    </div>
                    <button class="favorite-btn ${isFav ? 'active' : ''}" style="margin-left: 1rem;" onclick="event.stopPropagation(); window.appToggleFav('${opp.id}')">
                        <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                </div>
            `;
        }
        
        card.addEventListener('click', () => openModal(opp));
        gridContainer.appendChild(card);
    });
}

// Export toggle favorite function globally for card button access
window.appToggleFav = function(id) {
    toggleFavorite(id);
    renderOpportunities();
};
