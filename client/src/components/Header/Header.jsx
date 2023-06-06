import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Dropdown, DropdownItem } from "../";
import { headerLinks } from "../../constants";
import { useTheme } from "../../hooks";

import {
    LanguagesIcon,
    LanguageIcon,
    Logo,
    MenuIcon,
    ThemeIcon,
    DarkThemeIcon,
    LightThemeIcon
} from "../../assets";

import "./header.sass";

const Header = () => {
    const { t, i18n } = useTranslation();
    const { changeTheme } = useTheme();

    return (
        <header>
            <div className="container">
                <div className="header-items">
                    <Dropdown
                        extraClassName="header-menu"
                        trigger={<button className="header-button">
                            <MenuIcon />
                            <span>{t("menuButton")}</span>
                        </button>}
                        items={headerLinks.map(({ titleKey, href, icon }) => (
                            <DropdownItem element={<Link />} href={href} text={t(titleKey)} icon={icon} />
                        ))}
                    />
                    <Link to="/" className="header-logo">
                        <Logo />
                    </Link>
                    <div className="header-functions">
                        <Dropdown
                            trigger={<button className="header-button">
                                <LanguagesIcon />
                                <span>{t("languagesButton")}</span>
                            </button>}
                            items={[
                                <DropdownItem element={<button />} text={t("englishLanguageButton")} onClick={() => i18n.changeLanguage("en")} icon={LanguageIcon} />,
                                <DropdownItem element={<button />} text={t("ukrainianLanguageButton")} onClick={() => i18n.changeLanguage("uk")} icon={LanguageIcon} />
                            ]}
                        />
                        <Dropdown
                            trigger={<button className="header-button">
                                <ThemeIcon />
                                <span>{t("themesButton")}</span>
                            </button>}
                            items={[
                                <DropdownItem element={<button />} text={t("darkThemeButton")} icon={DarkThemeIcon} onClick={() => changeTheme("dark")} />,
                                <DropdownItem element={<button />} text={t("lightThemeButton")} icon={LightThemeIcon} onClick={() => changeTheme("light")} />
                            ]}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header