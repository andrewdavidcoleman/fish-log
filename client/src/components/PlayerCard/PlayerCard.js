import React, { Component } from "react";
import './PlayerCard.css';
import CatchCard from '../../components/CatchCard';
import API from "../../utils/API";



class PlayerCard extends Component {

    state = {
        name: null,
        rank: null,
        totalScore: null,
        totalCatches: null,
        pounts: null,
        inches: null,
        catches: []
    };

    getCatches = () => {
        API.getCatches()
      .then(res => {
        console.log(res.data);
        this.setState({ catches: res.data })
      })
      .catch(err => console.log(err.response));
    };

    render(props) {
        return(
        <div className='player-card flex-fill card m-3'>
            <div className='player-card-header card-header'>
                {props.name}
            </div>
            <div className='player-card-body container-fluid card-body'>
                <div className='row'>
                    Rank: {props.rank}
                </div>
                <div className='row'>
                    Total score: {props.totalScore}
                </div>
                <div className='row'>
                    Catches: {props.catches}
                </div>
                <div className='row'>
                    Pounds: {props.pounds}
                </div>
                <div className='row'>
                    Inches: {props.inches}
                </div>
                <div className='row'>
                    <div className='col'>

                    </div>
                    {
                        this.state.catches.map(fish => (
                            <CatchCard
                            
                            />
                        ))
                    }
                </div>
            </div>
        </div>
        )
    }
};

export default PlayerCard;
