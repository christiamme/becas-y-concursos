# Registro de Sesión - Proyecto Concursos & Becas (LDI)

Este documento contiene la bitácora y el progreso de las acciones realizadas durante la sesión de desarrollo actual del proyecto.

## 📅 Fecha y Hora de Registro
* **Fecha:** 18 de junio de 2026
* **Hora de inicio:** 11:30 AM (Local)

---

## 🛠️ Acciones Realizadas

### 1. Inicialización del Espacio de Trabajo
* Se seleccionó y preparó la ruta del proyecto en **[concursos_y_becas](file:///C:/Users/HP/Documents/Code/concursos_y_becas/)**.
* Se definió que el proyecto será un **sitio web estático interactivo** para maximizar compatibilidad y agilidad en el desarrollo.

### 2. Creación del Front-End Core (Front y Estilos)
* Se estructuró **[index.html](file:///C:/Users/HP/Documents/Code/concursos_y_becas/index.html)**:
  - Header adaptativo con sistema de pestañas (Filtro por Todas, Becas, Concursos y Favoritos).
  - Sección Hero para búsquedas textuales y filtros avanzados por Área académica y Estado de vigencia.
  - Sección de Estadísticas con contadores de convocatorias activas.
  - Grid de oportunidades autoadaptable y switch de vistas (cuadrícula/lista).
  - Modal interactivo de detalles enriquecido.
* Se estilizó **[style.css](file:///C:/Users/HP/Documents/Code/concursos_y_becas/style.css)**:
  - Tema oscuro premium (Glassmorphism con filtros `backdrop-filter`).
  - Efectos neon de brillo degradado en el fondo (`bg-glow`).
  - Micro-animaciones al pasar el mouse por las tarjetas, botones y acciones de favorito.
  - Diseño 100% responsivo para móviles y tabletas.

### 3. Implementación de la Lógica de Negocio
* Se programó **[app.js](file:///C:/Users/HP/Documents/Code/concursos_y_becas/app.js)**:
  - Base de datos local simulada con becas y concursos reales vinculados a LDI.
  - Buscador inteligente en tiempo real y lógica de filtros cruzados.
  - Manejo de favoritos del usuario persistidos mediante `localStorage`.
  - Animación de carga y vistas alternativas (lista compacta vs. cuadrícula).

### 4. Documentación del Proyecto
* Se redactó **[GEMINI.md](file:///C:/Users/HP/Documents/Code/concursos_y_becas/GEMINI.md)**, detallando que la plataforma está dirigida especialmente a recopilar convocatorias valiosas para la carrera de **Licenciatura en Diseño (LDI)**.
* Se estructuró **[HUB.md](file:///C:/Users/HP/Documents/Code/concursos_y_becas/HUB.md)** como el mapa de navegación técnica y de dependencias del proyecto.

### 5. Integración de Nuevas Oportunidades
* Se investigó y extrajo la información de la convocatoria del congreso **Intersecciones 2026** desde su sitio web oficial.
* Se agregó la convocatoria a **[app.js](file:///C:/Users/HP/Documents/Code/concursos_y_becas/app.js)** bajo la categoría de `concurso` y el área de `academia`, fijando como límite de entrega extendido el **30 de junio de 2026** (lo que activa la alerta visual de cierre próximo en el sitio).
* Se investigó la convocatoria **The 9th Golden Camellia International Cultural & Creative Design Competition 2026** a través de su publicación oficial de LinkedIn.
* Se integró a la base de datos de oportunidades como `concurso` en el área de `arte` (Arte & Cultura), estableciendo el cierre de inscripciones el **31 de agosto de 2026**.
* Se integró la convocatoria internacional **25th Andreu World International Design Contest** recopilando información de su sitio web oficial. Se catalogó como `concurso` en el área de `arte` (Arte & Cultura), fijando la fecha límite del **16 de septiembre de 2026**.
* Se investigó y cargó la convocatoria **Porada International Design Award 2026** de su sitio web oficial. Se catalogó como `concurso` en el área de `arte` (Arte & Cultura) con fecha límite del **31 de enero de 2027**.

### 6. Depuración y Ordenamiento de Información
* Se removió la **Beca Líderes del Mañana 2026** de la base de datos de oportunidades.
* Se implementó una lógica de ordenamiento ascendente en **[app.js](file:///C:/Users/HP/Documents/Code/concursos_y_becas/app.js)** para organizar todas las oportunidades automáticamente por fecha límite de entrega (cierre más próximo primero).
* Se corrigió la falta de contraste de las opciones de los dropdowns (`select option`) en **[style.css](file:///C:/Users/HP/Documents/Code/concursos_y_becas/style.css)**, forzándolas a adoptar el fondo oscuro secundario y el texto claro para mantener la coherencia con el tema oscuro.

### 7. Rebranding a "Becas & Concursos LDI"
* Se cambió el título de la página en `<title>` de "Becas & Concursos" a **"Becas & Concursos LDI"**.
* Se actualizó el texto del logo en el header a **"Becas&Concursos LDI"**.
* Se modificó el subtítulo del Hero de "innovación, arte y tecnología" a **"innovación, diseño y tecnología"**.
* Se actualizó el tagline del footer a **"Conectando a LDIs con nuevas oportunidades."**.
* Se actualizó el copyright del footer a **"Becas & Concursos LDI"**.

### 8. Integración de Nueva Convocatoria
* Se investigó y agregó la convocatoria **Rebelión Moda Zapopan** desde su sitio web oficial. Se catalogó como `concurso` en el área de `arte` (Arte & Cultura), con fecha límite de registro del **10 de julio de 2026**.
* Se investigó y agregó la convocatoria **James Dyson Award 2026** desde su sitio web oficial. Se catalogó como `concurso` en el área de `tecnologia` (Tecnología & Ciencia), con fecha límite del **15 de julio de 2026**.
* Se investigó y agregó la convocatoria **Premio Nacional de Diseño: Diseña México 2026** desde su sitio web oficial. Se catalogó como `concurso` en el área de `arte` (Arte & Cultura), con fecha límite del **30 de junio de 2026**. Posteriormente se actualizó al **10 de julio de 2026**.
* Se investigó y agregó la convocatoria **Seoul Design Award 2026** desde su sitio web oficial. Se catalogó como `concurso` en el área de `impacto` (Impacto Social), con fecha límite del **30 de junio de 2026**.
* Se investigó y agregó la convocatoria **AAKRUTI Innovation Competition 2026** desde su sitio web oficial. Se catalogó como `concurso` en el área de `tecnologia` (Tecnología & Ciencia), con fecha límite del **15 de septiembre de 2026**.
* Se investigó y agregó la convocatoria **IE Immersive Design Competition 1st Edition 2026** desde su sitio web oficial. Se catalogó como `concurso` en el área de `tecnologia` (Tecnología & Ciencia), con fecha límite del **25 de junio de 2026**.
* Se investigó y agregó la convocatoria **Taiwan International Student Design Competition (TISDC) 2026** desde su sitio web oficial. Se catalogó como `concurso` en el área de `arte` (Arte & Cultura), con fecha límite del **6 de julio de 2026**.
* Se investigó y agregó la convocatoria **Design Intelligence Award (DIA) 2026** desde su sitio web oficial. Se catalogó como `concurso` en el área de `tecnologia` (Tecnología & Ciencia), con fecha límite del **1 de septiembre de 2026**.
* Se investigó y agregó la convocatoria **H&M Design Award 2026** desde su sitio web oficial. Se catalogó como `concurso` en el área de `arte` (Arte & Cultura), con fecha límite del **31 de agosto de 2026**.
* Se investigó y agregó la convocatoria **Only Natural Home Competition 2026** desde su sitio web oficial. Se catalogó como `concurso` en el área de `impacto` (Impacto Social), con fecha límite del **30 de junio de 2026**.
* Se investigó y agregó la **Beca Santander Apoyo a la Manutención 2026** desde su sitio web oficial. Se catalogó como `beca` en el área de `academia` (Academia & Investigación), con fecha límite del **20 de julio de 2026**.
* Se investigó y agregó la **Beca Santander Openbank Tech Manutención 2026** desde su sitio web oficial. Se catalogó como `beca` en el área de `academia` (Academia & Investigación), con fecha límite del **5 de julio de 2026**.
* Se investigó y agregó el **Curso Santander | Skills for Work 2026** desde su sitio web oficial. Se catalogó como `beca` en el área de `academia` (Academia & Investigación), con fecha límite del **4 de agosto de 2026**. Incluye el **Google UX Design Professional Certificate** y más de 80 cursos en Coursera durante 12 meses.
* Se eliminó la **Beca Santander Estudios | Graduados** de `app.js` por solicitud del usuario.
* Se investigó y agregó la convocatoria docente **X Encuentro BID de Enseñanza y Diseño | Convocatoria Académica** desde su sitio oficial. Se catalogó como `concurso` en el área de `academia` (Academia & Investigación), con fecha límite del **15 de julio de 2026**.
* Se investigó y agregó el **36° Concurso Internacional de Diseño de Joyería** de la Cámara de Joyería de Jalisco desde su sitio web oficial. Se catalogó como `concurso` en el área de `arte` (Arte & Cultura), con fecha límite del **21 de agosto de 2026**.
* Se investigó y agregó el **Concurso Los Mejores Diseños Industriales 2026** de la Asociación Interamericana de la Propiedad Intelectual (ASIPI) desde su sitio oficial. Se catalogó como `concurso` en el área de `tecnologia` (Tecnología & Ciencia), con fecha límite del **1 de octubre de 2026**.
* Se investigó y agregó **Creativa GDL 2026 | Programa de Incubación Creativa** desde su sitio web oficial. Se catalogó como `concurso` en el área de `arte` (Arte & Cultura), con fecha límite del **9 de agosto de 2026**. Premio de $200,000 MXN para proyectos de industrias creativas y digitales.
* Se investigó y agregó **Muuto Design Contest 003** desde su sitio web oficial. Se catalogó como `concurso` en el área de `arte` (Arte & Cultura), con fecha límite del **12 de octubre de 2026**. Premio de €5,000 + posible producción para el ganador.
* Se cambió el filtro de estado predeterminado a "Abiertas" en la carga inicial (`filterStatus.value = 'open'`) para ocultar convocatorias vencidas sin eliminarlas.
* Se reemplazó la fecha hardcodeada `2026-06-18` por `new Date()` en `isClosingSoon()` y en el filtro `'open'`, para que use la fecha real del navegador y las convocatorias vencidas se oculten correctamente.










