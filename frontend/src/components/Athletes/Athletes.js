import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useEffect} from "react";
import { fetchAllPlayers } from "../../store/players";
import './Athletes.css';

function Athletes(){
    const history = useHistory();
    const allPlayers = useSelector(state => state.athletes);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchAllPlayers());
    }, [dispatch])

    return(
        <h1>Hello World</h1>
    )

}

export default Athletes;
