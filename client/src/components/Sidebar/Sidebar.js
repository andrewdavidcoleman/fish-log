import React from "react";
import "./Sidebar.css";

const Sidebar = props => (
    <div className='col sidebar'>
        <ul className='list-group pt-2'>

            {props.children}
            
        </ul>
    </div>
);

export default Sidebar;
