const navButton = document.getElementById("nav-button")
const dropdownMenu = document.getElementById("dropdown-menu")

navButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("visible")
    console.log(dropdownMenu.classList)
    navButton.innerHTML = "<span class='arrow'>&#8595;</span>Games"
})