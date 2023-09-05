// TODO переписати на jquery
window.addEventListener("DOMContentLoaded", () => {
	// Отримуємо всі кнопки та фільтри за допомогою атрибута data-filter
	const buttons = document.querySelectorAll("button[data-filter]");
	const filters = document.querySelectorAll("div[data-filter]");

	// Додаємо обробник подій для кожної кнопки
	buttons.forEach((button) => {
		button.addEventListener("click", (event) => {
			event.stopPropagation(); // Зупиняємо подію від поширення на дочірні елементи кнопки
			// Отримуємо значення атрибута data-filter кнопки, яка була натиснута
			const filterValue = button.getAttribute("data-filter");

			// Ітеруємося через всі фільтри і приховуємо ті, які не відповідають обраному фільтру
			filters.forEach((filter) => {
				if (filter.getAttribute("data-filter") === filterValue) {
					filter.classList.remove("hidden");
				} else {
					filter.classList.add("hidden");
				}
			});
		});
	});

	// Додаємо обробник подій для кожного фільтра, щоб закривати фільтр при кліку на нього
	filters.forEach((filter) => {
		filter.addEventListener("click", (event) => {
			// Зупиняємо подію кліку від поширення до документа
			event.stopPropagation();
		});

		// Додаємо обробники подій для кнопок та посилань всередині фільтра
		const buttonsInsideFilter = filter.querySelectorAll("button, a, input[type='radio'], svg");
		buttonsInsideFilter.forEach((button) => {
			button.addEventListener("click", (event) => {
				// Закриваємо фільтр при кліку на кнопку або посилання всередині нього
				filter.classList.add("hidden");
				event.stopPropagation();
			});
		});
	});

	// Додаємо обробник подій на документ, щоб при кліку поза фільтрами і кнопками фільтр закривався
	document.addEventListener("click", (event) => {
		filters.forEach((filter) => {
			if (!filter.contains(event.target)) {
				filter.classList.add("hidden");
			}
		});
	});

	// show more seller-my-goods.html mobile

	const parentShowMoreAll = document.querySelectorAll('[data-item="parent"]');

	parentShowMoreAll.forEach((parentElement) => {
		const btnShowMore = parentElement.querySelector('[data-item="show-more"]');
		const codeElement = parentElement.querySelector('[data-item="code"]');
		const categoryElement = parentElement.querySelector('[data-item="category"]');
		const statElement = parentElement.querySelector('[data-item="stat"]');
		const actionElement = parentElement.querySelector('[data-item="action"]');

		btnShowMore.addEventListener("click", function () {
			const svgBtnShowMore = btnShowMore.querySelector("svg");

			codeElement.classList.toggle("hidden");
			categoryElement.classList.toggle("sm:flex");
			categoryElement.classList.toggle("flex");
			categoryElement.classList.toggle("hidden");
			statElement.classList.toggle("sm:flex");
			statElement.classList.toggle("flex");
			statElement.classList.toggle("hidden");
			actionElement.classList.toggle("sm:flex");
			actionElement.classList.toggle("flex");
			actionElement.classList.toggle("hidden");
			svgBtnShowMore.classList.toggle("rotate-x-180");
		});
	});

	const btnDropDowns = document.querySelectorAll("button[data-dropdown]");
	const divDropDonwns = document.querySelectorAll("div[data-dropdown]");

	btnDropDowns.forEach((button) => {
		button.addEventListener("click", (event) => {
			event.stopPropagation(); // Зупиняємо подію від поширення на дочірні елементи кнопки

			const filterValue = button.getAttribute("data-dropdown");
			const svgBtn = button.querySelector("svg");

			divDropDonwns.forEach((filter) => {
				if (filter.getAttribute("data-dropdown") === filterValue) {
					filter.classList.toggle("hidden");
					svgBtn.classList.toggle("rotate-x-180");
				}
			});
		});
	});

	const labelRadios = document.querySelectorAll("label[data-radio]");
	const divRadios = document.querySelectorAll("div[data-radio]");

	labelRadios.forEach((label) => {
		label.addEventListener("click", (event) => {
			event.stopPropagation(); // Зупиняємо подію від поширення на дочірні елементи кнопки

			const radioValue = label.getAttribute("data-radio");

			divRadios.forEach((filter) => {
				if (filter.getAttribute("data-radio") === radioValue) {
					filter.classList.remove("hidden");
				} else {
					filter.classList.add("hidden");
				}
			});
		});
	});
});

// TODO переписати на jquery
window.addEventListener("resize", function () {
	// mobile chrome fix for sticky bottom-0
	// We listen to the resize event
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
	// ===============================================================//

	const btnShowMoreAll = document.querySelectorAll('[data-item="show-more"]');
	const codeElementAll = document.querySelectorAll('[data-item="code"]');
	const categoryElementAll = document.querySelectorAll('[data-item="category"]');
	const statElementAll = document.querySelectorAll('[data-item="stat"]');
	const actionElementAll = document.querySelectorAll('[data-item="action"]');
	const filters = document.querySelectorAll("div[data-filter]");

	btnShowMoreAll.forEach((item) => {
		item.querySelector("svg").classList.remove("rotate-x-180");
	});
	codeElementAll.forEach((item) => {
		item.classList.add("hidden");
	});
	statElementAll.forEach((item) => {
		item.classList.add("sm:flex");
		item.classList.remove("flex");
		item.classList.add("hidden");
	});
	actionElementAll.forEach((item) => {
		item.classList.add("sm:flex");
		item.classList.remove("flex");
		item.classList.add("hidden");
	});
	categoryElementAll.forEach((item) => {
		item.classList.add("sm:flex");
		item.classList.remove("flex");
		item.classList.add("hidden");
	});

	filters.forEach((item) => {
		item.classList.add("hidden");
	});
});

$(document).ready(function () {
	// sliders
	//  buyer-favorites.html

	const swiper2 = new Swiper(".swiper2", {
		slidesPerView: "auto",
		spaceBetween: 22,

		navigation: {
			nextEl: ".btn-next",
			prevEl: ".btn-prev",
		},
		breakpoints: {
			0: {
				spaceBetween: 10,
			},
			1024: {
				spaceBetween: 22,
			},
		},
	});
	const swiper3 = new Swiper(".swiper3", {
		slidesPerView: "auto",
		spaceBetween: 22,

		navigation: {
			nextEl: ".btn-next1",
			prevEl: ".btn-prev1",
		},
		breakpoints: {
			0: {
				spaceBetween: 10,
			},
			1024: {
				spaceBetween: 22,
			},
		},
	});

	//
	const swiper4 = new Swiper(".swiper4", {
		slidesPerView: "auto",
		spaceBetween: 22,

		navigation: {
			nextEl: ".btn-next",
			prevEl: ".btn-prev",
		},
		breakpoints: {
			0: {
				spaceBetween: 10,
			},
			1024: {
				spaceBetween: 22,
			},
		},
	});

	// banner-slider
	if ($(".banner-slider").length > 0) {
		let $speed = 5000,
			$delay = 1000;

		if ($(".banner-slider").data("speed") !== undefined) {
			$speed = parseInt($(".banner-slider").data("speed"));
		}

		if ($(".banner-slider").data("delay") !== undefined) {
			$delay = parseInt($(".banner-slider").data("delay"));
		}

		const bannerSlider = new Swiper(".banner-slider", {
			speed: $speed, // Встановлюємо швидкість
			autoplay: {
				delay: $delay, // Затримка перед автоматичним переключенням слайдів (мілісекунди)
			},
			loop: true,
			spaceBetween: 22,
			effect: "fade",
			navigation: {
				nextEl: ".btn-banner-slider-next",
				prevEl: ".btn-banner-slider-prev",
			},
			pagination: {
				el: ".banner-slider-pagination",
			},
		});
	}

	// home page shos slider
	const sliderShops = new Swiper(".shops-slider", {
		// speed: 1000,
		// autoplay: {
		// 	delay: 3000, // Затримка перед автоматичним переключенням слайдів (мілісекунди)
		// },
		// loop: true,
		spaceBetween: 13,
		slidesPerView: 4,
		navigation: {
			nextEl: ".btn-slider-shops-next",
			prevEl: ".btn-slider-shops-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: "auto",
			},
			1440: {
				slidesPerView: 4,
			},
		},
	});

	// home page slider adv
	if ($(".slider-adv").length > 0) {
		let $speed = 5000,
			$delay = 1000;

		if ($(".banner-slider").data("speed") !== undefined) {
			$speed = parseInt($(".banner-slider").data("speed"));
		}

		if ($(".banner-slider").data("delay") !== undefined) {
			$delay = parseInt($(".banner-slider").data("delay"));
		}

		const sliderAdv = new Swiper(".slider-adv", {
			speed: $speed, // Встановлюємо швидкість
			autoplay: {
				delay: $delay, // Затримка перед автоматичним переключенням слайдів (мілісекунди)
			},
			loop: true,
			slidesPerView: 4,
			spaceBetween: 45,
			navigation: {
				nextEl: ".btn-slider-adv-next",
				prevEl: ".btn-slider-adv-prev",
			},
			pagination: {
				el: ".slider-adv-pagination",
			},
			breakpoints: {
				0: {
					slidesPerView: "auto",
					spaceBetween: 15,
				},
				1440: {
					slidesPerView: 4,
					spaceBetween: 45,
				},
			},
		});
	}

	// cards slider
	$(".card-image-slider").each(function (index, element) {
		var sliderId = "card-slider-" + index;
		var nextButtonId = "swiper-button-next-" + index;
		var prevButtonId = "swiper-button-prev-" + index;

		$(element).attr("id", sliderId);
		$(element).parent().find(".btn-card-image-next").attr("id", nextButtonId);
		$(element).parent().find(".btn-card-image-prev").attr("id", prevButtonId);

		var swiper = new Swiper("#" + sliderId, {
			slidersPerView: 1,
			navigation: {
				nextEl: "#" + nextButtonId,
				prevEl: "#" + prevButtonId,
			},
		});
	});

	// desktop-category
	$(".btn-category-desktop").click(function () {
		$(".category-desktop").removeClass("hidden");
		$(".category-arrow-down").addClass("rotate-x-180");
		$("body").addClass("lock");
	});

	$(".category-desktop-close").click(function () {
		$(".category-desktop").addClass("hidden");
		$(".category-arrow-down").removeClass("rotate-x-180");
		$("body").removeClass("lock");
		$(".category__item").removeClass("active");
		$(".category__submenu-item").removeClass("active");
		$("[data-category-level-2]").addClass("hidden");
		$("[data-category-level-3]").addClass("hidden");
		$(".category__submenu-item").find("svg").remove();
	});

	$(".category__item").mouseenter(function () {
		if (!$(this).hasClass("active")) {
			$(".category__item").removeClass("active");
			$(".category__submenu-item").removeClass("active");
			$("[data-category-level-2]").addClass("hidden");
			$("[data-category-level-3]").addClass("hidden");
			$(".category__submenu-item").find("svg").remove();

			$(this).addClass("active");
			$catID = $(this).data("category");
			$("[data-category-level-2]").each(function () {
				if ($(this).data("category-level-2") === $catID) {
					$(this).removeClass("hidden");
				}
			});
		}
	});

	$(".category__submenu-item").mouseenter(function () {
		if (!$(this).hasClass("active")) {
			$currentItem = $(this);
			$(".category__submenu-item").removeClass("active");
			$(".category__submenu-item").find("svg").remove();
			$("[data-category-level-3]").addClass("hidden");
			$currentItem.addClass("active");
			$catID = $currentItem.data("submenu");
			$("[data-category-level-3]").each(function () {
				if ($(this).data("category-level-3") === $catID) {
					$currentItem.find("a").append('<svg class="lx:-right-3.5 absolute -right-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 xl:h-3.5 xl:w-3.5"><use xlink:href="img/svg/sprites/sprite-icons.svg#chevron-right"></use></svg>');
					$(this).removeClass("hidden");
				}
			});
		}
	});

	// category mobile
	$(".btn-category-mobile").click(function () {
		$(this).addClass("active");
		$(".category-mobile").removeClass("hidden");
		$("body").addClass("lock-mobile");
	});

	$(".category-mobile__item").click(function (e) {
		$currentItem = $(this);
		$catID = $currentItem.data("mobile-category");
		$("[data-mobile-subctg-level-2]").each(function () {
			if ($(this).data("mobile-subctg-level-2") === $catID) {
				e.preventDefault();
				$(".category-mobile-main").addClass("hidden");
				$(".subcategory-mobile-level-1").removeClass("hidden");
				$(this).removeClass("hidden");
			}
		});
	});

	$(".category-mobile__submenu-item").click(function (e) {
		$currentItem = $(this);
		$catID = $currentItem.data("mobile-submenu");
		console.log($catID);
		$("[data-mobile-subctg-level-3]").each(function () {
			if ($(this).data("mobile-subctg-level-3") === $catID) {
				e.preventDefault();
				$(".subcategory-mobile-level-1").addClass("hidden");
				$(".subcategory-mobile-level-2").removeClass("hidden");
				$("[data-mobile-subctg-level-2]").addClass("hidden");
				$(this).removeClass("hidden");
			}
		});
	});

	$(".category-mobile-close").click(function () {
		$(".category-mobile").addClass("hidden");
		$(".category-mobile-main").removeClass("hidden");
		$(".subcategory-mobile-level-1").addClass("hidden");
		$(".subcategory-mobile-level-2").addClass("hidden");
		$("[data-mobile-subctg-level-2]").addClass("hidden");
		$("[data-mobile-subctg-level-3]").addClass("hidden");
		$("body").removeClass("lock-mobile");
	});

	// modal
	$("[data-modal]").click(function () {
		$btn = $(this);
		$modalName = $btn.data("modal");
		Fancybox.show([
			{
				src: "#" + $modalName,
				closeButton: false,
				backdropClick: false,
				clickOutside: false,
				type: "inline",
			},
		]);
	});

	// modal close
	$(".modal-close").click(function () {
		Fancybox.close();
	});

	// faq accordeon
	$(".faq-btn").click(function () {
		$(".faq-content").not($(this).next()).slideUp();
		$(".faq-item").not($(this).parent()).removeClass("active");
		$(".faq-item").not($(this).parent()).find("svg").removeClass("rotate-x-180");
		$(this).parent().toggleClass("active");
		$(this).next().slideToggle();
		$(this).find("svg").toggleClass("rotate-x-180");
	});

	// autocomplete search
	$(".search-field").each(function () {
		$(this)
			.autocomplete({
				appendTo: $(this).next(),
				minLength: 3,
				source: function (request, response) {
					if (request.term.length >= 3) {
						// Відправка AJAX-запиту до сервера для завантаження даних
						$.ajax({
							url: "./files/search-data.json",
							dataType: "json",
							success: function (data) {
								var filteredData = data.filter(function (item) {
									// Фільтрація даних за текстом введеного запиту
									return item.text.toLowerCase().indexOf(request.term.toLowerCase()) !== -1;
								});

								// Створення посилань з тексту
								var results = filteredData.map(function (item) {
									return {
										label: item.text,
										value: item.link,
									};
								});

								response(results); // Передача результатів до компоненту автозаповнення
							},
							error: function () {
								// Обробка помилок
								console.log("Помилка при завантаженні даних");
								response([]); // Повернення порожнього масиву у випадку помилки
							},
						});
					} else {
						response([]); // Повернення порожнього масиву, коли менше трьох символів
					}
				},
				select: function (event, ui) {
					$(this).val(ui.item.label);
					return false;
				},
			})
			.autocomplete("instance")._renderItem = function (ul, item) {
			// Перевірка, чи є введена фраза
			var term = this.term || "";
			var regexp = new RegExp("(" + $.ui.autocomplete.escapeRegex(term) + ")", "gi");

			// Виділення фрази у тексті результату
			var highlightedText = item.label.replace(regexp, '<span class="highlighted">$1</span>');

			// Створення пункту списку з виділеним текстом
			return $("<li class='py-1.5 px-2.5 text-sm'>")
				.append("<a class='autocomplete__item' href='" + item.value + "'><div class='autocomplete__item-name'><span>" + highlightedText + "</span></div></a>")
				.appendTo(ul);
		};
	});

	// footer mobile open menus
	$(".footer-btn-menu").click(function () {
		$("ul").not($(this).parent().next()).slideUp();
		$("svg").not($(this)).removeClass("rotate-x-180");
		$(this).parent().next().slideToggle();
		$(this).find("svg").toggleClass("rotate-x-180");
	});

	// footer up button
	$(".scroll-up").each(function () {
		$(this).click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			var winHeight = $(document).height();
			var step = 12;
			var timeToScroll = winHeight / step;
			$("html, body").stop().animate(
				{
					scrollTop: 0,
				},
				500
			);
		});
	});

	// account menu

	$(".account-btn").each(function () {
		$(this).click(function (e) {
			e.preventDefault();

			$(".account-menu").toggleClass("hidden");

			if (window.matchMedia("(max-width: 63.9988em)").matches) {
				$("body").toggleClass("lock-mobile");
			}
		});
	});

	$(".buyer-btn").click(function () {
		if ($(".buyer-menu").hasClass("hidden")) {
			$(".seller-menu").addClass("hidden");
			$(".buyer-menu").removeClass("hidden");
			$(".btn-panel").attr("href", $(this).data("link-panel"));
		}
	});

	$(".seller-btn").click(function () {
		if ($(".seller-menu").hasClass("hidden")) {
			$(".buyer-menu").addClass("hidden");
			$(".seller-menu").removeClass("hidden");
			$(".btn-panel").attr("href", $(this).data("link-panel"));
		}
	});

	$(".account-menu-close").on("click", function () {
		$(".account-menu").addClass("hidden");

		if (window.matchMedia("(max-width: 63.9988em)").matches) {
			$("body").removeClass("lock-mobile");
		}
	});

	// info-banner
	$(".info-banner-close").click(() => {
		if ($(".info-banner").parent().hasClass("mt-7.5 xl:hidden")) {
			$(".info-banner").parent().remove();
		}

		if ($(".info-banner").parent().hasClass("mb-6 hidden lg:block")) {
			$(".info-banner").parent().remove();
		} else {
			$(".info-banner").remove();
		}
	});
});

$(window).on("resize", function () {
	if (!$(".category-desktop").hasClass("hidden")) {
		$(".category-desktop").addClass("hidden");
	}

	if (!$(".category-mobile").hasClass("hidden")) {
		$(".category-mobile").addClass("hidden");
	}

	if ($(".btn-category-mobile").hasClass("active")) {
		$(".btn-category-mobile").removeClass("active");
		$(".category-mobile-main").removeClass("hidden");
		$(".subcategory-mobile-level-1").addClass("hidden");
		$(".subcategory-mobile-level-2").addClass("hidden");
	}

	if ($("body").hasClass("lock")) {
		$("body").removeClass("lock");
	}

	if (!$(".account-menu").addClass("hidden")) {
		$(".account-menu").addClass("hidden");
	}

	if ($("body").hasClass("lock-mobile")) {
		$("body").removeClass("lock-mobile");
	}

	$("footer ul").removeAttr("style");
	$(".footer-btn-menu").find("svg").removeClass("rotate-x-180");
});

$(document).mouseup(function (e) {
	if (!$(".category-desktop-body").is(e.target) && $(".category-desktop-body").has(e.target).length === 0) {
		$(".category-desktop").addClass("hidden");
		$(".category-arrow-down").removeClass("rotate-x-180");
		$("body").removeClass("lock");
		$(".category__item").removeClass("active");
		$(".category__submenu-item").removeClass("active");
		$("[data-category-level-2]").addClass("hidden");
		$("[data-category-level-3]").addClass("hidden");
		$(".category__submenu-item").find("svg").remove();
	}

	if (!$(".account-menu-body").is(e.target) && $(".account-menu-body").has(e.target).length === 0 && !$(".account-btn").is(e.target) && $(".account-btn").has(e.target).length === 0) {
		$(".account-menu").addClass("hidden");
		$("body").removeClass("lock-mobile");
	}
});
