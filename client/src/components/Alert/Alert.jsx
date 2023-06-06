import { useAlert } from "../../hooks";

import "./alert.sass";

const Alert = () => {
    const { text } = useAlert();

    if (text) {
        return (
            <div className="alert">{text}</div>
        );
    } else {
        return null;
    }
}

export default Alert