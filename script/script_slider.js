const slider = document.querySelector(".slider2");
const panahkiri = document.getElementById("panahkiri");
const panahkanan = document.getElementById("panahkanan");
const img = document.querySelector(".gambar");

let lebarimg = img.offsetWidth;

panahkiri.addEventListener("click", () => {
  slider.scrollLeft += -(lebarimg + 15);
});

panahkanan.addEventListener("click", () => {
  slider.scrollLeft += (lebarimg + 15);
});