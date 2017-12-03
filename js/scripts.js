
var link = document.querySelector(".btn__map");

			var popup = document.querySelector(".modal");
			var close = popup.querySelector(".modal__close");

			var form = popup.querySelector("form");
			var login = popup.querySelector("[name=name]");

			link.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.add("modal__show");
			login.focus();
		    });

	        close.addEventListener("click", function (evt) {
	        evt.preventDefault();
	        popup.classList.remove("modal__show")
	        })

	        form.addEventListener("submit", function (evt) { if (!login.value) {
      				evt.preventDefault();
      				console.log("Нужно ввести логин и пароль");
    						}
    		});

    		window.addEventListener("keydown", function (evt) {
    				if (evt.keyCode === 27) {
      				if (popup.classList.contains("modal__show")) {
       			 popup.classList.remove("modal__show");
      			}
    		}
  			});