import { useHttp } from "../hooks";

const useAIChatStatsService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = "http://16.171.76.4:8080/api/v1/ai-chat-stats";

    const getAIChatStats = async () => {
        const response = await request(_apiBase, "GET");

        if (response.data.length === 0) {
            return await _initAIChatStats();
        }

        return await response.data;
    }

    const createAIChatStats = async (messagesCount, requestCharactersCount, responseCharactersCount, dialogDownloadsCount) => {
        const response = await request(_apiBase, "POST", JSON.stringify({ messagesCount, requestCharactersCount, responseCharactersCount, dialogDownloadsCount }));

        return await response.data;
    }

    const updateMessagesCount = async (messagesCount) => {
        const response = _updateAIChatStats({
            messagesCount: messagesCount,
            requestCharactersCount: 0,
            responseCharactersCount: 0,
            dialogDownloadsCount: 0
        });

        return await response.data;
    }

    const updateRequestCharactersCount = async (requestCharactersCount) => {
        const response = _updateAIChatStats({
            messagesCount: 0,
            requestCharactersCount: requestCharactersCount,
            responseCharactersCount: 0,
            dialogDownloadsCount: 0
        });

        return await response.data;
    }

    const updateResponseCharactersCount = async (responseCharactersCount) => {
        const response = _updateAIChatStats({
            messagesCount: 0,
            requestCharactersCount: 0,
            responseCharactersCount: responseCharactersCount,
            dialogDownloadsCount: 0
        });

        return await response.data;
    }

    const updateDialogDownloadsCount = async (dialogDownloadsCount) => {
        const response = _updateAIChatStats({
            messagesCount: 0,
            requestCharactersCount: 0,
            responseCharactersCount: 0,
            dialogDownloadsCount: dialogDownloadsCount
        });

        return await response.data;
    }

    const _initAIChatStats = async () => {
        const response = await createAIChatStats(0, 0, 0, 0);

        return await response.data;
    }

    const _updateAIChatStats = async (stats) => {
        const response = await request(_apiBase, "PUT", JSON.stringify(stats));

        return await response.data;
    }

    return { loading, error, clearError, getAIChatStats, createAIChatStats, updateMessagesCount, updateRequestCharactersCount, updateResponseCharactersCount, updateDialogDownloadsCount };
}

export default useAIChatStatsService;