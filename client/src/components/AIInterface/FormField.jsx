import { useRef, useState } from "react";

import { Button } from "./";
import { Spinner } from "..";

import { RestartIcon, SendMessageIcon } from "../../assets";

import "./formField.sass";

const FormField = ({ placeholder, loading, error, onFormSubmit }) => {
    const [prompt, setPrompt] = useState("");
    const textareaRef = useRef(null);

    const handleChange = (e) => {
        setPrompt(e.target.value);

        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${e.target.scrollHeight}px`;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (prompt.trim().length !== 0) {
            onFormSubmit(prompt);
            setPrompt("");

            textareaRef.current.style.height = "auto";
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault();

            e.target.value += "\n";
            handleChange(e);
        } else if (e.key === "Enter") {
            e.preventDefault();

            handleSubmit(e);
        }
    }

    const spinner = loading && <Spinner />;
    const restartButton = error && <Button key="restart" onClick={() => window.location.reload()} icon={<RestartIcon />} />;
    const sendButton = (!error && !loading) && <Button key="send" type="submit" disabled={prompt.trim().length === 0} icon={<SendMessageIcon />} />;

    return (
        <form className="ai-interface-prompt-input" onSubmit={handleSubmit}>
            <textarea disabled={error || loading} ref={textareaRef} className="ai-interface-textarea" rows="1" placeholder={placeholder} value={prompt} onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
            <div className="ai-interface-send">
                {spinner}
                {restartButton}
                {sendButton}
            </div>
        </form>
    );
}

export default FormField