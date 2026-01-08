const btnFilterWrapper = document.querySelector(".filter-btn--mobile");
const btnFilter = document.querySelector(".filter-btn__button");
const btnViewMore = document.querySelector(".btn__view-more-wrapper").firstElementChild;
const params = new URLSearchParams(window.location.search);
const hasCategory = params.has('category');

console.log(btnFilterWrapper)

btnFilter.addEventListener('click', function() {
	/* Changes the button icon */
	this.classList.toggle("filter-btn__button--active");
	/* Animates and open the siblings li */
	btnFilterWrapper.classList.toggle("active");
});

checkHasCategory();

function checkHasCategory() {
	if (hasCategory) {
		btnFilter.classList.toggle("filter-btn__button--active");
		btnFilterWrapper.classList.add("active");
	}
}

btnViewMore.addEventListener('click', (e) => {
	loadProductsAndPagination();
	e.target.parentElement.classList.add("btn__view-more-wrapper--hidden");
});

function loadProductsAndPagination() {
	const products = document.querySelectorAll(".store__product--hidden");
	const pagination = document.querySelector(".store__pagination--hidden");
	
	products.forEach(product => product.classList.remove("store__product--hidden"));
	pagination.classList.remove("store__pagination--hidden");
}