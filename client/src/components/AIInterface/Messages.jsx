import { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";

import { Message } from "./";

import "./messages.sass";
import Spinner from "../Spinner/Spinner";

const ScrollToBottom = lazy(() => import("react-scroll-to-bottom"));

const Messages = ({ type, error, chatLog, setShareImageModalOpened, setImageToShare }) => {
    const { t } = useTranslation();

    const startMessage = type === "chat" ? t("aiChatStartMessage") : t("aiImagesStartMessage");

    const errorMessage = error && <p className="ai-interface-placeholder">{t("aiChatErrorMessage")}</p>;
    const placeholder = (!error && chatLog.length === 0) && <p className="ai-interface-placeholder">{startMessage}</p>;
    const messages = (!error && chatLog.length !== 0) ? chatLog.map((item, index) => (
        <Message key={index} type={item.type} author={item.author} prompt={item.prompt} message={item.message} setImageToShare={setImageToShare} setShareImageModalOpened={setShareImageModalOpened} />
    )) : null;

    return (
        <Suspense fallback={<Spinner />}>
            <ScrollToBottom className="scroll-to-bottom">
                {errorMessage}
                {placeholder}
                {messages}
            </ScrollToBottom>
        </Suspense>
    );
};

export default Messages