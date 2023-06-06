import { useHttp } from "../hooks";

const useAIImagesStatsService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = "http://16.171.76.4:8080/api/v1/ai-images-stats";

    const getAIImagesStats = async () => {
        const response = await request(_apiBase, "GET");

        if (response.data.length === 0) {
            return await _initAIImagesStats();
        }

        return await response.data;
    }

    const createAIImagesStats = async (requestsCount, imagesGeneratedCount, communityPostsCount, imageDownloadsCount) => {
        const response = await request(_apiBase, "POST", JSON.stringify({ requestsCount, imagesGeneratedCount, communityPostsCount, imageDownloadsCount }));

        return await response.data;
    }

    const updateRequestsCount = async (requestsCount) => {
        const response = _updateAIImagesStats({
            requestsCount: requestsCount,
            imagesGeneratedCount: 0,
            communityPostsCount: 0,
            imageDownloadsCount: 0
        });

        return await response.data;
    }

    const updateImagesGeneratedCount = async (imagesGeneratedCount) => {
        const response = _updateAIImagesStats({
            requestsCount: 0,
            imagesGeneratedCount: imagesGeneratedCount,
            communityPostsCount: 0,
            imageDownloadsCount: 0
        });

        return await response.data;
    }

    const updateCommunityPostsCount = async (communityPostsCount) => {
        const response = _updateAIImagesStats({
            requestsCount: 0,
            imagesGeneratedCount: 0,
            communityPostsCount: communityPostsCount,
            imageDownloadsCount: 0
        });

        return await response.data;
    }

    const updateImageDownloadsCount = async (imageDownloadsCount) => {
        const response = _updateAIImagesStats({
            requestsCount: 0,
            imagesGeneratedCount: 0,
            communityPostsCount: 0,
            imageDownloadsCount: imageDownloadsCount
        });

        return await response.data;
    }

    const _initAIImagesStats = async () => {
        const response = await createAIImagesStats(0, 0, 0, 0);

        return await response.data;
    }

    const _updateAIImagesStats = async (stats) => {
        const response = await request(_apiBase, "PUT", JSON.stringify(stats));

        return await response.data;
    }

    return { loading, error, clearError, getAIImagesStats, createAIImagesStats, updateRequestsCount, updateImagesGeneratedCount, updateCommunityPostsCount, updateImageDownloadsCount };
}

export default useAIImagesStatsService;