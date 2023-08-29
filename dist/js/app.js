//libraries like jquery etc
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

	window.addEventListener("resize", function () {
		const btnShowMoreAll = document.querySelectorAll('[data-item="show-more"]');
		const codeElementAll = document.querySelectorAll('[data-item="code"]');
		const categoryElementAll = document.querySelectorAll('[data-item="category"]');
		const statElementAll = document.querySelectorAll('[data-item="stat"]');
		const actionElementAll = document.querySelectorAll('[data-item="action"]');

		btnShowMoreAll.forEach((item) => {
			item.querySelector("svg").classList.remove("rotate-x-180");
		});
		codeElementAll.forEach((item) => {
			// item.classList.add('sm:flex');
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
			item.classList.add('hidden')
		})
	});
});
