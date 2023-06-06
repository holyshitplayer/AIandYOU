import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { TitleLink } from "..";

import "./content.sass";

const Content = ({ title, description, headerBg, chapters }) => {
    const { t } = useTranslation();

    const renderValues = (value, idx) => {
        switch (value.type) {
            case "p":
                return <p key={idx} className="chapter-text">{t(value.valueKey)}</p>
            case "ol":
                return (
                    <ol key={idx} className="chapter-text">
                        {t(value.valueKey).split("@break").map((value, idx) => <li key={idx}>{value}</li>)}
                    </ol>
                );
            case "img":
                return <img key={idx} className="chapter-image" src={value.src} alt={value.alt} />
            case "a":
                return <a key={idx} className="chapter-link" href={value.href} target="_blank" rel="noopener noreferrer">{t(value.valueKey)}</a>
            case "link":
                return <NavLink key={idx} to={value.href} className="chapter-link">{t(value.valueKey)}</NavLink>
            default:
                return <p key={idx} className="chapter-text">{t(value.valueKey)}</p>
        }
    }

    return (
        <>
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
                            <TitleLink type="h4" text={t(chapter.titleKey)} className="chapter-title" hash={chapter.id} />
                            {chapter.content.map((value, idx) => renderValues(value, idx))}
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default Content