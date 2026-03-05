const navButton = document.getElementById("nav-button")
const dropdownMenu = document.getElementById("dropdown-menu")

navButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("visible")
    if (dropdownMenu.classList.contains("visible")) {
        navButton.innerHTML = "<span class='arrow'>&#8593;</span>Games"
    } else {
        navButton.innerHTML = "<em>></em>Games"
    }
})