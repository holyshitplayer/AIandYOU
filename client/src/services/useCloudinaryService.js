import { useHttp } from "../hooks";

const useCloudinaryService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = "http://16.171.76.4:8080/api/v1/post";

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