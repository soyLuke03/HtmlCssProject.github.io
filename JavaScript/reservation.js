let botonReturn = document.getElementById("return");

botonReturn.addEventListener('click', (e) => {
e.preventDefault()
   // location.replace("../index.html")
   
})

let span = document.getElementById("spanSubmit");

window.addEventListener('submit', (e) => {
    e.preventDefault()
    span.classList.remove("enviado-true")

    setTimeout(() => {
        span.classList.add("enviado-true")
    },5000)
   
})


