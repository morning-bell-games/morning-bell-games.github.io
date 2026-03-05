const navButton = document.getElementById("nav-button")
const dropdownMenu = document.getElementById("dropdown-menu")

navButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("visible")
    if (dropdownMenu.classList.contains("visible")) {
        navButton.innerHTML = "<em><span class='arrow'>v</span></em> Games"
    } else {
        navButton.innerHTML = "<em><span class='arrow'>></span></em> Games"
    }
})