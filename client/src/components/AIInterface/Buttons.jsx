import { Button } from "./";

import "./buttons.sass";

import { CleanIcon, CommunityIcon, DownloadIcon } from "../../assets";

const Buttons = ({ type, setCommunityModalOpened, downloadChatLog, cleanChatLog, chatLogLength }) => {
    const renderButtons = () => {
        let buttons = [];

        if (type === "chat") {
            buttons.push(<Button key="download" onClick={downloadChatLog} disabled={chatLogLength === 0} icon={<DownloadIcon />} />);
        } else if (type === "images") {
            buttons.push(<Button key="community" onClick={() => setCommunityModalOpened(true)} icon={<CommunityIcon />} />);
        }

        buttons.push(<Button key="clean" onClick={cleanChatLog} disabled={chatLogLength === 0} icon={<CleanIcon />} />);

        return buttons;
    }

    return (
        <div className="ai-interface-buttons">
            {renderButtons()}
        </div>
    )
}

export default Buttons