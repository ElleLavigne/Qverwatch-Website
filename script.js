function changeScene(page) {
  const screens = document.querySelectorAll(".screen")
  const selectedScreen = document.querySelector("."+page)
  for(const screen of screens) {
    if(!screen.classList.contains('hide')){
      screen.classList.add('hide')
    }
  }

  selectedScreen.classList.remove('hide')
}

// const screen1 = document.querySelector(".screen-home")
// if (screen1.classList.contains("hide")) {
//   screen1.classList.remove("hide")
// } else {
//   screen1.classList.add("hide")
// } 