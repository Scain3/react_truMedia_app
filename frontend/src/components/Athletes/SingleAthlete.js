import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {fetchOnePlayer} from '../../store/players';
import './Athletes.css';

function SingleAthlete(){
    const singlePlayer = useSelector(state => state.athletes);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOnePlayer(id));
    }, [id, dispatch])

    return(
        <div className="single-athlete-pg-div">
            {/* <div className="single-athlete-side-header">
                <div>{"ID"}</div>
                <div>{"Full Name"}</div>
                <div>{"Head Shot"}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
            </div> */}
            <div>
                <div><span className="single-athlete__label">{"ID"}</span>{singlePlayer.playerId}</div>
                <div><span className="single-athlete__label">{"Player"}</span>{singlePlayer.fullName}</div>
                <div><span className="single-athlete__label">{"Head Shot"}</span><img src={singlePlayer.playerImage} alt={singlePlayer.fullName} /></div>
                <div><span className="single-athlete__label">{"Season Year"}</span>{singlePlayer.seasonYear}</div>
                <div><span className="single-athlete__label">{"Week"}</span>{singlePlayer.week}</div>
                <div><span className="single-athlete__label">{"Team"}</span>{singlePlayer.team}</div>
                <div><span className="single-athlete__label">{"Team Image"}</span><img src={singlePlayer.teamImage} alt={singlePlayer.team} /></div>
                <div>
                    <div className="single-athlete__label">{"Opponent"}</div>
                    <img src={singlePlayer.opponentImage} alt={singlePlayer.opponent} />
                    {singlePlayer.opponent}</div>
                {/* <div><img src={singlePlayer.opponentImage} alt={singlePlayer.opponent} /></div> */}
                <div><div className="single-athlete__label">{"Att"}</div>{singlePlayer.Att}</div>
                <div><div className="single-athlete__label">{"Cmp"}</div>{singlePlayer.Cmp}</div>
                <div><div className="single-athlete__label">{"Sack"}</div>{singlePlayer.Sack}</div>
                <div><div className="single-athlete__label">{"Int"}</div>{singlePlayer.Int}</div>
                <div><div className="single-athlete__label">{"PsYds"}</div>{singlePlayer.PsYds}</div>
                <div><div className="single-athlete__label">{"PsTd"}</div>{singlePlayer.PsTd}</div>
                <div><div className="single-athlete__label">{"Rush"}</div>{singlePlayer.Rush}</div>
                <div><div className="single-athlete__label">{"RshYds"}</div>{singlePlayer.RshYds}</div>
                <div><div className="single-athlete__label">{"RshTD"}</div>{singlePlayer.RshTD}</div>
            </div>
        </div>
    )
}

export default SingleAthlete;
