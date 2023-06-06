const { createContext, useState } = require("react");

const ALERT_TIME = 5000;
const initialState = {
    text: "",
    setAlert: () => { }
}

const AlertContext = createContext(initialState);

export const AlertProvider = ({ children }) => {
    const [text, setText] = useState("");

    const setAlert = (text) => {
        setText(text);

        setTimeout(() => {
            setText("");
        }, ALERT_TIME);
    }

    return (
        <AlertContext.Provider value={{ text, setAlert }}>
            {children}
        </AlertContext.Provider>
    );
}

export default AlertContext