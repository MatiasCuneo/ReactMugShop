const navegation = document.getElementById("nav");
const ham_menu = document.getElementById("ham");

ham_menu.addEventListener("click", () => {
    navegation.classList.toggle("toggled");
});

if (window.screen.width <= 600) {
    document.getElementById("right").innerHTML = '<section class="content"><p>Compra y descubre a través de un gran catálogo de todo tipo de diseños.</p><a href="#"><p>Ver más</p><img src="../public/imgs/arrow-right.svg" alt="arrow"></a></section><div class="content_separator"></div><img src="../public/imgs/bookmark.svg" alt="bookmark" class="desc_icon">';
}