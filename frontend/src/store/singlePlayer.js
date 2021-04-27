import { fetch } from './csrf';

const GET_ONE_PLAYER = 'GET_ONE_PLAYER';


//POJO ACTION FOR GETTING ONE MLB PLAYER BY ID
const getOnePlayer = (player) => {
    return{
        type: GET_ONE_PLAYER,
        payload: player
    }
}


//THUNK ACTION FOR GETTING ONE PLAYER
export const fetchOnePlayer = (id) => async(dispatch) => {
    const response = await fetch(`/api/athletes/${id}`);
    // console.log('response', response);
    dispatch(getOnePlayer(response.data))
}

const initialState = {
    // "playerId": 0,
    // "fullName": "",
    // "playerImage": "",
    // "gameDate": "",
    // "team": "",
    // "teamImage": "",
    // "opponent": "",
    // "opponentImage": "",
    // "PA": 0,
    // "AB": 0,
    // "H": 0,
    // "HR": 0,
    // "BB": 0,
    // "K": 0,
    // "HBP": 0,
    // "SF": 0,
    // "TB": 0,
    // "RBI": 0
};

const playerReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ONE_PLAYER:
            return{...state, ...action.payload};
        default:
            return state;
    }
}

export default playerReducer;
