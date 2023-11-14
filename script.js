var swiper = new Swiper( ".mySwiper",{
    slidesPerView:1, 
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickeable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
    
});

var swiper = new Swiper( ".mySwiper-2", {
    slidesPerView:3, 
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    brekpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        },
    }
});

let tabInouts = document.querySelectorAll(".tabinput");

tabInouts.forEach(function(input) {
    input.addEventListener('change', function() {
        let id = input.getAttribute('aria-valuemax');
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    });
});

// Validación de formulario

function validarFormulario() {
    console.log('Validando formulario...');
    var nombre = document.getElementById('firstname').value;
    var apellido = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var dirección = document.getElementById('address').value;
    var ciudad = document.getElementById('city').value;
    var codigopostal = document.getElementById('zipcode').value;
    var teléfono = document.getElementById('phone').value;
    var mensaje = document.getElementById('message').value;

    
    // Con esto se valida el formulario

    if (nombre === '') {
        alert('Por favor, ingrese su nombre.');
        document.getElementById('firstname').classList.add('invalido');
        return;
    } else {
        document.getElementById('firstname').classList.remove('invalido');
    }

    if (apellido === '') {
        alert('Por favor, ingrese su apellido.');
        document.getElementById('lastname').classList.add('invalido');
        return;
    } else {
        document.getElementById('lastname').classList.remove('invalido');
    }

    if (email === '') {
        alert('Por favor, ingrese su email.');
        document.getElementById('email').classList.add('invalido');
        return;
    } else {
        document.getElementById('email').classList.remove('invalido');
    }

    if (dirección === '') {
        alert('Por favor, ingrese su dirección.');
        document.getElementById('address').classList.add('invalido');
        return;
    } else {
        document.getElementById('address').classList.remove('invalido');
    }

    if (ciudad === '') {
        alert('Por favor, ingrese su ciudad.');
        document.getElementById('city').classList.add('invalido');
        return;
    } else {
        document.getElementById('city').classList.remove('invalido');
    }

    if (codigopostal === '') {
        alert('Por favor, ingrese su código postal.');
        document.getElementById('zipcode').classList.add('invalido');
        return;
    } else {
        document.getElementById('zipcode').classList.remove('invalido');
    }

    if (teléfono === '') {
        alert('Por favor, ingrese su teléfono.');
        document.getElementById('phone').classList.add('invalido');
        return;
    } else {
        document.getElementById('phone').classList.remove('invalido');
    }

    if (mensaje === '') {
        alert('Por favor, ingrese su mensaje.');
        document.getElementById('message').classList.add('invalido');
        return;
    } else {
        document.getElementById('message').classList.remove('invalido');
    }
    

    // Si todas las validaciones son exitosas, puedes enviar el formulario
    alert('¡Formulario enviado con éxito!'); // Mensaje de éxito
    document.getElementById('reservationForm').submit();
}
