window.onload = () => {
    const navigator = document.getElementById('navigator')
    const nav = document.createElement('nav')
    nav.classList.add('navbar')

    nav.innerHTML = `
    <div class="logo">
        <img src="./img/logojcdsite-220x95.png" alt="logo">
        <span id="berger" class="material-symbols-outlined berger">
            menu
        </span>
    </div>
   <div id="menu-items" class="none"> 
        <ul class = "display">
            <a href="/">
                <li>
                    <p>หน้าหลัก<br>home</p>
                </li>
            </a>
            <a href="/contact">
                <li>
                    <p>ผู้ติดต่อ<br>contacts</p>
                </li>
            </a>
            <a href="/media-offer">
                <li>
                    <p>ข้อเสนอสื่อโฆษาณา<br>airport<br><img src="./img/icon_apTh.png" alt="th"></p>
                </li>
            </a>
            <a href="/media-offer">
                <li>
                    <p>airport<br>media offer<br><img src="./img/icon_apEn.png" alt="eng"></p>
                </li>
            </a>
        </ul>
    </div>
    `
    navigator.appendChild(nav)

    // Eveint click berger menu

    const berger = document.getElementById('berger')

    const bergerClick = () => {
        const listItems = document.querySelector('#menu-items')
        listItems.classList.toggle('none')
    }

    berger.addEventListener('click', bergerClick)

    // footer 
    const footer = document.querySelector('#footer')
    footer.innerHTML = `
        <div class="page-footer">
            <p class="copyrighr">JCDecaux copyrighr&copy;2020</p>
            <a href="/pdpa-internal" <p class="prolicy">นโยบายส่วนบุคคล</p></a>
        </div>
 `

    // Changed language 

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


    //about-picture box
     const aboutItems = document.getElementById('about-itemsx')
     aboutItems.innerHTML="TOYOTA"
     


}


//about page
/*window.onload = ()=>{

     //about-picture box
     const aboutItems = document.getElementById('about-itemsx')
     aboutItems.innerHTML="TOYOTA"
     aboutItems.addEventListener("click",()=>{
         alert('ksdjfljsdlkjflksd')
     })
}*/