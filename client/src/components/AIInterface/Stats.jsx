import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useAIChatStatsService, useAIImagesStatsService } from "../../services";

import "./stats.sass";

const Stats = ({ type, setUpdateStats }) => {
    const { t } = useTranslation();

    const [stats, setStats] = useState({});

    const {
        error: aiChatError,
        getAIChatStats,
        updateMessagesCount,
        updateRequestCharactersCount,
        updateResponseCharactersCount,
        updateDialogDownloadsCount
    } = useAIChatStatsService();

    const {
        error: aiImagesError,
        getAIImagesStats,
        updateRequestsCount,
        updateImagesGeneratedCount,
        updateCommunityPostsCount,
        updateImageDownloadsCount
    } = useAIImagesStatsService();

    useEffect(() => {
        setUpdateStats({
            messagesCount: updateMessagesCount,
            requestCharactersCount: updateRequestCharactersCount,
            responseCharactersCount: updateResponseCharactersCount,
            dialogDownloadsCount: updateDialogDownloadsCount,
            requestsCount: updateRequestsCount,
            imagesGeneratedCount: updateImagesGeneratedCount,
            communityPostsCount: updateCommunityPostsCount,
            imageDownloadsCount: updateImageDownloadsCount
        });
        // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        switch (type) {
            case "chat":
                getAIChatStats()
                    .then(data => {
                        setStats(...data);
                    });
                break;
            case "images":
                getAIImagesStats()
                    .then(data => {
                        setStats(...data);
                    });
                break;
            default:
                getAIChatStats()
                    .then(data => {
                        setStats(...data);
                    });
                break;
        }
        // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
    }, [type]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (type === "chat") {
                getAIChatStats()
                    .then(data => {
                        setStats(...data);
                    });
            } else if (type === "images") {
                getAIImagesStats()
                    .then(data => {
                        setStats(...data);
                    });
            }
        }, 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
    }, [JSON.stringify(stats)]);

    const renderStats = () => {
        if (type === "chat") {
            return <>
                <div className="ai-usage-stat">
                    <p className="ai-usage-stat-title">{t("aiChatMessagesCountTitle")}</p>
                    <p className="ai-usage-stat-value">{stats.messagesCount ?? 0}</p>
                </div>
                <div className="ai-usage-stat">
                    <p className="ai-usage-stat-title">{t("aiChatRequestCharactersCountTitle")}</p>
                    <p className="ai-usage-stat-value">{stats.requestCharactersCount ?? 0}</p>
                </div>
                <div className="ai-usage-stat">
                    <p className="ai-usage-stat-title">{t("aiChatResponseCharactersCountTitle")}</p>
                    <p className="ai-usage-stat-value">{stats.responseCharactersCount ?? 0}</p>
                </div>
                <div className="ai-usage-stat">
                    <p className="ai-usage-stat-title">{t("aiChatDialogDownloadsCountTitle")}</p>
                    <p className="ai-usage-stat-value">{stats.dialogDownloadsCount ?? 0}</p>
                </div>
            </>
        } else if (type === "images") {
            return <>
                <div className="ai-usage-stat">
                    <p className="ai-usage-stat-title">{t("aiImagesRequestsCountTitle")}</p>
                    <p className="ai-usage-stat-value">{stats.requestsCount ?? 0}</p>
                </div>
                <div className="ai-usage-stat">
                    <p className="ai-usage-stat-title">{t("aiImagesImagesGeneratedCountTitle")}</p>
                    <p className="ai-usage-stat-value">{stats.imagesGeneratedCount ?? 0}</p>
                </div>
                <div className="ai-usage-stat">
                    <p className="ai-usage-stat-title">{t("aiImagesCommunityPostsCountTitle")}</p>
                    <p className="ai-usage-stat-value">{stats.communityPostsCount ?? 0}</p>
                </div>
                <div className="ai-usage-stat">
                    <p className="ai-usage-stat-title">{t("aiImagesImageDownloadsCountTitle")}</p>
                    <p className="ai-usage-stat-value">{stats.imageDownloadsCount ?? 0}</p>
                </div>
            </>
        }
    }

    const errorMessage = (aiChatError || aiImagesError) && <p className="ai-usage-stats-error">Щось пішло не так... Спробуйте оновити сторінку</p>;

    return (
        <div className="ai-usage-stats">
            {errorMessage}
            {(!aiChatError && !aiImagesError) && renderStats()}
        </div>
    )
}

export default Stats