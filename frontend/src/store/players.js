import { fetch } from './csrf';

const GET_PLAYERS = 'GET_PLAERS';

const getPlayers = (players) => {
    return {
        type: GET_PLAYERS,
        payload: players
    }
}

export const fetchAllPlayers = () => async(dispatch) => {
    const response = await fetch(``)
}
