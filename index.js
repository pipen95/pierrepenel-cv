
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

		$(".js__open--4,.js__close--4").click(function() {
			var open4 = $(".js__open--4");
			var close4 = $(".js__close--4");
			var menu4 = $(".js__block--4");
			menu4.slideToggle(400);
			if (open4.hasClass("ghost")) {
				open4.removeClass("ghost");
				close4.addClass("ghost");
			} else {
				close4.removeClass("ghost");
				open4.addClass("ghost");
			}
		});

		$(".js__open--5,.js__close--5").click(function() {
			var open5 = $(".js__open--5");
			var close5 = $(".js__close--5");
			var menu5 = $(".js__block--5");
			menu5.slideToggle(500);
			if (open5.hasClass("ghost")) {
				open5.removeClass("ghost");
				close5.addClass("ghost");
			} else {
				close5.removeClass("ghost");
				open5.addClass("ghost");
			}
		});
		$(".js__open--6,.js__close--6").click(function() {
			var open6 = $(".js__open--6");
			var close6 = $(".js__close--6");
			var menu6 = $(".js__block--6");
			menu6.slideToggle(600);
			if (open6.hasClass("ghost")) {
				open6.removeClass("ghost");
				close6.addClass("ghost");
			} else {
				close6.removeClass("ghost");
				open6.addClass("ghost");
			}
		});
	
	})();
	

