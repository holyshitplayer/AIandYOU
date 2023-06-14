import { useState, useEffect } from "react";

import { ScrollToTopIcon } from "../../assets";

import "./scrollToTop.sass";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkScrollToTop = () => {
            if (!isVisible && window.scrollY > 475) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", checkScrollToTop);
        return () => window.removeEventListener("scroll", checkScrollToTop);
        // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-to-top">
                    <div>
                        <ScrollToTopIcon />
                    </div>
                </button>
            )}
        </>
    )
}

export default ScrollToTop