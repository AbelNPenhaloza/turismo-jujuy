$(document).ready(function() {
    // 1. FILTRADO DINÁMICO (Punto 17)
    $('.filter-btn').on('click', function() {
        $('.filter-btn').removeClass('active btn-primary').addClass('btn-outline-primary');
        $(this).addClass('active btn-primary').removeClass('btn-outline-primary');

        const filter = $(this).data('filter');
        if (filter === 'todas') {
            $('.agencia-item').hide().fadeIn(500);
        } else {
            $('.agencia-item').hide();
            $(`.agencia-item[data-categoria="${filter}"]`).fadeIn(500);
        }
    });

    // 2. RATING INTERACTIVO (Punto 23)
    $(document).on('click', '.rating-star', function() {
        const val = $(this).data('value');
        const agency = $(this).parent().data('agency');
        $(this).parent().find('.rating-star').removeClass('selected bi-star-fill').addClass('bi-star');
        $(this).addClass('selected bi-star-fill').removeClass('bi-star');
        $(this).nextAll().addClass('selected bi-star-fill').removeClass('bi-star');
        alert(`⭐ ¡Gracias! Calificaste a "${agency}" con ${val} estrellas.`);
    });

    // 3. FLIP PARA MÓVILES (Punto 22)
    $('.agencia-flip-card').on('click', function() {
        if ($(window).width() < 992) {
            $(this).toggleClass('is-flipped');
        }
    });
});