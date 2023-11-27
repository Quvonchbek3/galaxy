window.addEventListener("load", function () {
  let body = document.querySelector("body"),
    universe = document.getElementById("universe"),
    solarys = document.getElementById("solar-system");

  const init = function () {
    body.classList.remove("view-2D", "opening")
    body.classList.remove("view-3D")

    setTimeout(() => {
        body.classList.remove("hide-UI")
        body.classList.remove("set-speed")
    },2000)
  }

  const setView = function (view) {
    universe.className = view
}

document.getElementById("toggle-data").addEventListener("click", (e) =>{
    e.preventDefault()
    body.classList.toggle("data-open")
    body.classList.toggle("data-close")
})

document.getElementById("toggle-controls").addEventListener("click", (e) =>{
    e.preventDefault()
    body.classList.toggle("controls-open")
    body.classList.toggle("controls-close")
})

const dataLinks = document.querySelectorAll("#data a")
dataLinks.forEach((link) => {
    link.addEventListener("click", function() {
        const ref = this.getAttributr("class");
        solarys.className  = ref
        const siblings = this.parentNode.querySelectorAll("a")
        siblings.forEach(siblings => {
            siblings.classList.remove("active")
        })
        this.classList.add("active")
        e.preventDefault()
    })
})

});
