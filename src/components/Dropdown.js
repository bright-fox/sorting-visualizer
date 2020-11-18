import React, { useEffect, useState } from 'react';

import "./Dropdown.css"

const Dropdown = ({ defaultValue, value, values, handleOptionSelection }) => {
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
            <div className={`dropdown-heading ${isDropped ? "border-none" : ""}`} onClick={() => setIsDropped(!isDropped)}>{value ? value : defaultValue}</div>
            <div className={`dropdown-options ${!isDropped ? "hidden" : ""}`}>
                {values.map(val => {
                    return <div key={val} className="dropdown-option" onClick={e => handleOptionSelection(e.target.textContent)}>{val}</div>
                })}
            </div>
        </div>
    )
}

export default Dropdown