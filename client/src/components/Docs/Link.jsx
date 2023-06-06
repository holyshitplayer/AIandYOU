import { createElement } from "react";
import { NavLink } from "react-router-dom";

import "./link.sass";

const Link = ({ className, text, href, icon }) => {
    const isCurrentPage = (href) => {
        const currentPagePath = window.location.pathname;
        const currentPageHash = window.location.hash;

        return currentPagePath + currentPageHash === href;
    }

    return (
        <NavLink to={href} className={() => isCurrentPage(href) ? `${className} current` : className}>
            {icon ? createElement(icon) : null}
            <span>{text}</span>
        </NavLink>
    )
}

export default Link