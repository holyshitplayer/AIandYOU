import { ShareIcon } from "../../assets";
import Button from "./Button";

import "./message.sass";

const Message = ({ type = "chat", author, prompt, message, setImageToShare, setShareImageModalOpened }) => {
    const handleShareImageClick = (image, prompt) => {
        setImageToShare({ image, prompt });
        setShareImageModalOpened(true);
    }

    const renderMessage = () => {
        switch (type) {
            case "chat":
                return <p className="ai-interface-message-text">{message}</p>
            case "images":
                return <div className="ai-interface-message-images">
                    {message.map((image, idx) => (
                        <div key={idx} className="ai-interface-message-image">
                            <img src={image} alt="ai generated" />
                            <div className="ai-interface-message-image-buttons">
                                <Button onClick={() => handleShareImageClick(image, prompt)} icon={<ShareIcon />} />
                            </div>
                        </div>
                    ))}
                </div>
            default:
                return <p className="ai-interface-message-text">{message}</p>
        }
    }

    return (
        <div className="ai-interface-message">
            <p className="ai-interface-message-author">{author}</p>
            {renderMessage()}
        </div>
    );
};

export default Message