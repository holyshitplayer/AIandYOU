import { useHttp } from "../hooks";

const useCloudinaryService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = "https://aiandyou.tech/api/v1/post";

    const getAllPosts = async () => {
        const response = await request(_apiBase, "GET");

        return await response.data;
    }

    const createPost = async (post) => {
        const response = await request(_apiBase, "POST", JSON.stringify(post));

        return await response.data;
    }

    return { loading, error, clearError, getAllPosts, createPost };
}

export default useCloudinaryService;