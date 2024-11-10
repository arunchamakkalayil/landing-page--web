function toggleClose() {
    const menu = document.querySelector(".mobile-nav");
    menu.classList.remove("active");
    menu.classList.add("active-nav");
}
function toggleMenu() {
    const menu = document.querySelector('.mobile-nav');
    menu.classList.remove("active-nav");
    menu.classList.add("active");
}
function tryProduct() {
    alert("Redirecting to product trial page...");
}
function watchDemo() {
    alert("Playing demo video...");
}
