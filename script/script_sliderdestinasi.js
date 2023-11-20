const slider2 = document.querySelector(".slider3");
const panahkiri2 = document.getElementById("panahkiri2");
const panahkanan2 = document.getElementById("panahkanan2");
const img2 = document.querySelector(".gambar2");

let lebarimg2 = img2.offsetWidth;

panahkiri2.addEventListener("click", () => {
  slider2.scrollLeft += -(lebarimg2 + 40);
});

panahkanan2.addEventListener("click", () => {
  slider2.scrollLeft += (lebarimg2 + 40);
});