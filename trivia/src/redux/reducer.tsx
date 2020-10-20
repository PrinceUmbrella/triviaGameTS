import * as GameActions from "./action";
//import { combineReducers } from 'redux';
const initalState = {
    players: [
        {
            name: "",
            score: 0,
        },
        {
            name: "",
            score: 0,
        },
    ],
    currentQuestion: 9,
    answer: "",
    playerAnswer: "",
};

export function playReducer(state: any = initalState, action: any) {
    switch (action.type) {
        case GameActions.UPDATE_SCORE:
            const updatePlayerList = state.players.map(
                (player: any, index: any) => {
                    if (index === action.index) {
                        return {
                            ...player,
                            score: player.score + action.score,
                        };
                    }
                    return player;
                }
            );
            return {
                ...state,
                players: updatePlayerList,
            };
        case GameActions.ADD_PLAYER:
            const updatePlayerName = state.players.map(
                (player: any, index: any) => {
                    if (index === action.index) {
                        return {
                            ...player,
                            name: player.name + action.name,
                        };
                    }
                    return player;
                }
            );
            return {
                ...state,
                players: updatePlayerName,
            };
        // case GameActions.SELECT_PLAYER:
        //     return {
        //         ...state,
        //         selectedPlayerIndex: action.index
        //     }
        case GameActions.NEXT_QUESTION:
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
            };
        case GameActions.SET_ANSWER:
            return {
                ...state,
                answer: action.answer,
            };
        case GameActions.SET_PLAYER_ANSWER:
            return {
                ...state,
                playerAnswer: action.playerAnswer,
            };
        default:
            return state;
    }
}

//const app= combineReducers({score})
