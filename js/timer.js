export function Timer({
    minutes,
    seconds,
    decimals,
    pauseBtn,
    playBtn,
    alarmAudio
}) {

    function updateDisplay([min, sec, dec]) {
        if (min != undefined) {
            minutes.textContent = String(min).padStart(2, "0")
        }
        if (sec != undefined) {
            seconds.textContent = String(sec).padStart(2, "0")
        }
        decimals.textContent = dec
    }
    // Timer logic functions
    let timer
    function startTimer() {
        timer = setInterval(() => {
            let deci = decimals.textContent
            if (deci > 0) {
                deci--
                return updateDisplay([, , deci])
            }
            else if (deci <= 0) {
                let secs = seconds.textContent
                if (secs > 0) {
                    secs--
                    deci = 9
                    return updateDisplay([, secs, deci])
                }
                else if (secs <= 0) {
                    let mins = minutes.textContent
                    if (mins > 0) {
                        mins--
                        secs = 59
                        deci = 9
                        return updateDisplay([mins, secs, deci])
                    }
                    else {
                        alarmAudio.play()
                        return stopTimer()
                    }
                }
            }
        }, 100)
    }

    function pauseTimer() {
        clearInterval(timer)
    }

    function stopTimer() {
        pauseBtn.classList.add("hide")
        playBtn.classList.remove("hide")
        pauseTimer()
    }

    return {
        startTimer,
        pauseTimer,
        stopTimer
    }
}