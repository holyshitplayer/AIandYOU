import React from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import { DocsNavigation, DocsLink } from "../components";
import { docsLinks } from "../constants";

const Docs = () => {
    const { t } = useTranslation();

    const renderedMenuLinks = [];
    for (let link of docsLinks) {
        renderedMenuLinks.push(<DocsLink className="docs-primary-link" href={link.href} text={t(link.titleKey)} icon={link.icon} />);
        for (let innerLink of link.innerLinks) {
            renderedMenuLinks.push(<DocsLink className="docs-secondary-link" href={innerLink.href} text={t(innerLink.titleKey)} />);
        }
    }

    return (
        <>
            <Helmet>
                <title>{t("metaDocsTitle")} · AI & YOU</title>
            </Helmet>

            <section className="docs">
                <div className="container">
                    <div className="docs-columns">
                        <aside className="docs-menu">
                            <DocsNavigation items={renderedMenuLinks} />
                        </aside>
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Docs