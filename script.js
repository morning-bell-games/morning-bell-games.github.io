const navButton = document.getElementById("nav-button")
const dropdownMenu = document.getElementById("dropdown-menu")

navButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("visible")
    navButton.classList.toggle("active")
    if (dropdownMenu.classList.contains("visible")) {
        navButton.innerHTML = "<em><span class='arrow2'>v</span></em> Games"
    } else {
        navButton.innerHTML = "<em><span class='arrow1'>></span></em> Games"
    }
})