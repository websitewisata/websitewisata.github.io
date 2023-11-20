function openForm() {
    const form = document.getElementById("Form");
    form.style.display = "block";
    form.classList.add("active");
}

function closeForm() {
    const form = document.getElementById("Form");
    form.classList.remove("active");
    setTimeout(() => {
        form.style.display = "none";
    }, 500);
}