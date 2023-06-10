import { useHttp } from "../hooks";

const useOpenaiService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = "http://16.171.76.4:5000/api/v1/";

    const getOpenAiAnswer = async (type, prompt) => {
        switch (type) {
            case "chat":
                return await _getChatAnswer(prompt);
            case "images":
                return await _getImagesAnswer(prompt);
            default:
                return await _getChatAnswer(prompt);
        }
    }

    const _getChatAnswer = async (prompt) => {
        const response = await request(`${_apiBase}chat`, "POST", JSON.stringify({ prompt: prompt }));

        return await response.message;
    }

    const _getImagesAnswer = async (prompt) => {
        const response = await request(`${_apiBase}images`, "POST", JSON.stringify({ prompt: prompt }));

        return await response.images;
    }

    return { loading, error, clearError, getOpenAiAnswer };
}

export default useOpenaiService;