import { useContext } from "react";
import { AlertContext } from "../contexts";

const useAlert = () => useContext(AlertContext);

export default useAlert;