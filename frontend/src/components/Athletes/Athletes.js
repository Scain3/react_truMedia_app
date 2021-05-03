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
        <div className="all-athletes-pg-div">
            <div className="headers">
                <div className="header-divs header-head__shot">{"Player"}</div>
                <div className="header-divs header-full__name">{"Full Name"}</div>
                <div className="header-divs header-id">{"ID"}</div>
                <div className="header-divs header-team">{"Team"}</div>
            </div>
            <div className="all-players-div">
                {allPlayers && allPlayers.map((player, index = 0) => (
                    <div className="player-block-data" onClick={()=>history.push(`player/${player.playerId}`)}>
                        <div className="player-data player-img__div"><img className="player-img" src={player.playerImage} alt={player.fullName} /></div>
                        <div className="player-data player-name">{player.fullName}</div>
                        <div className="player-data player-id">{player.playerId}</div>
                        <div className="player-data player-team__img"><img src={player.teamImage} alt={`${player.fullName}'s Team`} /></div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Athletes;
