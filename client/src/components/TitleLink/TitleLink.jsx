import { createElement } from "react";
import { useTranslation } from "react-i18next";
import copy from "copy-to-clipboard";

import { useAlert } from "../../hooks";

import { CopyTitleLinkIcon } from "../../assets";

import "./titleLink.sass";

const TitleLink = ({ type, className, text, href, hash }) => {
    const { t } = useTranslation();
    const { setAlert } = useAlert();

    href = !href ? window.location.origin + window.location.pathname : href;

    const handleClick = () => {
        copy(hash ? `${href}#${hash}` : href);
        setAlert(t("linkCopied"));
    }

    return createElement(type,
        { className: `title-link ${className}`, onClick: handleClick },
        createElement("span", null, text),
        <CopyTitleLinkIcon />
    );
};

export default TitleLink