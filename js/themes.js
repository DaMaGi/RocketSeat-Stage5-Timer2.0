export function ChangeTheme({
    sunToDarkMode,
    moonToLightMode,
    root
}) {

    sunToDarkMode.addEventListener("click", () => {
        sunToDarkMode.classList.add("hide")
        moonToLightMode.classList.remove("hide")
        
        root.style.setProperty("--bg-color", "#323238")
        root.style.setProperty("--stroke-color", "#ebe7bf")
        root.style.setProperty("--active-color", "#7fc58f")
        root.style.setProperty("--active-fill", "#323238")
        root.style.setProperty("--sound-btn-bg", "#ddd8ce")
    })

    moonToLightMode.addEventListener("click", () => {
        moonToLightMode.classList.add("hide")
        sunToDarkMode.classList.remove("hide")

        root.style.setProperty("--bg-color", "#ebe7bf")
        root.style.setProperty("--stroke-color", "#323238")
        root.style.setProperty("--active-color", "#02799d")
        root.style.setProperty("--active-fill", "#ffffff")
        root.style.setProperty("--sound-btn-bg", "#ddd8ce")
    })
}
