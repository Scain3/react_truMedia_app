import { fetch } from './csrf';

const GET_PLAYERS = 'GET_PLAYERS';

const GET_ONE_PLAYER = 'GET_ONE_PLAYER';

//POJO ACTION FOR GETTING ALL MLB PLAYERS
const getAllPlayers = (players) => {
    return {
        type: GET_PLAYERS,
        payload: players
    }
}

//POJO ACTION FOR GETTING ONE MLB PLAYER BY ID
const getOnePlayer = (player) => {
    return{
        type: GET_ONE_PLAYER,
        payload: player
    }
}

//THUNK ACTION FOR GETTING ALL OF THE PLAYERS
export const fetchAllPlayers = () => async(dispatch) => {
    const response = await fetch(`api/athletes`);
    dispatch(getAllPlayers(response.data))
}

//THUNK ACTION FOR GETTING ONE PLAYER
export const fetchOnePlayer = (id) => async(dispatch) => {
    const response = await fetch(`api/athletes/${id}`);
    dispatch(getOnePlayer(response.data))
}

const initialState = {};

const athleteReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_PLAYERS:
           const allPlayers = {};
           action.payload.forEach((player) => {
               console.log(player);
               allPlayers[player.playerId] = player
           })
           return allPlayers;
        case GET_ONE_PLAYER:
            return{...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}

export default athleteReducer;
