import * as GameActions from "./action";
//import { combineReducers } from 'redux';
const initalState = {
    players: [
        {
            name: "",
            score: 0,
            correctAnswer: 0,
            incorrectAnswer: [],
        },
        {
            name: "",
            score: 0,
            correctAnswer: 0,
            incorrectAnswer: [],
        },
    ],
    currentQuestion: 0,
    answer: "",
    playerAnswer: "",
    questionList: [],
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
        case GameActions.GET_QUESTIONS:
            return {
                ...state,
                questionList: [...action.questionList],
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
        case GameActions.CORRECT_ANSWER:
            const updateCorrectList = state.players.map(
                (player: any, index: any) => {
                    if (index === action.index) {
                        return {
                            ...player,
                            correctAnswer: player.correctAnswer + 1,
                        };
                    }
                    return player;
                }
            );
            return {
                ...state,
                players: updateCorrectList,
            };

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
        case GameActions.INCORRECT_ANSWER:
            const updateIncorrectList = state.players.map(
                (player: any, index: any) => {
                    if (index === action.index) {
                        return {
                            ...player,
                            incorrectAnswer: [
                                ...state.players[index].incorrectAnswer,
                                action.incorrectQuestion,
                            ],
                        };
                    }
                    return player;
                }
            );
            return {
                ...state,
                players: updateIncorrectList,
            };
        case GameActions.RESET_STATE:
            const names: any = [];
            state.players.map((player: any) => {
                names.push(player.name);
            });
            const newState = initalState.players.map((player: any, index) => {
                return {
                    ...player,
                    name: names[index],
                };
            });
            return {
                ...initalState,
                players: newState,
            };
        default:
            return state;
    }
}

//const app= combineReducers({score})
