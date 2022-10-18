const audioFiles = {
    forestAudio: new Audio("./assets/forest.aac"),
    coffeeShopAudio: new Audio("./assets/coffeeShop.aac"),
    rainAudio: new Audio("./assets/rain.aac"),
    fireplaceAudio: new Audio("./assets/fireplace.aac"),
}

for (let file in audioFiles) {
    audioFiles[file].loop = true
}

function changeVolume(ev) {
    audioFiles[(ev.target.id).slice(0, -6) + "Audio"].volume = Number(ev.target.value) / 10
    ev.stopPropagation()
}

// Background Sounds Buttons listeners
for (let el of document.getElementsByClassName("bgSoundBtn")) {
    el.addEventListener("click", () => {
        el.classList.toggle("active")
        el.querySelector(".bgSoundPath").classList.toggle("active")
        if (el.classList.contains("active")) {
            audioFiles[el.id + "Audio"].play()
        }
        else audioFiles[el.id + "Audio"].pause()
    })
}

for (let volumeSlider of document.getElementsByClassName("volumeControl")) {
    volumeSlider.addEventListener("click", changeVolume, true)
}