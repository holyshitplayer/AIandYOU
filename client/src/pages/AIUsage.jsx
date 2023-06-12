import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import { TitleLink, AIInterface, AIUsageStats } from "../components";

const AIUsage = ({ pageContent, type }) => {
    const { t } = useTranslation();

    const [updateStats, setUpdateStats] = useState({});

    return (
        <>
            <Helmet>
                <title>{t(pageContent.titleKey)} · AI & YOU</title>
            </Helmet>

            <section className="ai-usage">
                <div className="container">
                    <div className="ai-usage-columns">
                        <div className="ai-usage-info">
                            <div className="ai-usage-header">
                                <TitleLink type="h3" text={t(pageContent.titleKey)} className="ai-usage-title" />
                                <p className="ai-usage-description">{t(pageContent.descriptionKey)}</p>
                                <p className="ai-usage-description">{t(pageContent.docsCaptionKey)}</p>
                                <NavLink to={pageContent.docsLink.href} className="ai-usage-link">{t(pageContent.docsLink.valueKey)}</NavLink>
                                <AIUsageStats type={type} setUpdateStats={setUpdateStats} />
                            </div>
                        </div>
                        <AIInterface type={type} updateStats={updateStats} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AIUsage