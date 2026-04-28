$(document).ready(function() {
    const $form = $('#contactForm');
    const $inputs = $form.find('input, textarea');
    
    // 1. Validación en tiempo real (Punto 25, 71)
    $inputs.on('input blur', function() {
        validateField($(this));
    });

    function validateField($el) {
        // Sanitización básica: quitar etiquetas HTML (Punto 72)
        let cleanVal = $el.val().replace(/<[^>]*>?/gm, '');
        if ($el.val() !== cleanVal) $el.val(cleanVal);

        if ($el[0].checkValidity()) {
            $el.addClass('is-valid').removeClass('is-invalid');
        } else {
            $el.addClass('is-invalid').removeClass('is-valid');
        }
    }

    // 2. Manejo del Envío con Spinner y Modal (Punto 26, 27)
    $form.on('submit', function(e) {
        e.preventDefault();
        
        // Forzar validación de todos los campos
        $inputs.each(function() { validateField($(this)); });

        if (this.checkValidity()) {
            const $btn = $('#btnSubmit');
            const $spinner = $('#btnSpinner');
            const $btnText = $('#btnText');

            // Estado de carga
            $btn.prop('disabled', true);
            $spinner.removeClass('d-none');
            $btnText.text('Enviando...');

            // Simulación de envío (Punto 26)
            setTimeout(() => {
                $btn.prop('disabled', false);
                $spinner.addClass('d-none');
                $btnText.text('Enviar Consulta');
                
                // Mostrar Modal de Éxito (Punto 27)
                const myModal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
                myModal.show();
                
                // Reiniciar Formulario
                $form[0].reset();
                $inputs.removeClass('is-valid is-invalid');
            }, 2000);
        } else {
            e.stopPropagation();
            $form.addClass('was-validated');
        }
    });
});