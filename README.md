Documentación Técnica: Proyecto Turismo Jujuy Materia: Programación Web - **APU** **2008**

Institución: Facultad de Ingeniería - UNJu

Alumno: Abel Nestor Peñaloza

# 🏔️ Turismo Jujuy - Sitio Web Interactivo y Seguro

### 🔗 Enlaces del Proyecto

* **🌐 Sitio Web en Vivo:** [visitajujuy.netlify.app](https://turismo-jujuy.netlify.app/)
* **💻 Repositorio en GitHub:** [github.com/tu-usuario/turismo-jujuy](https://github.com/AbelNPenhaloza/turismo-jujuy)
* **🎥 Video de Presentación:** [Ver en YouTube](https://youtu.be/JM9LtdHVY0A)

---

## 📌 Resumen del Proyecto
Este sitio web es una plataforma integral de promoción turística...

## Arquitectura y Decisiones de Diseño

1.1 Estructura del Proyecto Se optó por una arquitectura de archivos modular para facilitar el mantenimiento y la escalabilidad del sitio. Los recursos se organizan de la siguiente manera:

/css: Separación de estilos por responsabilidad. componentes.css contiene el layout base y el Mega Menú, mientras que dark-mode.css gestiona exclusivamente las variables de tema.

/js: Segmentación de lógica. componentes.js maneja eventos globales (Navbar, Modo Oscuro, Phishing) y archivos específicos como agencias.js manejan la lógica particular de cada sección.

/destinos: Directorio independiente para las páginas de detalle, permitiendo un crecimiento organizado de los puntos turísticos.

1.2 Diseño Responsivo (Bootstrap 5) Se utilizó el Sistema de Grillas (Grid System) de Bootstrap 5 basado en Flexbox.

Estrategia: Mobile First.

Implementación: Uso de clases como .col-12 .col-md-6 .col-lg-4 para garantizar que el contenido se adapte fluidamente de 1 columna en móviles a 3 columnas en pantallas de escritorio.

## Implementación de Componentes e Interactividad

2.1 Navegación y Mega Menú Se extendió el componente .navbar de Bootstrap para crear un Mega Menú personalizado.

Técnica: Uso de contenedores .container dentro del dropdown para organizar los destinos por regiones (Quebrada, Puna, Yungas) en columnas, mejorando la usabilidad y el acceso a la información profunda.

2.2 Manipulación del **DOM** (jQuery) Se integró la librería jQuery para añadir capas de interactividad que superan las capacidades nativas de **CSS**:

Contadores Animados: Uso de la función prop() y animate() para incrementar números desde 0 hasta el valor objetivo al cargar la sección.

Filtros de Contenido: Implementación de .hide() y .fadeIn() para una transición suave al filtrar agencias por categoría.

Sistema de Estrellas: Captura de eventos click para actualizar dinámicamente las clases de los iconos y persistir la valoración del usuario de forma visual.

2.3 Efecto Flip 3D Para la sección de Agencias, se desarrolló un efecto de rotación en el eje Y.

**CSS**: Uso de perspective, backface-visibility: hidden y transform-style: preserve-3d.

Trigger: Se configuró un activador por hover en desktop y mediante jQuery toggle para garantizar la funcionalidad en dispositivos táctiles.

## Optimización y Rendimiento (Sprite CSS)

Siguiendo las buenas prácticas de optimización web, se implementó la técnica de Sprite **CSS** para los iconos de redes sociales y botones personalizados.

Beneficio: Reducción de múltiples peticiones **HTTP** a una sola descarga de imagen.

Técnica: Definición de una imagen de fondo común y desplazamiento mediante background-position para mostrar el fragmento correspondiente de la imagen sprite.

## Seguridad Educativa (Módulo de Phishing)

El sitio incluye un módulo de concientización sobre ciberseguridad mediante un simulador de Phishing.

Componente: Un Modal de Bootstrap activado por un botón de *Seguridad*.

Lógica: Mediante jQuery, se presentan escenarios donde el usuario debe discernir entre una **URL** legítima y una maliciosa.

Feedback: Se utilizan alertas de Bootstrap (.alert-success / .alert-danger) para reforzar el aprendizaje sin recolectar ni poner en riesgo datos reales.

## Validación y Accesibilidad

5.1 Validación de Formularios Se implementó una validación dual:

**HTML5**: Atributos required, type=*email* y pattern.

jQuery: Validación en tiempo real mediante el evento .on('input') que verifica la longitud y formato de los datos, aplicando clases de Bootstrap (is-valid / is-invalid) antes del envío.

5.2 Estándares de Accesibilidad Uso de Variables **CSS** para garantizar un contraste de color consistente, especialmente en el Modo Oscuro.

Atributos **ARIA** en componentes interactivos como modales y carruseles.

Semántica clara con etiquetas nav, main, section y footer.

## Conclusión

El desarrollo integra de manera armoniosa el diseño visual con la robustez técnica. El uso de Bootstrap permite un despliegue rápido y estandarizado, mientras que jQuery proporciona la flexibilidad necesaria para crear una experiencia de usuario rica, dinámica y educativa, cumpliendo con todos los requerimientos académicos del año **2026**.