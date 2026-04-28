$(document).ready(function() {
    // 1. Filtros Dinámicos (Punto 17)
    $('.filter-btn').on('click', function() {
        const filterValue = $(this).data('filter');
        
        // Cambiar estado activo de los botones
        $('.filter-btn').removeClass('btn-primary').addClass('btn-outline-primary');
        $(this).removeClass('btn-outline-primary').addClass('btn-primary');

        if(filterValue === 'all') {
            $('.gallery-item').fadeIn(400); // Uso de fadeIn para suavidad
        } else {
            $('.gallery-item').hide(); // Ocultar todos (.hide)
            $(`.gallery-item[data-category="${filterValue}"]`).show(400); // Mostrar filtrados (.show)
        }
    });

    // 2. Inicializar Tooltips de Bootstrap (Punto 32)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // 3. Efecto de Hover Dinámico en Tablas (Punto 31)
    $('tbody tr').hover(
        function() { $(this).addClass('table-info'); },
        function() { $(this).removeClass('table-info'); }
    );
});