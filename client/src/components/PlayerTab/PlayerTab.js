import React from "react";
import "./PlayerTab.css";

const PlayerTab = props => (
  <li 
    className='player-tab list-group-item m-2 border-0 rounded'
    key={props.id}
    onClick={() => props.showPlayerCard(props.id, props.name, props.totalScore, props.catches, props.inches, props.pounds, props.unique)}>
    <div className='container'>
        <div className='row'>
            <div className='d-flex align-items-center'>
                IMG
            </div>
            <div className='col'>
                <div className='row'>
                    {props.name}
                </div>
                <div className='row'>
                    {props.totalScore}
                </div>
            </div>
        </div>
    </div>
  </li>
);

export default PlayerTab;
