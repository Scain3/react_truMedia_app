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
            <div className="single-athlete-pg-description">
                <h1>{singlePlayer.fullName}</h1>
                <img src={singlePlayer.playerImage} alt={singlePlayer.fullName} />
                <table>
                    <tr>
                        <th>Season Year</th>
                        <th>Week</th>
                        <th>Game Date</th>
                        <th>Team</th>
                        <th>Opponent</th>
                    </tr>
                    <tr>
                        <td>{singlePlayer.seasonYear}</td>
                        <td>{singlePlayer.week}</td>
                        <td>{singlePlayer.gameDate}</td>
                        <td>
                            <div>{singlePlayer.team}</div>
                            <div><img src={singlePlayer.teamImage} alt={singlePlayer.team} /></div>
                        </td>
                        <td>
                            <div>{singlePlayer.opponent}</div>
                            <div><img src={singlePlayer.opponentImage} alt={singlePlayer.opponent} /></div>
                        </td>
                    </tr>
                </table>
            </div>

            <div className="single-athlete-pg-data">
                <table>
                    <tr>
                        <th>Att</th>
                        <th>Cmp</th>
                        <th>Sack</th>
                        <th>Int</th>
                        <th>PsYds</th>
                        <th>PsTd</th>
                        <th>Rush</th>
                        <th>RshYds</th>
                        <th>RshTD</th>
                        <th>Yds</th>
                        <th>Yds/Att</th>
                        <th>CMP%</th>
                    </tr>
                    <tr>
                        <td>{singlePlayer.Att}</td>
                        <td>{singlePlayer.Cmp}</td>
                        <td>{singlePlayer.Sack}</td>
                        <td>{singlePlayer.Int}</td>
                        <td>{singlePlayer.PsYds}</td>
                        <td>{singlePlayer.PsTD}</td>
                        <td>{singlePlayer.Rush}</td>
                        <td>{singlePlayer.RshYds}</td>
                        <td>{singlePlayer.RshTD}</td>
                        <td>{singlePlayer.RshYds + singlePlayer.PsYds}</td>
                        <td>{Math.floor(((singlePlayer.RshYds + singlePlayer.PsYds) / singlePlayer.Att)* 10)/10}</td>
                        <td>{Math.floor((singlePlayer.Cmp / singlePlayer.Att) * 100)}</td>

                    </tr>
                </table>
            </div>
        </div>
    )
}

export default SingleAthlete;
