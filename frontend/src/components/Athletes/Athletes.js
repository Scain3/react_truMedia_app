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
        <div>
            {allPlayers && allPlayers.map((player, index = 0) => (
                <div className="player-block-data">
                    <div>{index += 1 }</div>
                    <div><img src={player.playerImage} alt={player.fullName} /></div>
                    <div>{player.fullName}</div>
                    <div>{player.playerId}</div>
                    <div><img src={player.teamImage} alt={`${player.fullName}'s Team`} /></div>
                </div>
            ))}
        </div>
    )

}

export default Athletes;
