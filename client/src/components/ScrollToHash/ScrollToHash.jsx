import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const [hashElement, setHashElement] = useState(null);

    let location = useLocation();

    useEffect(() => {
        let hash = location.hash;

        if (hash) {
            let id = hash.slice(1);
            let element = document.getElementById(id);
            setHashElement(element);
        }
    }, [location]);

    useEffect(() => {
        if (hashElement) {
            hashElement.scrollIntoView({
                behavior: "smooth",
                inline: "nearest"
            });

            setHashElement(null);
        }
    }, [hashElement]);
}

export default ScrollToHash