import { createElement, cloneElement } from "react";

import "./item.sass";

const Item = ({ element, text, href, icon, onClick }) => {
    return (
        cloneElement(element,
            { className: "dropdown-item", to: href ? href : null, onClick: onClick },
            createElement(icon),
            createElement("span", null, text)
        )
    );
}

export default Item