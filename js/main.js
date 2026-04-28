$(document).ready(function() {
    // Animación Inicial del Hero
    const heroElements = $('.hero-eyebrow, #hero-titulo, .hero-subtitulo, .hero-acciones');
    heroElements.css('opacity', 0);
    
    $('.hero-eyebrow').animate({ opacity: 1 }, 1000);
    $('#hero-titulo').delay(400).animate({ opacity: 1 }, 1000);
    $('.hero-subtitulo').delay(800).animate({ opacity: 1 }, 1000);
    $('.hero-acciones').delay(1200).animate({ opacity: 1 }, 1000);

    // Efecto Zoom en Cards de Destinos
    $('.destino-card').hover(
        function() {
            $(this).find('.zoom-img').css('transform', 'scale(1.1)');
            $(this).find('.card-overlay').css('opacity', '1');
        },
        function() {
            $(this).find('.zoom-img').css('transform', 'scale(1)');
            $(this).find('.card-overlay').css('opacity', '0');
        }
    );

    // Animación de Contadores Estadísticos
    $('.counter').each(function() {
        const $this = $(this);
        const countTo = $this.data('target');
        
        $({ countNum: 0 }).animate({ countNum: countTo }, {
            duration: 2500,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
});