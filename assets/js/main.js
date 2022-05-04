(function($) {
	("use strict");
	// Page loading
	$(window).on("load", function() {
		$("#preloader-active").fadeOut("slow");
	});
	/*-----------------
	      Menu Stick
	  -----------------*/
	let header = $(".sticky-bar");
	let win = $(window);
	win.on("scroll", function() {
		let scroll = win.scrollTop();
		if (scroll < 200) {
			header.removeClass("stick");
			$(".header-style-2 .categories-dropdown-active-large").removeClass(
				"open"
			);
			$(".header-style-2 .categories-button-active").removeClass("open");
		} else {
			header.addClass("stick");
		}
	});
	/*------ ScrollUp -------- */
	$.scrollUp({
		scrollText: '<i class="fi-rr-arrow-small-up"></i>',
		easingType: "linear",
		scrollSpeed: 900,
		animation: "fade",
	});
	/*------ Wow Active ----*/
	new WOW().init();
	//sidebar sticky
	if ($(".sticky-sidebar").length) {
		$(".sticky-sidebar").theiaStickySidebar();
	}
	/*----------------------------
	      Category toggle function
	  ------------------------------*/
	if ($(".categories-button-active").length) {
		let searchToggle = $(".categories-button-active");
		searchToggle.on("click", function(e) {
			e.preventDefault();
			if ($(this).hasClass("open")) {
				$(this).removeClass("open");
				$(this)
					.siblings(".categories-dropdown-active-large")
					.removeClass("open");
			} else {
				$(this).addClass("open");
				$(this).siblings(".categories-dropdown-active-large").addClass("open");
			}
		});
	}
	/*---------------------
	      Select active
	  --------------------- */
	if ($(".select-active").length) {
		$(".select-active").select2();
	}
	/*---- CounterUp ----*/
	if ($(".count").length) {
		$(".count").counterUp({
			delay: 10,
			time: 600,
		});
	}
	// Isotope active
	if ($(".grid").length) {
		$(".grid").imagesLoaded(function() {
			// init Isotope
			let $grid = $(".grid").isotope({
				itemSelector: ".grid-item",
				percentPosition: true,
				layoutMode: "masonry",
				masonry: {
					// use outer width of grid-sizer for columnWidth
					columnWidth: ".grid-item",
				},
			});
		});
	}
	/*====== SidebarSearch ======*/
	function sidebarSearch() {
		let searchTrigger = $(".search-active"),
			endTriggersearch = $(".search-close"),
			container = $(".main-search-active");
		searchTrigger.on("click", function(e) {
			e.preventDefault();
			container.addClass("search-visible");
		});
		endTriggersearch.on("click", function() {
			container.removeClass("search-visible");
		});
	}
	sidebarSearch();
	/*====== Sidebar menu Active ======*/
	function mobileHeaderActive() {
		let navbarTrigger = $(".burger-icon"),
			endTrigger = $(".mobile-menu-close"),
			container = $(".mobile-header-active"),
			wrapper4 = $("body");
		wrapper4.prepend('<div class="body-overlay-1"></div>');
		navbarTrigger.on("click", function(e) {
			navbarTrigger.toggleClass("burger-close");
			e.preventDefault();
			container.toggleClass("sidebar-visible");
			wrapper4.toggleClass("mobile-menu-active");
		});
		endTrigger.on("click", function() {
			container.removeClass("sidebar-visible");
			wrapper4.removeClass("mobile-menu-active");
		});
		$(".body-overlay-1").on("click", function() {
			container.removeClass("sidebar-visible");
			wrapper4.removeClass("mobile-menu-active");
			navbarTrigger.removeClass("burger-close");
		});
	}
	mobileHeaderActive();
	/*---------------------
	      Mobile menu active
	  ------------------------ */
	let $offCanvasNav = $(".mobile-menu"),
		$offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
	/*Add Toggle Button With Off Canvas Sub Menu*/
	$offCanvasNavSubMenu
		.parent()
		.prepend(
			'<span class="menu-expand"><i class="fi-rr-angle-small-down"></i></span>'
		);
	/*Close Off Canvas Sub Menu*/
	$offCanvasNavSubMenu.slideUp();
	/*Category Sub Menu Toggle*/
	$offCanvasNav.on("click", "li a, li .menu-expand", function(e) {
		let $this = $(this);
		if (
			$this
			.parent()
			.attr("class")
			.match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
			($this.attr("href") === "#" || $this.hasClass("menu-expand"))
		) {
			e.preventDefault();
			if ($this.siblings("ul:visible").length) {
				$this.parent("li").removeClass("active");
				$this.siblings("ul").slideUp();
			} else {
				$this.parent("li").addClass("active");
				$this
					.closest("li")
					.siblings("li")
					.removeClass("active")
					.find("li")
					.removeClass("active");
				$this.closest("li").siblings("li").find("ul:visible").slideUp();
				$this.siblings("ul").slideDown();
			}
		}
	});
	/*--- language currency active ----*/
	$(".mobile-language-active").on("click", function(e) {
		e.preventDefault();
		$(".lang-dropdown-active").slideToggle(900);
	});
	/*--- categories-button-active-2 ----*/
	$(".categories-button-active-2").on("click", function(e) {
		e.preventDefault();
		$(".categori-dropdown-active-small").slideToggle(900);
	});
	/*--- Mobile demo active ----*/
	let demo = $(".tm-demo-options-wrapper");
	$(".view-demo-btn-active").on("click", function(e) {
		e.preventDefault();
		demo.toggleClass("demo-open");
	});
	/*-----More Menu Open----*/
	$(".more_slide_open").slideUp();
	$(".more_categories").on("click", function() {
		$(this).toggleClass("show");
		$(".more_slide_open").slideToggle();
	});
	/* --- SwiperJS --- */
	$(".swiper-group-6").each(function() {
		let swiper_6_items = new Swiper(this, {
			spaceBetween: 30,
			slidesPerView: 6,
			slidesPerGroup: 2,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			autoplay: {
				delay: 10000,
			},
			breakpoints: {
				1199: {
					slidesPerView: 6,
				},
				800: {
					slidesPerView: 4,
				},
				400: {
					slidesPerView: 2,
				},
				350: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 15,
				},
			},
		});
	});
	$(".swiper-group-4").each(function() {
		let swiper_4_items = new Swiper(this, {
			spaceBetween: 20,
			slidesPerView: 4,
			slidesPerGroup: 1,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next-4",
				prevEl: ".swiper-button-prev-4",
			},

			autoplay: {
				delay: 10000,
			},
			breakpoints: {
				1299: {
					slidesPerView: 4,
				},
				1150: {
					slidesPerView: 4,
				},
				750: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 1,
				},
				550: {
					slidesPerView: 1,
				},
				300: {
					slidesPerView: 1,
				},
				200: {
					slidesPerView: 1,
				},
			},
		});
	});
	$(".swiper-group-3").each(function() {
		let swiper_3_items = new Swiper(this, {
			spaceBetween: 30,
			slidesPerView: 3,
			slidesPerGroup: 1,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next-3",
				prevEl: ".swiper-button-prev-3",
			},
			pagination: {
				el: ".swiper-pagination",
				type: "custom",
				renderCustom: function(swiper, current, total) {
					let customPaginationHtml = "";
					for (let i = 0; i < total; i++) {
						//Determine which pager should be activated at this time
						if (i == current - 1) {
							customPaginationHtml +=
								'<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
						} else {
							customPaginationHtml +=
								'<span class="swiper-pagination-customs"></span>';
						}
					}
					return customPaginationHtml;
				},
			},
			autoplay: {
				delay: 10000,
			},
			breakpoints: {
				1199: {
					slidesPerView: 3,
				},
				800: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 1,
				},
				350: {
					slidesPerView: 1,
				},
				310: {
					slidesPerView: 1,
				},
				200: {
					slidesPerView: 1,
				},
			},
		});
	});
	$(".swiper-group-2").each(function() {
		let swiper_2_items = new Swiper(this, {
			spaceBetween: 30,
			slidesPerView: 2,
			slidesPerGroup: 1,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
				type: "custom",
				renderCustom: function(swiper, current, total) {
					let customPaginationHtml = "";
					for (let i = 0; i < total; i++) {
						//Determine which pager should be activated at this time
						if (i == current - 1) {
							customPaginationHtml +=
								'<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
						} else {
							customPaginationHtml +=
								'<span class="swiper-pagination-customs"></span>';
						}
					}
					return customPaginationHtml;
				},
			},
			autoplay: {
				delay: 10000,
			},
			breakpoints: {
				1199: {
					slidesPerView: 2,
				},
				800: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 1,
				},
				400: {
					slidesPerView: 1,
				},
				350: {
					slidesPerView: 1,
				},
			},
		});
	});
	$(".swiper-group-1").each(function() {
		let swiper_2_items = new Swiper(this, {
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerGroup: 1,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next-5",
				prevEl: ".swiper-button-prev-5",
			},
			autoplay: {
				delay: 10000,
			},
		});
	});
	//Dropdown selected item
	$(".dropdown-menu li a").on("click", function(e) {
		e.preventDefault();
		$(this)
			.parents(".dropdown")
			.find(".btn span")
			.html($(this).text() + ' <span class="caret"></span>');
		$(this).parents(".dropdown").find(".btn").val($(this).data("value"));
	});
	$(".list-tags-job .remove-tags-job").on("click", function(e) {
		e.preventDefault();
		$(this).closest(".job-tag").remove();
	});
	// Video popup
	if ($(".popup-youtube").length) {
		$(".popup-youtube").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});
	}
	$(".block-price-item").on("click", function() {
		$(".block-price-item").removeClass("active");
		$(this).addClass("active");
		let package = $(this).attr("data-package");
		if (typeof package !== "undefined") {
			let li = $(".list-package-feature li");
			li.removeClass("active");
			for (let i = 0; i < package; i++) {
				li.eq(i).addClass("active");
			}
		}
	});
	// Init function billed
	checkBilled();
	checkBilled2();
})(jQuery);
// Check billed
function checkBilled() {
	let checkBox = $("#cb_billed_type");
	let forMonth = $(".for-month");
	let forYear = $(".for-year");
	for (let i = 0; i < forMonth.length; i++) {
		if (checkBox.is(":checked")) {
			forYear.eq(i).addClass("display-year");
			forMonth.eq(i).removeClass("display-month");
		} else {
			forYear.eq(i).removeClass("display-year");
			forMonth.eq(i).addClass("display-month");
		}
	}
}
// Check billed Pricing 2
function checkBilled2() {
	let checkBox = $("#cb_billed_type");
	let forMonth = $(".for-month");
	let forYear = $(".for-year");
	let billMonth = $('.text-billed-month');
	let billYear = $('.text-billed-year');
	for (let i = 0; i < forMonth.length; i++) {
		if (checkBox.is(":checked")) {
			forYear.eq(i).addClass("display-year");
			billYear.addClass('active');
			billMonth.removeClass('active');
			forMonth.eq(i).removeClass("display-month");
		} else {
			forYear.eq(i).removeClass("display-year");
			billMonth.addClass('active');
			billYear.removeClass('active');
			forMonth.eq(i).addClass("display-month");
		}
	}
}
//Perfect Scrollbar
if ($(".mobile-header-wrapper-inner").length) {
	const ps = new PerfectScrollbar(".mobile-header-wrapper-inner");
}