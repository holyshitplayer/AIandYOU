import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Modal, Spinner } from "../";
import { useCloudinaryService } from "../../services";
import { useAlert } from "../../hooks";

const ShareModal = ({ prompt, image, isOpen, setIsOpen, cleanChatLog, updateCommunityPostsCount }) => {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        name: "",
        prompt: "",
        image: ""
    });
    const [success, setSuccess] = useState(false);

    const { setAlert } = useAlert();

    useEffect(() => {
        setForm({
            ...form,
            prompt,
            image
        });
        setSuccess(false);
        // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
    }, [prompt, image]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setSuccess(false);
    }

    const { loading, error, createPost } = useCloudinaryService();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.name && form.prompt && form.image) {
            try {
                createPost(form).then(() => {
                    setSuccess(true);
                    setAlert(t("shareModalImageShared"));

                    updateCommunityPostsCount(1);
                });
            } catch (error) {
                cleanChatLog();
            }
        }
    }

    const spinner = loading && <Spinner />;
    const errorMessage = error && <p className="modal-error">{t("modalErrorMessage")}</p>;
    const shareButton = (!loading && !error && !success) && <button type="submit" className="modal-form-button">{t("shareModalButton")}</button>;
    const successButton = (!loading && !error && success) && <button type="button" onClick={() => setIsOpen(false)} className="modal-form-button">{t("shareModalSuccess")}</button>;

    return (
        <Modal title={t("shareModalTitle")} isOpen={isOpen} setIsOpen={setIsOpen}>
            <form className="modal-form" onSubmit={handleSubmit}>
                <label htmlFor="name">{t("shareModalFormNameLabel")}</label>
                <input type="text" name="name" minLength={2} maxLength={16} value={form.name} onChange={handleChange} placeholder={t("shareModalFormNamePlaceholder")} required />
                <label>{t("shareModalFormPromptLabel")}</label>
                <p className="modal-fake-input"><span>{form.prompt}</span></p>
                {image ? <img src={image} alt={prompt} /> : null}
                <p className="modal-form-text">{t("shareModalText")}</p>
                <div className="modal-form-button-wrapper">
                    {spinner}
                    {shareButton}
                    {successButton}
                    {errorMessage}
                </div>
            </form>
        </Modal>
    );
}

export default ShareModal