import "./bgSounds.js"
import { TimeControls } from "./timeControls.js"
import { Timer } from "./timer.js"
import { ChangeTheme } from "./themes.js"

const root = document.querySelector(":root")
const playBtn = document.querySelector(".play")
const pauseBtn = document.querySelector(".pause")
const stopBtn = document.querySelector(".stop")
const setTimeBtn = document.querySelector(".setTime")
const decTimeBtn = document.querySelector(".decreaseTime")
const incTimeBtn = document.querySelector(".increaseTime")

const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const decimals = document.querySelector(".decimalSecs")

const sunToDarkMode = document.querySelector(".lightMode")
const moonToLightMode = document.querySelector(".darkMode")

let initialMinutes = minutes.textContent
let initialSeconds = seconds.textContent
let initialDecimals = decimals.textContent

const theme = ChangeTheme({
    root,
    sunToDarkMode,
    moonToLightMode
})

const timer = Timer({
    minutes,
    seconds,
    decimals,
    pauseBtn,
    playBtn
})

const controls = TimeControls({
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
})
