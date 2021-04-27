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
    const response = await fetch(`/api/athletes`);
    dispatch(getAllPlayers(response.data))
}

//THUNK ACTION FOR GETTING ONE PLAYER
export const fetchOnePlayer = (id) => async(dispatch) => {
    const response = await fetch(`/api/athletes/${id}`);
    dispatch(getOnePlayer(response.data))
}

const initialState = {
    "playerId": 0,
    "fullName": "",
    "playerImage": "",
    "gameDate": "",
    "team": "",
    "teamImage": "",
    "opponent": "",
    "opponentImage": "",
    "PA": 0,
    "AB": 0,
    "H": 0,
    "HR": 0,
    "BB": 0,
    "K": 0,
    "HBP": 0,
    "SF": 0,
    "TB": 0,
    "RBI": 0
};

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
            return{...state, ...action.payload};
        default:
            return state;
    }
}

export default athleteReducer;
