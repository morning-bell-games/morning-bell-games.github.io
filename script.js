const navButton = document.getElementById("nav-button")
const dropdownMenu = document.getElementById("droppdown-menu")
console.log(dropdownMenu)

navButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("visible")
    navButton.innerHTML = "Games"
})