
'use strict';

$(function() {

	
	$("input[type='password'][data-eye]").each(function(i) {
		var $this = $(this),
			id = 'eye-password-' + i,
			el = $('#' + id);

		$this.wrap($("<div/>", {
			style: 'position:relative',
			id: id
		}));

		$this.css({
			paddingRight: 60
		});
		$this.after($("<div/>", {
			html: 'Mostrar',
			class: 'btn btn-primary btn-sm',
			id: 'passeye-toggle-'+i,
		}).css({
				position: 'absolute',
				right: 10,
				top: ($this.outerHeight() / 2) - 12,
				padding: '2px 7px',
				fontSize: 12,
				cursor: 'pointer',
		}));

		$this.after($("<input/>", {
			type: 'hidden',
			id: 'passeye-' + i
		}));

		var invalid_feedback = $this.parent().parent().find('.invalid-feedback');

		if(invalid_feedback.length) {
			$this.after(invalid_feedback.clone());
		}

		$this.on("keyup paste", function() {
			$("#passeye-"+i).val($(this).val());
		});
		$("#passeye-toggle-"+i).on("click", function() {
			if($this.hasClass("ocultar")) {
				$this.attr('type', 'password');
				$this.removeClass("show");
				$(this).removeClass("btn-outline-primary");
			}else{
				$this.attr('type', 'text');
				$this.val($("#passeye-"+i).val());				
				$this.addClass("show");
				$(this).addClass("btn-outline-primary");
			}
		});
	});

	$(".my-login-validation").submit(function() {
		var form = $(this);
        if (form[0].checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
		form.addClass('was-validated');
	});
});




document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = $("#email").val();
    var pass = $("#password").val();
    

    var storedEmail = localStorage.getItem("correo");
    var storedPassword = localStorage.getItem("contraseña");

    if (email === storedEmail && pass === storedPassword) {
        console.log("Redirecting to /hola.html");
        window.location.href = "/hola.html";
    } else {
        alert("Datos incorrectos");
    }
});


/* document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma convencional
	$("#login-form").submit(function(event) {
		var email = $("#email").val();
		var pass = $("#password").val();
	
		if (email === "sergiocasarrubiasherrera9@gmail.com" && pass === "1234") {
			console.log("Redirecting to /hola.html");
			window.location.href = "/hola.html";
		} else {
			alert("Datos incorrectos");
			event.preventDefault();
		}
	});
});
  */