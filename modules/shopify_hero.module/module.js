const btnHero = document.querySelector(".shp_hero__btn");
const btnViewMore = document.querySelector(".btn__view-more");

btnHero.addEventListener("click", (e) => {
	e.preventDefault();

	if (btnViewMore) {
		btnViewMore.click();
	}
	
	const storeAnchor = document.getElementById("store-anchor");
	storeAnchor.scrollIntoView({ block: "nearest" ,behavior: "smooth" });
});