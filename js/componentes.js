// 1. Detección inmediata (Evita parpadeo blanco)
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode');
}

$(document).ready(function() {
    const $themeBtn = $('#darkModeToggle');
    const $body = $('body');
    const $menu = $('#main-menu');

    // 2. Lógica de Icono Dark Mode (Punto 55) [cite: 55]
    function updateButtonStyle() {
        if ($body.hasClass('dark-mode')) {
            $themeBtn.html('<i class="bi bi-sun-fill"></i>');
        } else {
            $themeBtn.html('<i class="bi bi-moon-stars"></i>');
        }
    }
    updateButtonStyle();

    // 3. Evento click para Dark Mode
    $themeBtn.on('click', function(e) {
        e.preventDefault();
        $body.toggleClass('dark-mode');
        localStorage.setItem('theme', $body.hasClass('dark-mode') ? 'dark' : 'light');
        updateButtonStyle();
    });

    // 4. Lógica Menú Móvil Responsivo (Punto 10) [cite: 10]
    $('.menu-toggle').on('click', function() {
        $menu.toggleClass('show').hide().slideToggle();
    });

    $(window).on('resize', function() {
        if ($(window).width() >= 992) {
            $menu.removeAttr('style').removeClass('show');
        }
    });

    // 5. Lógica de Phishing (Punto 37, 51 y 52) [cite: 37, 51, 52]
    $(document).on('click', '.btn-check-phish', function(e) {
        e.preventDefault();
        
        // jQuery lee data-valid como booleano automáticamente 
        const isFraudulent = $(this).data('valid'); 
        const $resultDiv = $('#phish-result');

        // Limpiar estados y quitar d-none para permitir la animación [cite: 26, 52]
        $resultDiv.removeClass('d-none alert-success alert-danger').hide();

        if (String(isFraudulent) === "true") {
            // Usuario identifica señal de fraude (.xyz) [cite: 50, 51]
            $resultDiv.addClass('alert-success')
                       .html('<i class="bi bi-check-circle-fill me-2"></i><strong>¡Correcto!</strong> El dominio ".xyz" es una señal de fraude.');
        } else {
            // Usuario elige link seguro (.com.ar) [cite: 49, 51]
            $resultDiv.addClass('alert-danger')
                       .html('<i class="bi bi-exclamation-triangle-fill me-2"></i><strong>Incorrecto.</strong> El sitio ".com.ar" es el oficial.');
        }

        // Feedback visual con efecto jQuery 
        $resultDiv.fadeIn(400);
    });

    // Limpiar resultado al cerrar el modal (Punto 27) [cite: 27, 45]
    $('#modalPhishing').on('hidden.bs.modal', function () {
        $('#phish-result').addClass('d-none').html('');
    });
});