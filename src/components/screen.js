const Full_screen = () => {
    let elem = document.getElementById("full_screen")
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

let is_zoom = false
const Zoom = () => {
    let elem = document.getElementById("full_screen")
    let zooms = document.querySelectorAll(".zoom")
    if (is_zoom === false) {
        is_zoom = true
        elem.classList.remove("show-auto")
        elem.classList.add("show-single")
        for (let i = 0; i < zooms.length; i++) {
            zooms[i].classList.add("zoom-out")
        }
    } else {
        elem.classList.add("show-auto")
        elem.classList.remove("show-single")
        is_zoom = false
        for (let i = 0; i < zooms.length; i++) {
            zooms[i].classList.remove("zoom-out")
        }
    }

}

const screen = {
    full: Full_screen,
    zoom: Zoom
}

export { screen }