let boton = document.querySelector(".reproductor")

boton.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "../audio/Pineapple - JayJen [ MÚSICA SIN COPYRIGHT ] (mp3cut.net).mp3")
    etiquetaAudio.play()
})