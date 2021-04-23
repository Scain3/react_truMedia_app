import { fetch } from './csrf';

const GET_PLAYERS = 'GET_PLAERS';

//POJO ACTION FOR GETTING ALL MLB PLAYERS
const getAllPlayers = (players) => {
    return {
        type: GET_PLAYERS,
        payload: players
    }
}

//THUNK ACTION FOR GETTING ALL OF THE PLAYERS
export const fetchAllPlayers = () => async(dispatch) => {
    const response = await fetch(`api/athletes`);
    dispatch(getAllPlayers(response.data))
}

const initialState = {};

const athleteRouter = (state=initialState, action) => {
    switch(action.type){
        case GET_PLAYERS:
           const allPlayers = {};
           action.payload.forEach((player) => {
               allPlayers[player.id] = player
           })
           return allPlayers;
        default:
            return state;
    }
}
