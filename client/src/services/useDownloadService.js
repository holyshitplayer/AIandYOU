import { useHttp } from "../hooks";

const useDownloadService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = "https://aiandyou.tech/api/v1/download/";

    const downloadJson = async (object, fileName) => {
        const response = await request(`${_apiBase}json`, "POST", JSON.stringify({ object, fileName }), {
            "Content-Type": "application/json",
            "Response-Type": "blob"
        });

        return await response.data;
    }

    return { loading, error, clearError, downloadJson };
}

export default useDownloadService;