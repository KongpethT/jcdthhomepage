window.onload = () => {
    // Eveint click berger menu

    const berger = document.getElementById('berger')

    const bergerClick = () => {
        const listItems = document.querySelector('#menu-items')
        listItems.classList.toggle('none')
    }

    berger.addEventListener('click', bergerClick)

}


