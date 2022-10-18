export function Elements() {
    const playBtn = document.querySelector(".play")
    const pauseBtn = document.querySelector(".pause")
    const stopBtn = document.querySelector(".stop")
    const setTimeBtn = document.querySelector(".setTime")
    const decTimeBtn = document.querySelector(".decreaseTime")
    const incTimeBtn = document.querySelector(".increaseTime")
    const forestBtn = document.querySelector(".forest")
    const rainBtn = document.querySelector(".rain")
    const fireBtn = document.querySelector(".fire")
    const coffeeBtn = document.querySelector(".coffee")

    const minutes = document.querySelector(".minutes")
    const seconds = document.querySelector(".seconds")
    const decimals = document.querySelector(".decimalSecs")

    playBtn.addEventListener("click", () => {
        playBtn.classList.add("hide")
        pauseBtn.classList.remove("hide")
        setTimeBtn.classList.add("hide")
        stopBtn.classList.remove("hide")
    })

    pauseBtn.addEventListener("click", () => {
        pauseBtn.classList.add("hide")
        playBtn.classList.remove("hide")
    })

    stopBtn.addEventListener("click", () => {
        stopBtn.classList.add("hide")
        setTimeBtn.classList.remove("hide")
        pauseBtn.classList.add("hide")
        playBtn.classList.remove("hide")
    })

    decTimeBtn.addEventListener("click", () => {
    })

    return {
        playBtn,
        pauseBtn,
        stopBtn,
        setTimeBtn,
        decTimeBtn,
        incTimeBtn,
        forestBtn,
        rainBtn,
        fireBtn,
        coffeeBtn,
        minutes,
        seconds,
        decimals,
    }

}