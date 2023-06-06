import { useEffect, useRef } from "react"

const useDropdownOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
        const handleClick = (event) => {
            const dropdown = ref.current.parentNode.querySelector(".dropdown");
            if (ref.current && !ref.current.contains(event.target) && dropdown !== event.target) {
                callback();
            }
        };

        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick, true);
        }
        // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
    }, [ref]);

    return ref;
}

export default useDropdownOutsideClick