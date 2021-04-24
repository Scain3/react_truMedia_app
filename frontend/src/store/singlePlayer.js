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
    const response = await fetch(`api/athletes/${id}`);
    dispatch(getOnePlayer(response.data))
}

const initialState = {};

const playerReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ONE_PLAYER:
            return{...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}

export default playerReducer;
