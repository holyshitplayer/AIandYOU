import { useEffect } from "react";
import { CloseIcon } from "../../assets";

import "./modal.sass";

const Modal = ({ title, children, isOpen, setIsOpen }) => {

    const handleEscape = (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            
            setIsOpen(false);
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden";

            document.addEventListener("keydown", handleEscape);

            return () => {
                document.removeEventListener("keydown", handleEscape);
            }
        } else {
            document.body.style.overflowY = "auto";
        }
        // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
    }, [isOpen]);



    return <>
        <div className={`modal-overlay${isOpen ? " active" : ""}`}></div>
        <div className={`modal-wrapper${isOpen ? " active" : ""}`} onClick={() => setIsOpen(false)}>
            <div className={"modal"} onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                    <button className="modal-close" onClick={() => setIsOpen(false)}>
                        <CloseIcon />
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    </>;
}

export default Modal