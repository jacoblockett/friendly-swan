const mp3 = document.querySelector(".song")
const ryan1 = document.querySelector(".ryan1")
const ryan2 = document.querySelector(".ryan2")

const handleClick = () => {
  ryan1.classList.remove("hidden")
  ryan2.classList.remove("hidden")
  mp3.volume = 0.1
  mp3.play()

  setInterval(() => {
    const newColor = Math.floor(Math.random() * 16777215).toString(16)

    document.querySelector("body").style.backgroundColor = `#${newColor}`
  }, 1000)
}
