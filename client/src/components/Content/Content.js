import React from "react";
import "./Content.css";

const Content = props => (
    <div className='col d-flex main'>
        {props.children}
    </div>
);

export default Content;
