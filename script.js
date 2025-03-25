function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light2.png")
    img.setAttribute("alt", "foto minha com camisa azul")
  } else {
    img.setAttribute("src", "./assets/avatar4.png")
    img.setAttribute("alt", "foto minha com camisa vermelha")
  }
}
