
	// Mobile navigation
	(()=>{
		$(".js__toggle").click(function() {
			var ul = $(".js__menu");
			ul.slideToggle(400);
			}
		);

		$(".js__open--1,.js__close--1").click(function() {
			var open1 = $(".js__open--1");
			var close1 = $(".js__close--1");
			var menu1 = $(".js__block--1");
			menu1.slideToggle(400);
			if (open1.hasClass("ghost")) {
				open1.removeClass("ghost");
				close1.addClass("ghost");
			} else {
				close1.removeClass("ghost");
				open1.addClass("ghost");
			}
		});

		$(".js__open--2,.js__close--2").click(function() {
			var open2 = $(".js__open--2");
			var close2 = $(".js__close--2");
			var menu2 = $(".js__block--2");
			menu2.slideToggle(400);
			if (open2.hasClass("ghost")) {
				open2.removeClass("ghost");
				close2.addClass("ghost");
			} else {
				close2.removeClass("ghost");
				open2.addClass("ghost");
			}
		});

		$(".js__open--3,.js__close--3").click(function() {
			var open3 = $(".js__open--3");
			var close3 = $(".js__close--3");
			var menu3 = $(".js__block--3");
			menu3.slideToggle(400);
			if (open3.hasClass("ghost")) {
				open3.removeClass("ghost");
				close3.addClass("ghost");
			} else {
				close3.removeClass("ghost");
				open3.addClass("ghost");
			}
		});
	
	})();
	

