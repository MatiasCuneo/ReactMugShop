function toggleClass() {
    document.addEventListener('DOMContentLoaded', function () {
        const navegation = document.getElementById("nav");
        navegation.classList.toggle("toggled")
    });
}

export default toggleClass;