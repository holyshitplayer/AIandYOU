import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Buttons, Messages, FormField, ShareModal, CommunityModal } from "./";
import { useOpenaiService } from "../../services";
import { chatLogStorage, downloadAsJson } from "../../utils";

import "./aiInterface.sass";

const AIInterface = ({ type, updateStats }) => {
    const { t } = useTranslation();

    const [chatLog, setChatLog] = useState([]);
    const [storage, setStorage] = useState(chatLogStorage(type));

    const [shareImageModalOpened, setShareImageModalOpened] = useState(false);
    const [imageToShare, setImageToShare] = useState({});
    const [communityModalOpened, setCommunityModalOpened] = useState(false);

    const { loading, error, getOpenAiAnswer } = useOpenaiService();

    useEffect(() => {
        setStorage(chatLogStorage(type));
    }, [type]);

    useEffect(() => {
        setChatLog(storage.getChatLogStorage());
    }, [storage]);

    useEffect(() => {
        if (type === "chat" && chatLog.length !== 0) storage.updateChatLogStorage(JSON.stringify(chatLog));
        // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
    }, [chatLog]);

    const onFormSubmit = (prompt) => {
        setChatLog(chatLog => [...chatLog, { author: t("aiChatUserAuthor"), type: "chat", message: prompt }]);

        if (type === "chat") {
            updateStats.messagesCount(1);
            updateStats.requestCharactersCount(prompt.length);
        } else if (type === "images") {
            updateStats.requestsCount(1);
        }

        getOpenAiAnswer(type, prompt)
            .then((answer) => {
                setChatLog(chatLog => [...chatLog, { author: "OpenAI", type: type, prompt: prompt, message: answer }]);

                if (type === "chat") {
                    updateStats.responseCharactersCount(answer.length);
                } else if (type === "images") {
                    updateStats.imagesGeneratedCount(4);
                }
            })
            .catch(cleanChatLog);
    }

    const cleanChatLog = () => {
        setChatLog([]);
        storage.deleteChatLogStorage();
    }

    const downloadChatLog = () => {
        const messages = chatLog.map(({ author, message }) => (
            {
                user: author === "OpenAI" ? "openai" : "user",
                message: message
            }
        ));

        downloadAsJson(messages, `ai-${type}-dialog`);

        if (type === "chat") {
            updateStats.dialogDownloadsCount(1);
        }
    }

    const placeholder = type === "chat" ? t("aiChatPlaceholder") : t("aiImagesPlaceholder");

    return <>
        <div className="ai-interface">
            <div className="ai-interface-content">
                <Messages type={type} error={error} chatLog={chatLog} setImageToShare={setImageToShare} setShareImageModalOpened={setShareImageModalOpened} />
            </div>
            <div className={`ai-interface-control-panel ${type}`}>
                <FormField type={type} loading={loading} error={error} onFormSubmit={onFormSubmit} placeholder={placeholder} />
                <Buttons type={type} setShareImageModalOpened={setShareImageModalOpened} setCommunityModalOpened={setCommunityModalOpened} downloadChatLog={downloadChatLog} cleanChatLog={cleanChatLog} chatLogLength={chatLog.length} />
            </div>
        </div>

        <ShareModal isOpen={shareImageModalOpened} setIsOpen={setShareImageModalOpened} prompt={imageToShare.prompt} image={imageToShare.image} cleanChatLog={cleanChatLog} updateCommunityPostsCount={(count) => updateStats.communityPostsCount(count)} />
        <CommunityModal isOpen={communityModalOpened} setIsOpen={setCommunityModalOpened} updateImageDownloadsCount={(count) => updateStats.imageDownloadsCount(count)} />
    </>
}

export default AIInterface