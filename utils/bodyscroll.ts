export const stop = (cb: VoidFunction) => {
    const body = getHTMLBody()
    body.style.overflow = "auto"
    cb()

}

export const resume = (cb: VoidFunction) => {
    const body = getHTMLBody()
    body.style.overflow = "hidden"
    cb()
}

const getHTMLBody = () => {
    return document.querySelector("body") as HTMLBodyElement
}

