import React from "react";



const Media_offer_en = () => {
    return (
        <>
            <div className="container" style={{ height: "75vh" }}>
                <iframe
                    src="https://jcdecaux.sharepoint.com/sites/Asia-ExternalShare/_layouts/15/embed.aspx?UniqueId=d900a54a-0a1f-48a4-99aa-ffc2aa9fea08"
                    width="100%"
                    height="94%"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen
                    title="mediaoffer.pdf"></iframe>
            </div>
        </>
    )
}

const Media_offer_th = () => {
    return (
        <>
            <div className="container" style={{ height: "75vh" }}>
                <iframe
                    src="https://jcdecaux.sharepoint.com/sites/Asia-ExternalShare/_layouts/15/embed.aspx?UniqueId=d900a54a-0a1f-48a4-99aa-ffc2aa9fea08"
                    width="100%"
                    height="94%"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen
                    title="mediaoffer.pdf"></iframe>
            </div>
        </>
    )
}

const media = {
    eng: Media_offer_en,
    th: Media_offer_th
}
export { media }