import { useState, cloneElement } from "react";

import { useDropdownOutsideClick } from "../../hooks";

import "./dropdown.sass";

const Dropdown = ({ trigger, extraClassName, items }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    let dropdownClassName = "dropdown";
    dropdownClassName = extraClassName ? `${dropdownClassName} ${extraClassName}` : dropdownClassName;
    dropdownClassName = toggle ? `${dropdownClassName} visible` : dropdownClassName;

    const ref = useDropdownOutsideClick(() => setToggle(false));

    return (
        <div className="dropdown-wrapper">
            {cloneElement(trigger, { onClick: handleToggle, ref: ref })}
            <ul className={dropdownClassName}>
                {items.map((element, idx) => (
                    <li key={idx} onClick={() => handleToggle}>{element}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dropdown