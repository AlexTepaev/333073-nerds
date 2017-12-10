
            var link = document.querySelector(".btn__map");

			var popup = document.querySelector(".modal");
			var close = popup.querySelector(".modal__close");
			
			var storage = localStorage.getItem("name");

			var input = document.querySelector("input#name")
			var submit = document.querySelector("button.btn__feedback");


        	submit.addEventListener("click", (e) => {
                e.preventDefault();
            	if(input.value === "") {
        		input.classList.add("apply__shake");

    		}    
		});

		


			link.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.add("modal__show");

			if (storage) {
      			name.value = storage;
      			email.focus();
    		} else {
    		name.focus();
    		}
		    });

	        close.addEventListener("click", function (evt) {
	        evt.preventDefault();
	        popup.classList.remove("modal__show");
	      
	        })

	    
    		

    		window.addEventListener("keydown", function (evt) {
    				if (evt.keyCode === 27) {
      				if (popup.classList.contains("modal__show")) {
       			 popup.classList.remove("modal__show");
      			}
    		}
  			});

