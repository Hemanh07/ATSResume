import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'
const NavBarElement = ({ name, sections }) => {
    const sectionComponent = sections.map((section) => {
        return <li className='list-item'>{section.name}</li>
    });
    const [display, setDisplay] = useState(false);

    return (
        <li

        >
            <div

            >
                <h4
                    onMouseEnter={() => setDisplay(!display)}
                    onMouseLeave={() => setDisplay(!display)}
                >{name}</h4>
                <ul className='navbar-floater' style={{ display: display && "block" || "none" }}>
                    {sectionComponent}
                </ul>
            </div>
        </li>
    )
}

export default NavBarElement