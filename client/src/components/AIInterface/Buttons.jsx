import { Button } from './';

import "./buttons.sass";

import { CleanIcon, CommunityIcon, DownloadIcon } from '../../assets';

const Buttons = ({ type, setCommunityModalOpened, downloadChatLog, cleanChatLog }) => {
    const renderButtons = () => {
        let buttons = [];

        if (type === "images") {
            buttons.push(<Button key="community" onClick={() => setCommunityModalOpened(true)} icon={<CommunityIcon />} />);
        }

        buttons.push(
            <Button key="download" onClick={downloadChatLog} icon={<DownloadIcon />} />,
            <Button key="clean" onClick={cleanChatLog} icon={<CleanIcon />} />
        );

        return buttons;
    }

    return (
        <div className="ai-interface-buttons">
            {renderButtons()}
        </div>
    )
}

export default Buttons