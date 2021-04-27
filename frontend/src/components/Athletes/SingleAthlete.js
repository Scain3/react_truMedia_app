import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {fetchOnePlayer} from '../../store/players';

function SingleAthlete(){
    const singlePlayer = useSelector(state => state.athletes);
    const {id} = useParams();
    console.log(id);
    console.log(singlePlayer);
    console.log(singlePlayer[id]);
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
            <div>{singlePlayer.gameDate}</div>
            <div>{singlePlayer.team}</div>
            <div><img src={singlePlayer.teamImage} /></div>
        </div>
    )
}

export default SingleAthlete;
