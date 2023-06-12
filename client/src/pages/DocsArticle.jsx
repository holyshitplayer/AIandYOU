import { DocsContent } from "../components"
import { useTranslation } from "react-i18next";

const DocsArticle = ({ pageContent }) => {
    const { t } = useTranslation();

    return (
        <DocsContent
            title={t(pageContent.titleKey)}
            description={t(pageContent.descriptionKey)}
            headerBg={pageContent.background}
            chapters={pageContent.chapters}
        />
    );
}

export default DocsArticle