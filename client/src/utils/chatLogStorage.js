const chatLogStorage = (type) => {
    const getChatLogStorage = () => {
        const currentChatLogStorage = JSON.parse(window.localStorage.getItem(`${type}Log`));
        return currentChatLogStorage ? currentChatLogStorage : [];
    }

    const updateChatLogStorage = (chatLog) => {
        window.localStorage.removeItem(`${type}Log`);
        window.localStorage.setItem(`${type}Log`, chatLog);
    }

    const deleteChatLogStorage = () => {
        window.localStorage.removeItem(`${type}Log`);
    }

    return { getChatLogStorage, updateChatLogStorage, deleteChatLogStorage };
}

export default chatLogStorage