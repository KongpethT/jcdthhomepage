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
    let zooms = document.querySelectorAll(".zoom")
    if (is_zoom === false) {
        is_zoom = true
        for (let i = 0; i < zooms.length; i++) {
            zooms[i].classList.add("zoom-in")
        }
    } else {
        is_zoom = false
        for (let i = 0; i < zooms.length; i++) {
            zooms[i].classList.remove("zoom-in")
        }
    }
}

const screen = {
    full: Full_screen,
    zoom: Zoom
}

export { screen }