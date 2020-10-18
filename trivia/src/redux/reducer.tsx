import * as GameActions from './action';
//import { combineReducers } from 'redux';
const initalState =[
    {
        name: '',
        score: 0
    },
    {
        name: '',
        score: 0
    }
];

export function playReducer(state:any = initalState, action:any){

    switch(action.type){
        case GameActions.UPDATE_SCORE:
            const updatePlayerList = state.map((player: any, index: any) => {
                if(index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score,
                    };
                }
                return player;
            });
            return {
                ...updatePlayerList
            }
        case GameActions.ADD_PLAYER:
            const updatePlayerName = state.map((player: any, index: any) => {
                if(index === action.index) {
                    return {
                        ...player,
                        name: player.name + action.name,
                    };
                }
                return player;
            });
            return {
                ...updatePlayerName
            }
        case GameActions.SELECT_PLAYER:
            return {      
                ...state,        
                selectedPlayerIndex: action.index
            }
        default:
            return state
    }
    

}

//const app= combineReducers({score})
