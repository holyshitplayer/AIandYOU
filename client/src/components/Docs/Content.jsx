import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollToBottom from "react-scroll-to-bottom";

import { ScrollToTop, TitleLink } from "..";

import "./content.sass";

const Content = ({ title, description, headerBg, chapters }) => {
    const { t } = useTranslation();

    const renderValues = (value, idx) => {
        switch (value.type) {
            case "p":
                return <p key={idx} className="chapter-text">{t(value.valueKey)}</p>;
            case "ol":
                return (
                    <ol key={idx} className="chapter-text">
                        {t(value.valueKey).split("@break").map((value, idx) => <li key={idx}>{value}</li>)}
                    </ol>
                );
            case "img":
                return <img key={idx} className="chapter-image" src={value.src} alt={value.alt} />;
            case "imgWithCaption":
                return (
                    <div key={idx} className="chapter-image-with-caption">
                        <img key={idx} className="chapter-image" src={value.src} alt={value.alt} />
                        <p className="chapter-caption">{t(value.valueKey)}</p>
                    </div>
                );
            case "contact":
                return (
                    <div key={idx} className="chapter-contact">
                        <p className="chapter-contact-title">{t(value.titleKey)}:</p>
                        {value.contactType === "telegram"
                        ? <a className="chapter-contact-value" href={`https://t.me/${value.contactValue}`} target="_blank" rel="noopener noreferrer">@{value.contactValue}</a>
                        : value.contactType === "phone"
                        ? <a className="chapter-contact-value" href={`tel:${value.contactValue.replace(/\s/g, '')}`}>{value.contactValue}</a>
                        : <a className="chapter-contact-value" href={`mailto:${value.contactValue}`}>{value.contactValue}</a>}
                    </div>
                );
            default:
                return <p key={idx} className="chapter-text">{t(value.valueKey)}</p>;
        }
    }

    const renderChapterLink = (type, href, valueKey) => {
        switch (type) {
            case "a":
                return <a className="chapter-link" href={href} target="_blank" rel="noopener noreferrer">{t(valueKey)}</a>;
            case "link":
                return <NavLink to={href} className="chapter-link interface">{t(valueKey)}</NavLink>;
            default:
                return <a className="chapter-link" href={href} target="_blank" rel="noopener noreferrer">{t(valueKey)}</a>;
        }
    }

    return (
        <ScrollToBottom>
            <Helmet>
                <title>{title} · AI & YOU</title>
            </Helmet>
            
            <div className="docs-content">
                <div className="docs-header" style={{ backgroundImage: `url(${headerBg})` }}>
                    <TitleLink type="h3" text={title} className="docs-title" />
                    <p className="docs-description">{description}</p>
                </div>
                <div className="docs-body">
                    {chapters.map((chapter) => (
                        <div className="docs-chapter" key={chapter.id} id={chapter.id}>
                            <div className="chapter-header">
                                <TitleLink type="h4" text={t(chapter.titleKey)} className="chapter-title" hash={chapter.id} />
                                {chapter.link ? renderChapterLink(chapter.link.type, chapter.link.href, chapter.link.valueKey) : null}
                            </div>
                            {chapter.content.map((value, idx) => renderValues(value, idx))}
                        </div>
                    ))}
                </div>
                <ScrollToTop />
            </div>
        </ScrollToBottom>
    );
};

export default Content