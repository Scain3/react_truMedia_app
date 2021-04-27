import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useEffect} from "react";
import { fetchAllPlayers } from "../../store/players";
import './Athletes.css';

function Athletes(){
    const history = useHistory();
    const allPlayers = useSelector(state => Object.values(state.athletes));
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchAllPlayers());
    }, [dispatch])


    return(
        <div className="all-players-div">
            {allPlayers && allPlayers.map((player, index = 0) => (
                <div className="player-block-data" onClick={()=>history.push(`player/${player.playerId}`)}>
                    <div className="player-data">{index += 1 }</div>
                    <div className="player-data player-img"><img src={player.playerImage} alt={player.fullName} /></div>
                    <div className="player-data player-name">{player.fullName}</div>
                    <div className="player-data player-id">{player.playerId}</div>
                    <div className="player-data player-team__img"><img src={player.teamImage} alt={`${player.fullName}'s Team`} /></div>
                </div>
            ))}
        </div>
    )

}

export default Athletes;
