import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {fetchOnePlayer} from '../../store/players';

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
                <div><div>{"ID"}</div>{singlePlayer.playerId}</div>
                <div><div>{"Player"}</div>{singlePlayer.fullName}</div>
                <div><div>{"Head Shot"}</div><img src={singlePlayer.playerImage} alt={singlePlayer.fullName} /></div>
                <div><div>{"Season Year"}</div>{singlePlayer.seasonYear}</div>
                <div><div>{"Week"}</div>{singlePlayer.week}</div>
                <div><div>{"Team"}</div>{singlePlayer.team}</div>
                <div><div>{"Team Image"}</div><img src={singlePlayer.teamImage} alt={singlePlayer.team} /></div>
                <div><div>{"Opponent"}</div>{singlePlayer.opponent}</div>
                <div><img src={singlePlayer.opponentImage} alt={singlePlayer.opponent} /></div>
                <div>{singlePlayer.Att}</div>
                <div>{singlePlayer.Cmp}</div>
                <div>{singlePlayer.Sack}</div>
                <div>{singlePlayer.Int}</div>
                <div>{singlePlayer.PsYds}</div>
                <div>{singlePlayer.PsTd}</div>
                <div>{singlePlayer.Rush}</div>
                <div>{singlePlayer.RshYds}</div>
                <div>{singlePlayer.RshTD}</div>
            </div>
        </div>
    )
}

export default SingleAthlete;
