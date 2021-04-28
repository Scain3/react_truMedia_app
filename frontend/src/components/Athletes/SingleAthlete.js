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
        <div>
            <h1>Hello World</h1>
            <div>{singlePlayer.playerId}</div>
            <div>{singlePlayer.fullName}</div>
            <div><img src={singlePlayer.playerImage} alt={singlePlayer.fullName} /></div>
            <div>{singlePlayer.seasonYear}</div>
            <div>{singlePlayer.week}</div>
            <div>{singlePlayer.team}</div>
            <div><img src={singlePlayer.teamImage} alt={singlePlayer.team} /></div>
            <div>{singlePlayer.opponent}</div>
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
    )
}

export default SingleAthlete;
