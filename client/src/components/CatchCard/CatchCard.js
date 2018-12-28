import React from 'react';
import './CatchCard.css';

const CatchCard = props => (
  <div className='catch-card h-100 card m-3'>
        <div className='catch-card-header card-header'>
            {props.name}
        </div>
        <div className='catch-card-body container-fluid card-body'>
            
        </div>
    </div>
);

export default CatchCard;
