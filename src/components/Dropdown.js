import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

import "./Dropdown.css"

const Dropdown = ({ label, defaultValue, value, values, handleOptionSelection }) => {
    const [isDropped, setIsDropped] = useState(false)

    // side effect to hide the dropdown upon click event
    useEffect(() => {
        if (!isDropped) return

        const closeDropdown = () => {
            setIsDropped(false)
            window.removeEventListener("click", closeDropdown)
        }

        window.addEventListener("click", closeDropdown)

        return () => window.removeEventListener("click", closeDropdown)
    }, [isDropped])

    return (
        <div className="dropdown-menu">
            <div className={`dropdown-heading ${isDropped ? "border-none" : ""}`}>
                {label && <span className="dropdown-label">{label}</span>}<span className="dropdown-value">{value ? value : defaultValue}</span> <FontAwesomeIcon icon={faAngleDown} onClick={() => setIsDropped(!isDropped)} />
            </div>
            <div className={`dropdown-options ${!isDropped ? "hidden" : ""}`}>
                {values.map(val => {
                    return <div key={val} className="dropdown-option" onClick={e => handleOptionSelection(e.target.textContent)}>{val}</div>
                })}
            </div>
        </div>
    )
}

export default Dropdown