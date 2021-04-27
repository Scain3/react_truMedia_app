import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {fetchOnePlayer} from '../../store/singlePlayer';

function SingleAthlete(){
    const singlePlayer = useSelector(state => state.player);
    const {id} = useParams();
    console.log('id', id);
    console.log('singlePlayer', singlePlayer);
    // console.log(singlePlayer[0]);
    const dispatch = useDispatch();
    // const [loaded, setLoaded] = useState(false);
    // const thisPlayer = singlePlayer[playerId]

    useEffect(() => {
        if(singlePlayer[id]) return
        dispatch(fetchOnePlayer(id));
    }, [id, dispatch, singlePlayer])

    // useEffect(()=> {
    //     if(singlePlayer[playerId]) setLoaded(true);
    // }, [singlePlayer])

    // if(!loaded) return null;
    return(
        <div>
            <h1>Hello World</h1>
            <div>{singlePlayer.playerId}</div>
            {/* <div>{console.log(fetchOnePlayer(id), id)}</div> */}
            <div>{singlePlayer.fullName}</div>
            <div><img src={singlePlayer.playerImage} alt={singlePlayer.fullName} /></div>
            <div>{singlePlayer.gameDate}</div>
            <div>{singlePlayer.team}</div>
            <div><img src={singlePlayer.teamImage} /></div>
        </div>
    )
}

export default SingleAthlete;
