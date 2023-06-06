import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "./";
import { Modal, Spinner } from "../";
import { useCloudinaryService } from "../../services";
import { downloadImage } from "../../utils";

import { DownloadIcon } from "../../assets";

const CommunityModal = ({ isOpen, setIsOpen, updateImageDownloadsCount }) => {
    const { t } = useTranslation();

    const [posts, setPosts] = useState(null);

    const { loading, error, getAllPosts } = useCloudinaryService();

    useEffect(() => {
        if (isOpen) {
            getAllPosts().then((data) => setPosts(data.reverse()));
        }
        // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleDownload = (image) => {
        downloadImage(image);

        updateImageDownloadsCount(1);
    }

    const renderPosts = () => {
        return posts?.map((post) => (
            <div key={post._id} className="modal-community-post">
                <img src={post.image} alt={post.prompt} className="modal-community-post-image" />
                <Button onClick={() => handleDownload(post.image)} icon={<DownloadIcon />} />
                <div className="modal-community-post-info">
                    <p className="modal-community-post-title">{post.prompt}</p>
                    <p className="modal-community-post-author">{post.name}</p>
                </div>
            </div>
        ));
    }

    const spinner = loading && <Spinner />;
    const errorMessage = error && <p className="modal-error">{t("modalErrorMessage")}</p>;
    const noPosts = posts?.length === 0 && <p className="modal-error">{t("communityModalNoPosts")}</p>;
    const renderedPosts = (!loading && !error) && renderPosts();

    return (
        <Modal title={t("communityModalTitle")} isOpen={isOpen} setIsOpen={setIsOpen}>
            {spinner}
            {errorMessage}
            {noPosts}
            <div className="modal-community-library">
                {renderedPosts}
            </div>
        </Modal>
    );
}

export default CommunityModal