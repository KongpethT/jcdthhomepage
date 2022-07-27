const Outsite = (props) => {
    document.getElementById('root').classList.add('hident')
    const { link } = props
    window.location.href = link
    return null
}

export default Outsite