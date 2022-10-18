import { Timer } from "./timer.js"

export function TimeControls({
    playBtn,
    pauseBtn,
    setTimeBtn,
    stopBtn,
    incTimeBtn,
    decTimeBtn,
    initialDecimals,
    initialMinutes,
    initialSeconds,
    minutes,
    seconds,
    decimals,
}) {

    const alarmAudio = new Audio("./assets/alarmClockBreakingWindow.aac")

    const timer = Timer({
        minutes,
        seconds,
        decimals,
        pauseBtn,
        playBtn,
        alarmAudio
    })

    function validateTimeInput(input) {
        if (input < 0 || (isNaN(input) || input == "")) return "00"
        return String(Math.floor(input)).padStart(2, "0")
    }

    // Timer panel listeners
    playBtn.addEventListener("click", () => {
        playBtn.classList.add("hide")
        pauseBtn.classList.remove("hide")
        setTimeBtn.classList.add("hide")
        stopBtn.classList.remove("hide")
        timer.startTimer()
    })

    pauseBtn.addEventListener("click", () => {
        pauseBtn.classList.add("hide")
        playBtn.classList.remove("hide")

        timer.pauseTimer()
    })

    setTimeBtn.addEventListener("click", () => {
        initialMinutes = validateTimeInput(prompt("Minutes:"))
        initialSeconds = validateTimeInput(prompt("Seconds:"))
        if (Number(initialSeconds) > 59) initialSeconds = "59"
        minutes.textContent = initialMinutes
        seconds.textContent = initialSeconds
        decimals.textContent = initialDecimals
    })

    stopBtn.addEventListener("click", () => {
        stopBtn.classList.add("hide")
        setTimeBtn.classList.remove("hide")
        timer.stopTimer()
        minutes.textContent = initialMinutes
        seconds.textContent = initialSeconds
        decimals.textContent = initialDecimals
    })

    decTimeBtn.addEventListener("click", () => {
        if (minutes.textContent >= 5) {
            minutes.textContent = validateTimeInput(Number(minutes.textContent) - 5)
        }
        else {
            minutes.textContent = "00"
            seconds.textContent = "00"
            decimals.textContent = "0"
            if (playBtn.classList.contains("hide")) alarmAudio.play()
            timer.stopTimer()
        }
    })

    incTimeBtn.addEventListener("click", () => {
        minutes.textContent = validateTimeInput(Number(minutes.textContent) + 5)
    })

}
