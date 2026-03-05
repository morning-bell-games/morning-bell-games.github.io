const navButton = document.getElementById("nav-button")
const dropdownMenu = document.getElementById("dropdown-menu")

navButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("visible")
    navButton.innerHTML = "Games"
})