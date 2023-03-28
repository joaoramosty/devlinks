function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // selecionar a tag img
    const img = document.querySelector("#profile")
    // se tiver light mode , adicionar a imagem light
    img.setAttribute('src','./assests/avatar-sun.png')
    // se tiver sem light mode , manter a imagem night mode
    img.setAttribute('src','./assests/avatar.png')
  }