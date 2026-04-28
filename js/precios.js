$(document).ready(function() {
    // Inicializar Tooltips de Bootstrap (Punto 32)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Hover dinámico con jQuery (Punto 31)
    $('.table-hover tbody tr').hover(
        function() {
            $(this).find('.btn').addClass('shadow-sm scale-up');
        },
        function() {
            $(this).find('.btn').removeClass('shadow-sm scale-up');
        }
    );
});