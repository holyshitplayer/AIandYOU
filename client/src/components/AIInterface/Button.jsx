import "./button.sass";

const Button = ({ type="button", onClick, icon, disabled = false }) => {
    return (
        <button type={type} onClick={onClick} className="ai-interface-button" disabled={disabled}>
            {icon}
        </button>
    )
}

export default Button