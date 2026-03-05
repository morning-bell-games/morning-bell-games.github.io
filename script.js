const navButton = document.getElementById("nav-button")
const dropdownMenu = document.getElementById("droppdown-menu")

navButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("visible")
    navButton.innerHTML = "Games"
})