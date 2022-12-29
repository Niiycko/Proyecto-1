$(document).ready(function() {
    // CAMBIO DE HEADER.
    $(window).on('scroll', function() {
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente');
        }
    })
    // ACCIONAMIENTO DEL MENU LATERAL
    $('#burger').click(function() { // PARA EJECUTAR FUNCION.
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto'); // QUITAR Y PONER LA CLASE.
        // SI TIENE LA CLASE LA QUITA SINO LA PONE.
      })
      // SMOOTH SCROLL
      $('a').on('click', function() {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
      })
})


