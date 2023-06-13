import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { footerLinks } from "../../constants";

import { QRCode } from "../../assets";

import "./footer.sass";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="container">
                <div className="footer-items">
                    <div className="quick-links">
                        <p className="quick-links-title footer-title">{t("quickLinks")}</p>
                        <nav className="footer-menu">
                            <ul>
                                {footerLinks.map((link, idx) => (
                                    <li key={idx}><Link to={link.href} className="quick-link">{t(link.titleKey)}</Link></li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="copyright">
                        <QRCode className="qrcode" />
                        <div className="copyright-info">
                            <p className="copyright-title footer-title">{t("copyrightTitle")}</p>
                            <p className="copyright-text">{t("copyrightText")}, {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer