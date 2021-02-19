import React from 'react'
import "./SideBarRow.css";


function SideBarRow({selected, Icon, title}) {
    return (
        <div className={`sideBarRow ${selected && "selected"}`}>
            <Icon className="sideBarRow__icon" /> 
            <h2 className="sideBarRow__title">{title}</h2>
        </div> 
    )
}

export default SideBarRow
