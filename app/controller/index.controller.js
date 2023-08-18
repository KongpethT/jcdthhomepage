exports.index = (req, res) => {

    res.render('index', {
        title: 'JCDecaux Thailand | Home'
    })
}

exports.contact = (req, res) => {
    const id = req.params['id']
    let eng = "show"
    let th = "hidden"

    if (id === 'en') {
        eng = "show"
        th = "hidden"
    } else if (id === 'th') {
        eng = "hidden"
        th = "show"
    }

    res.render('contact', {
        title: 'JCDecaux Thailand | Contact',
        isEN: eng,
        isTH: th,
    })
}

exports.about = (req, res) => {

    res.render('about', {
        title: "JCDecaux Thailand | About US",
    })
}

exports.product = (req, res) => {

    res.render('product', {
        title: "JCDecaux Thailand | Product",
    })
}

exports.policy = (req, res) => {
    const id = req.params['id']
    let internal, external, cctv = ""
    let text = ""
    if (id === "internal") {
        text = "Private Policy For Internal Stakeholder"
        internal = "items item-2 show"
        external = "hidden"
        cctv = "hidden"
    } else if (id === "external") {
        text = "Privacy Policy for External Stakeholder"
        internal = "hidden"
        external = "items item-2 show"
        cctv = "hidden"
    } else if (id === "cctv") {
        text = "CCTY Privacy Notice"
        internal = "hidden"
        external = "hidden"
        cctv = "items item-2 show"
    } else {
        text = "Private Policy For Internal Stakeholder"
        internal = "show"
        external = "hidden"
        cctv = "hidden"
    }

    res.render('policy', {
        title: "JCDecaux Thailand | Personal Data Protection Act",
        columns: text,
        internal,
        external,
        cctv,
    })
}