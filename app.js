// Mock database of opportunities
const OPPORTUNITIES_DATA = [
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
    },
    {
        id: "rebelion-moda-zapopan",
        title: "Rebelión Moda Zapopan",
        type: "concurso",
        institution: "Gobierno de Zapopan - Dirección de Industrias Creativas",
        area: "arte",
        areaLabel: "Arte & Cultura",
        reward: "Programa gratuito de incubación integral",
        modality: "Presencial",
        deadline: "2026-07-10",
        description: "Programa gratuito de incubación integral para emprendedores de moda, diseñado bajo la metodología práctica de 'Learning by Doing', que proporciona herramientas teóricas, prácticas y digitales para profesionalizar tu marca y potenciar tu negocio en el mercado actual.",
        requirements: [
            "Vivir, estudiar o trabajar en el municipio de Zapopan.",
            "Tener una marca de indumentaria (ropa, calzado o accesorios) con producto disponible y con historial de ventas.",
            "Disponibilidad de tiempo para asistir a las sesiones y presentar un proyecto final."
        ],
        url: "https://www.ingeniazapopan.com/rebelionmoda"
    },
    {
        id: "james-dyson-award-2026",
        title: "James Dyson Award 2026",
        type: "concurso",
        institution: "James Dyson Foundation",
        area: "tecnologia",
        areaLabel: "Tecnología & Ciencia",
        reward: "£30,000 (ganador internacional) / £5,000 (ganador nacional)",
        modality: "En línea",
        deadline: "2026-07-15",
        description: "Concurso internacional de diseño e ingeniería que busca inventores con ideas frescas que resuelvan problemas reales. Organizado por la James Dyson Foundation, está abierto a estudiantes actuales y recién egresados de carreras de diseño a nivel global.",
        requirements: [
            "Ser estudiante actual o recién egresado de carreras de diseño.",
            "Diseñar una invención que resuelva un problema real.",
            "Demostrar viabilidad técnica e investigación de costos de fabricación.",
            "Incluir investigación sobre costos de manufactura y precio de venta."
        ],
        url: "https://www.jamesdysonaward.org/"
    },
    {
        id: "premio-disena-mexico-2026",
        title: "Premio Nacional de Diseño: Diseña México 2026",
        type: "concurso",
        institution: "Diseña México, Consejo Certificador de la Innovación y el Diseño",
        area: "arte",
        areaLabel: "Arte & Cultura",
        reward: "Reconocimiento nacional, exhibición virtual y uso de marca",
        modality: "Híbrido",
        deadline: "2026-07-10",
        description: "Concurso nacional de diseño en 7 categorías: Diseño de Producto, Diseño Digital, Comunicaciones Visuales, Espacios Interiores, Servicios y Experiencias, Moda, y Tesis o Investigación en Diseño. Abierto a estudiantes y profesionales de México y el continente americano.",
        requirements: [
            "Ser diseñador profesional o estudiante mexicano o extranjero radicado en México o países del continente americano.",
            "Proyectos realizados entre el 1 de enero de 2025 y el 10 de julio de 2026.",
            "Cubrir cuota de recuperación ($1,200 MXN estudiantes, $1,490 MXN profesionales).",
            "Presentar máximo 6 fotografías por proyecto con descripción en el formato de inscripción."
        ],
        url: "https://www.premiodisenamexico.mx/registro"
    },
    {
        id: "seoul-design-award-2026",
        title: "Seoul Design Award 2026",
        type: "concurso",
        institution: "Seoul Design Foundation / Seoul Metropolitan Government",
        area: "impacto",
        areaLabel: "Impacto Social",
        reward: "150,000,000 KRW total — Gran Premio: 50,000,000 KRW",
        modality: "En línea",
        deadline: "2026-06-30",
        description: "Premio internacional de diseño que busca proyectos en todas las áreas del diseño realizados en los últimos 5 años, que contribuyan a un futuro más sostenible y armónico entre las personas, la sociedad, el medio ambiente y la naturaleza.",
        requirements: [
            "Proyectos de diseño en cualquier campo realizados en los últimos 5 años.",
            "Abierto a diseñadores individuales, grupos y empresas.",
            "Participar en una de las tres áreas: Main Award (proyectos realizados), Young Designer Award (métodos de realización) o ESG Design Impact Award (diseño corporativo sostenible).",
            "Cumplir con los criterios de evaluación: solución creativa, impacto social y visión de futuro."
        ],
        url: "https://www.seouldesignaward.or.kr/guidelines/guidelines"
    },
    {
        id: "aakruti-innovation-2026",
        title: "AAKRUTI Innovation Competition 2026",
        type: "concurso",
        institution: "Dassault Systèmes (SOLIDWORKS)",
        area: "tecnologia",
        areaLabel: "Tecnología & Ciencia",
        reward: "Final global en 3DEXPERIENCE World 2027, reconocimiento internacional y certificados",
        modality: "Híbrido",
        deadline: "2026-09-15",
        description: "Competencia global de innovación y diseño para estudiantes que reta a resolver problemas del mundo real usando tecnología, creatividad e ingeniería. Desde 2011 han participado más de 75,000 estudiantes de 37 países en temáticas de Robótica, Problemas Comunitarios Locales, Innovación en Salud y Movilidad.",
        requirements: [
            "Ser estudiante universitario de Ingeniería, Diseño, Arquitectura, Medicina, Administración o Ciencias Sociales.",
            "Formar un equipo de 4 estudiantes y 1 profesor.",
            "Crear un 3DEXPERIENCE ID para cada miembro del equipo.",
            "Seleccionar una temática: Robótica, Problemas Comunitarios, Innovación en Salud o Movilidad."
        ],
        url: "https://www.solidworks.com/product/students/aakruti-global"
    },
    {
        id: "ie-immersive-design-2026",
        title: "IE Immersive Design Competition 1st Edition 2026: Rethinking The Elevator Experience",
        type: "concurso",
        institution: "IE University - School of Architecture and Design",
        area: "tecnologia",
        areaLabel: "Tecnología & Ciencia",
        reward: "40% descuento (1er lugar) / 20% descuento (2do lugar) en tuition del Master in Design for Immersive Experiences and XR",
        modality: "En línea",
        deadline: "2026-06-25",
        description: "Concurso de diseño inmersivo que reta a replantear la experiencia del ascensor a través del diseño narrativo, interactivo y futurista. Enfoques: Hybrid Design (sensores, interacción espacial), Narrative Design (storytelling visual/sonoro/emocional) o Future Design (nueva visión de movilidad vertical inmersiva).",
        requirements: [
            "Presentar un PDF con máximo 5 diapositivas en formato 16:9 o 3:4.",
            "Incluir título indicando el enfoque: Hybrid Design, Narrative Design o Future Design.",
            "Explicación escrita en 1 diapositiva más representaciones visuales (diagramas, collages, storyboards, etc.).",
            "Todos los textos en inglés y archivo nombrado como apellido_nombre_letra.pdf."
        ],
        url: "https://www.ie.edu/school-architecture-design/challenges/ie-immersive-design-competition-1st-edition-2026-rethinking-the-elevator-experience/"
    },
    {
        id: "tisdc-2026",
        title: "Taiwan International Student Design Competition (TISDC) 2026",
        type: "concurso",
        institution: "Ministry of Education, Taiwan / NTUST Department of Architecture",
        area: "arte",
        areaLabel: "Arte & Cultura",
        reward: "Grand Prix: NT$400,000 / Gold: NT$250,000 / Silver: NT$150,000 / Bronze: NT$60,000 / Menciones: NT$10,000",
        modality: "En línea",
        deadline: "2026-07-06",
        description: "Concurso global de diseño para estudiantes con categorías de Diseño de Producto, Diseño Visual, Animación Digital, Arquitectura y Paisaje, y Diseño de Moda. Plataforma de referencia internacional para premios estudiantiles de diseño, con enfoque en diseño para el bien social.",
        requirements: [
            "Ser estudiante activo de cualquier país del mundo.",
            "Participar en una de las 5 categorías: Diseño de Producto, Diseño Visual, Animación Digital, Arquitectura y Paisaje, o Diseño de Moda.",
            "Enviar archivos digitales para la evaluación preliminar.",
            "Los trabajos finalistas pasan a evaluación presencial con discusión del jurado."
        ],
        url: "https://www.tisdc.org/en/home/"
    },
    {
        id: "dia-2026",
        title: "Design Intelligence Award (DIA) 2026",
        type: "concurso",
        institution: "DIA Committee",
        area: "tecnologia",
        areaLabel: "Tecnología & Ciencia",
        reward: "Grand Award: ¥1,000,000 / Gold: ¥300,000 / Silver: ¥100,000 / Bronze: ¥30,000 / Future Talents: ¥20,000",
        modality: "En línea (con envío físico para 2da evaluación)",
        deadline: "2026-09-01",
        description: "Premio internacional de diseño centrado en Intelligent Manufacturing con categorías de Digital Economy, Industrial Equipment, Life Wisdom y Cultural Innovation. Abierto a empresas, universidades, instituciones e individuos de todo el mundo.",
        requirements: [
            "Abierto a empresas, universidades, instituciones e individuos de cualquier país.",
            "Product Group: productos lanzados en los últimos 2 años, con envío de producto físico para segunda evaluación.",
            "Concept Group: demostrar viabilidad industrial, con prototipo funcional para segunda evaluación.",
            "Registro gratuito hasta el 1 de julio de 2026; después aplicar cuota de ¥3,500/entry hasta el 1 de septiembre."
        ],
        url: "https://www.di-award.org/en/rules.html"
    },
    {
        id: "hm-design-award-2026",
        title: "H&M Design Award 2026",
        type: "concurso",
        institution: "H&M Group",
        area: "arte",
        areaLabel: "Arte & Cultura",
        reward: "Grand Prize: €150,000 + mentoría + colección producida y vendida en tiendas H&M / Finalistas: €10,000 c/u",
        modality: "En línea",
        deadline: "2026-08-31",
        description: "Premio anual que apoya a graduados emergentes de moda al inicio de sus carreras. Creado por H&M Group, celebra diseñadores con creatividad excepcional, innovación y respeto por la artesanía de la moda. El ganador recibe producción y venta de su colección en tiendas H&M y hm.com.",
        requirements: [
            "Ser graduado en 2025 o 2026 de un Bachelor's o Master's en moda (o equivalente) de una institución participante.",
            "Presentar portafolio digital con colección de graduación de womenswear o menswear.",
            "La colección debe incluir al menos 4 outfits completos (no solo prints o accesorios).",
            "Declarar cualquier uso de IA en el proceso creativo."
        ],
        url: "https://designaward.hm.com/"
    },
    {
        id: "only-natural-2026",
        title: "Only Natural Home Competition 2026",
        type: "concurso",
        institution: "Only Natural",
        area: "impacto",
        areaLabel: "Impacto Social",
        reward: "Inclusión en colección cápsula global + viaje a ceremonia en Londres + trofeo y certificado",
        modality: "En línea",
        deadline: "2026-06-30",
        description: "Concurso internacional de diseño para estudiantes que inspira el uso de materiales naturales como alternativa al fast fashion y al diseño sintético. Categorías: Fashion (apparel, accessories, footwear) y Home (furniture, interiors). Promueve la sostenibilidad, la economía circular y la valoración de materiales naturales.",
        requirements: [
            "Ser estudiante activo o graduado en 2024-2025 de una institución de educación superior mundial.",
            "Tener 18 años o más.",
            "Diseñar con materiales naturales como foco principal (prohibido el uso de pieles o exóticos).",
            "Entregar project summary, mood board, sketches, lista de materiales y video opcional, todo en inglés."
        ],
        url: "https://onlynatural.internationaldesigncomp.com/competition-event/home-2026/"
    },
    {
        id: "beca-santander-manutencion-2026",
        title: "Beca Santander Apoyo a la Manutención 2026",
        type: "beca",
        institution: "Santander Open Academy (Grupo Santander)",
        area: "academia",
        areaLabel: "Academia & Investigación",
        reward: "$9,000 MXN (apoyo económico único)",
        modality: "En línea",
        deadline: "2026-07-20",
        description: "300 becas de apoyo económico único de $9,000 MXN para estudiantes de educación superior técnica, licenciatura, maestría o doctorado en instituciones públicas o privadas de México. Iniciativa de Grupo Santander para contribuir al fortalecimiento de la trayectoria académica de estudiantes.",
        requirements: [
            "Tener 16 años cumplidos o más.",
            "Estar inscrito en un programa de educación superior técnica, licenciatura, maestría o doctorado en institución pública o privada.",
            "Registrarse en Santander Open Academy e inscribirse del 4 de mayo al 20 de julio de 2026.",
            "Realizar un curso de acceso directo de Santander Open Academy antes del 11 de agosto de 2026.",
            "Completar la inscripción del 24 de julio al 11 de agosto de 2026 con historial académico y credencial de estudiante."
        ],
        url: "https://app.santanderopenacademy.com/es/program/apoyo-a-la-manutencion-2026"
    },
    {
        id: "beca-openbank-tech-manutencion-2026",
        title: "Beca Santander Openbank Tech Manutención 2026",
        type: "beca",
        institution: "Santander Universidades & Openbank México",
        area: "academia",
        areaLabel: "Academia & Investigación",
        reward: "$4,000 MXN (apoyo único para equipo tecnológico) + cursos IA",
        modality: "En línea",
        deadline: "2026-07-05",
        description: "Apoyo económico único de $4,000 MXN para adquisición de equipo tecnológico, más acceso gratuito a cursos especializados en Inteligencia Artificial (ChatGPT, DALL-E, Google IA) y competencias digitales. Iniciativa de Santander Universidades y Openbank México.",
        requirements: [
            "Ser alumno regular activo matriculado en Licenciatura o TSU.",
            "Completar el registro en el portal oficial de Santander Open Academy.",
            "Registrarse antes del 5 de julio de 2026."
        ],
        url: "https://app.santanderopenacademy.com/es/program/openbank-tech-manutencion"
    },
    {
        id: "santander-skills-for-work-2026",
        title: "Curso Santander | Skills for Work 2026",
        type: "beca",
        institution: "Santander Open Academy & Coursera",
        area: "academia",
        areaLabel: "Academia & Investigación",
        reward: "Acceso gratuito a 80+ cursos en Coursera por 12 meses • Incluye Google UX Design Professional Certificate",
        modality: "En línea",
        deadline: "2026-08-04",
        description: "50,000 plazas gratuitas de Santander en colaboración con Coursera. Incluye el Google UX Design Professional Certificate y más de 80 cursos en IA, análisis de datos, liderazgo, comunicación y pensamiento crítico. Acceso completo al catálogo de Coursera durante 12 meses.",
        requirements: [
            "Ser mayor de 18 años.",
            "Residir en Argentina, Brasil, Chile, Colombia, Alemania, México, Perú, Portugal, España, Reino Unido, Estados Unidos o Uruguay.",
            "Registrarse en Santander Open Academy y aplicar antes del 4 de agosto de 2026.",
            "Completar la evaluación de habilidades en la plataforma."
        ],
        url: "https://app.santanderopenacademy.com/es/program/skills-for-work-2026"
    },
    {
        id: "creativa-gdl-2026",
        title: "Creativa GDL 2026 | Programa de Incubación Creativa",
        type: "concurso",
        institution: "Gobierno de Guadalajara - Dirección de Emprendimiento",
        area: "arte",
        areaLabel: "Arte & Cultura",
        reward: "$200,000 MXN + incubación y aceleración",
        modality: "Presencial (Guadalajara)",
        deadline: "2026-08-09",
        description: "Programa de incubación de alto impacto para industrias creativas y digitales. Selecciona 30 proyectos en etapa temprana para recibir mentoría, financiamiento, alianzas estratégicas y proyección internacional. Clústers: Animación, Diseño y Arte Digital; Producción Audiovisual y Musical; Realidad Virtual y Aumentada; Videojuegos; Creación de Contenido.",
        requirements: [
            "Proyecto en etapa inicial o con prototipo (MVP) listo para validar.",
            "Equipo interdisciplinario (diseño, tecnología, negocios, arte, marketing).",
            "Propuesta original e innovadora en industrias creativas y digitales.",
            "Registrarse en el sitio oficial antes del 9 de agosto de 2026 a las 23:59 h."
        ],
        url: "https://www.creativagdl.com/"
    },
    {
        id: "convocatoria-docente-bid26",
        title: "X Encuentro BID de Enseñanza y Diseño | Convocatoria Académica",
        type: "concurso",
        institution: "Bienal Iberoamericana de Diseño (BID) & DIMAD",
        area: "academia",
        areaLabel: "Academia & Investigación",
        reward: "Ponencia en Foro Académico + Publicación en catálogo + Certificado de participación",
        modality: "Híbrido (Madrid, España / En línea)",
        deadline: "2026-07-15",
        description: "Convocatoria dirigida a docentes, investigadores y centros formativos de Iberoamérica para participar en el X Encuentro BID de Enseñanza y Diseño y presentar sus investigaciones en el Foro Académico (FABID26). Con foco en el diseño como una 'práctica situada' y su relación con el territorio, tecnología e impacto público.",
        requirements: [
            "Ser docente, investigador o representante de un centro formativo de Iberoamérica.",
            "Presentar propuestas de comunicación oral o poster digital sobre investigación, innovación docente o transferencia.",
            "Los proyectos deben alinearse a los ejes temáticos del encuentro (diseño y tecnología, resiliencia, territorio, etc.).",
            "Realizar la inscripción y envío de propuestas a través del sitio oficial de la BID."
        ],
        url: "https://bid-dimad.com/"
    },
    {
        id: "concurso-joyeria-2026",
        title: "36° Concurso Internacional de Diseño de Joyería",
        type: "concurso",
        institution: "Cámara de Joyería de Jalisco (CEDIJ)",
        area: "arte",
        areaLabel: "Arte & Cultura",
        reward: "Reconocimiento nacional, difusión y premios de patrocinadores",
        modality: "Híbrido (Registro en línea + Envío físico)",
        deadline: "2026-08-21",
        description: "Prestigioso certamen que convoca a diseñadores, joyeros y estudiantes a postular piezas de joyería originales inspiradas en el tema rector 'Coexistir'. Esta edición, basada en macrotendencias 2027, invita a reflexionar sobre la individualidad, la identidad y la vida en comunidad.",
        requirements: [
            "Participación abierta a diseñadores, joyeros, estudiantes y entusiastas del diseño.",
            "Desarrollar una pieza de joyería terminada bajo el concepto y temática rectora 'Coexistir'.",
            "Realizar el registro digital a través de la plataforma y coordinar el envío de la pieza física terminada.",
            "No se aceptarán propuestas meramente digitales o enviadas de forma extemporánea."
        ],
        url: "https://camaradejoyeria.com.mx/servicios/concurso/"
    },
    {
        id: "concurso-asipi-disenos-2026",
        title: "Concurso Los Mejores Diseños Industriales 2026",
        type: "concurso",
        institution: "Asociación Interamericana de la Propiedad Intelectual (ASIPI)",
        area: "tecnologia",
        areaLabel: "Tecnología & Ciencia",
        reward: "Reconocimiento internacional, difusión y ceremonia de premiación en Santiago de Chile",
        modality: "En línea",
        deadline: "2026-10-01",
        description: "Certamen panamericano que busca reconocer y promover la protección de los diseños industriales como herramientas estratégicas clave para la innovación, la competitividad y la generación de valor en la región.",
        requirements: [
            "Ser persona física o jurídica residente de algún país del continente americano con miembros activos en ASIPI.",
            "Contar con una solicitud en trámite o un registro vigente de diseño industrial ante la oficina nacional de propiedad industrial correspondiente.",
            "La participación es gratuita y se realiza digitalmente a través del portal oficial del concurso.",
            "Cumplir con los lineamientos técnicos del reglamento oficial de ASIPIDISEÑOS 2026."
        ],
        url: "https://asipi.org/concurso-disenos-industriales-2026/?lang=es"
    },
    {
        id: "muuto-design-contest-003",
        title: "Muuto Design Contest 003",
        type: "concurso",
        institution: "Muuto",
        area: "arte",
        areaLabel: "Arte & Cultura",
        reward: "1er lugar: €5,000 + posible producción • 2° y 3er: €2,500 c/u",
        modality: "En línea",
        deadline: "2026-10-12",
        description: "Concurso abierto de diseño organizado por la marca danesa Muuto. Tema 'Grounded in Nature': accesorios y mobiliario pequeño para exteriores o espacios de transición interior-exterior. Busca piezas funcionales y escultóricas con esencia del diseño escandinavo que desafíen las nociones tradicionales. El ganador verá su diseño potencialmente producido por Muuto.",
        requirements: [
            "Tener formación o experiencia en diseño, arquitectura o campos afines.",
            "Enviar propuesta en PDF (máx. 20 MB) con renders, fotografías de modelos, visualizaciones de contexto y consideraciones de escalabilidad.",
            "La propuesta debe armonizar con el universo Muuto y su estética escandinava.",
            "Enviar a designcontest@muuto.com antes del 12 de octubre de 2026."
        ],
        url: "https://www.muuto.com/design-contest/"
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
const statAbiertas = document.getElementById('stat-abiertas');
const statConcursos = document.getElementById('stat-concursos');
const statBecas = document.getElementById('stat-becas');
const statTotal = document.getElementById('stat-total');

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
    filterStatus.value = 'open';
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
    const d = new Date();
    const todayStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

    const abiertas = OPPORTUNITIES_DATA.filter(o => o.deadline >= todayStr).length;
    const concursosActivos = OPPORTUNITIES_DATA.filter(o => o.type === 'concurso' && o.deadline >= todayStr).length;
    const becasActivas = OPPORTUNITIES_DATA.filter(o => o.type === 'beca' && o.deadline >= todayStr).length;
    const total = OPPORTUNITIES_DATA.length;

    statAbiertas.textContent = abiertas;
    statConcursos.textContent = concursosActivos;
    statBecas.textContent = becasActivas;
    statTotal.textContent = total;
}

// Format Deadline for user display
function formatDisplayDate(dateString) {
    const parts = dateString.split('-');
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

function isClosingSoon(dateString, todayStr, futureStr) {
    return dateString > todayStr && dateString <= futureStr;
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
    
    const d = new Date();
    const todayStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    d.setDate(d.getDate() + 30);
    const futureStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    
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
            if (opp.deadline < todayStr) return false;
        } else if (statusFilter === 'closing') {
            if (!isClosingSoon(opp.deadline, todayStr, futureStr)) return false;
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
        
        const isClosingSoon = opp.deadline > todayStr && opp.deadline <= futureStr;
        const isClosingToday = opp.deadline === todayStr;
        let deadlineClass = 'info-value';
        let alertIcon = '';
        if (isClosingToday) {
            deadlineClass = 'info-value deadline-today';
            alertIcon = '<i class="fa-solid fa-circle-exclamation"></i> ';
        } else if (isClosingSoon) {
            deadlineClass = 'info-value deadline-alert';
            alertIcon = '<i class="fa-solid fa-triangle-exclamation"></i> ';
        }
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
                        <span class="${deadlineClass}">${alertIcon}${displayDate}</span>
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
                        <span class="${deadlineClass}">${alertIcon}${displayDate}</span>
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
