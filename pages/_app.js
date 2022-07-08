import "../styles/globals.css"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
    // add threeScript
    useEffect(() => {
        // mount
        const threeScript = document.createElement("script")
        threeScript.setAttribute("id", "threeScript")
        threeScript.setAttribute(
            "src",
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        )
        document.getElementsByTagName("head")[0].appendChild(threeScript)

        // unmount
        return () => {
            if (threeScript) {
                threeScript.remove()
            }
        }
    }, [])

    return <Component {...pageProps} />
}

export default MyApp
