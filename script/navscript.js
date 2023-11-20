window.onscroll = function() {scrollFunction()};
function scrollFunction() {
const scrollPosition = window.scrollY;
if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "#00000058";
    document.getElementById("nav-list1").style.backgroundColor = "#00000078";
    document.getElementById("nav-list2").style.backgroundColor = "#00000078";
    document.getElementById("nav-list3").style.backgroundColor = "#00000078";
} else {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("nav-list1").style.backgroundColor = "transparent";
    document.getElementById("nav-list2").style.backgroundColor = "transparent";
    document.getElementById("nav-list3").style.backgroundColor = "transparent";
}
}