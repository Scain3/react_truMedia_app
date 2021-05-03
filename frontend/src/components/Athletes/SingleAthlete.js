import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
                <h1 className="single-athlete__full-name">{singlePlayer.fullName}</h1>
                <div className="single-athlete__photo-div"><img src={singlePlayer.playerImage} alt={singlePlayer.fullName} /></div>
                <table>
                    <tr className="single-athlete-description-header__row">
                        <th className="single-athlete-description__headers">Season Year</th>
                        <th className="single-athlete-description__headers">Week</th>
                        <th className="single-athlete-description__headers">Game Date</th>
                        <th className="single-athlete-description__headers">Team</th>
                        <th className="single-athlete-description__headers">Opponent</th>
                    </tr>
                    <tr className="single-athete-description-results__row">
                        <td className="single-athlete-description__result">{singlePlayer.seasonYear}</td>
                        <td className="single-athlete-description__result">{singlePlayer.week}</td>
                        <td className="single-athlete-description__result">{singlePlayer.gameDate}</td>
                        <td className="single-athlete-description__result">
                            <div><img src={singlePlayer.teamImage} alt={singlePlayer.team} /></div>
                        </td>
                        <td className="single-athlete-description__result">
                            <div><img src={singlePlayer.opponentImage} alt={singlePlayer.opponent} /></div>
                        </td>
                    </tr>
                </table>
            </div>

            <div className="single-athlete-pg-data">
                <table>
                    <tr className="single-athlete-data-header">
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
