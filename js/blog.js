$(document).ready(function() {
    // 1. Filtros de Categoría (Punto 35) 
    $('#filtros-blog .btn').on('click', function() {
        $('#filtros-blog .btn').removeClass('active btn-primary').addClass('btn-outline-primary');
        $(this).addClass('active btn-primary').removeClass('btn-outline-primary');

        const filter = $(this).data('filter');

        if (filter === 'todos') {
            $('.blog-item').fadeIn(500); // 
        } else {
            $('.blog-item').hide(); // 
            $(`.blog-item[data-category="${filter}"]`).fadeIn(500);
        }
    });

    // 2. Animaciones al Scroll (Punto 36) [cite: 36]
    function checkScroll() {
        $('.animate-on-scroll').each(function() {
            const pos = $(this).offset().top;
            const winPos = $(window).scrollTop() + $(window).height() - 100;
            if (pos < winPos) {
                $(this).addClass('animate__animated animate__fadeInUp').css('opacity', '1');
            }
        });
    }
    $(window).on('scroll load', checkScroll);

    // 3. Formulario con Sanitización (Punto 72) 
    $('#comentarioForm').on('submit', function(e) {
        e.preventDefault();
        
        // Sanitización simple: eliminar tags HTML para prevenir XSS básico
        let rawText = $('#commText').val();
        let cleanText = rawText.replace(/<[^>]*>?/gm, '');
        
        if(rawText !== cleanText) {
            $('#commText').val(cleanText);
            alert('Se han removido caracteres no permitidos por seguridad.');
        }

        alert('✅ ¡Gracias! Tu comentario está siendo moderado.');
        this.reset();
    });
});