const btnViewMore = document.querySelector(".btn__view-more-wrapper").firstElementChild;

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
