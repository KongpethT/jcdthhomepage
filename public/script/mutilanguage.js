window.onload = () => {
    const en = document.getElementById('english')
    const th = document.getElementById('thailand')

    const switchEng = document.getElementById('en')
    const switchTh = document.getElementById('th')

    switchEng.addEventListener('click', () => {

        en.classList.remove('hidden')
        th.classList.add('hidden')
    })

    switchTh.addEventListener('click', () => {

        th.classList.remove('hidden')
        en.classList.add('hidden')
    })

}