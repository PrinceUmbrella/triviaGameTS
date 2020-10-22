export const ADD_PLAYER = "ADD_PLAYER";
export const SELECT_PLAYER = "SELECT_PLAYER";
export const UPDATE_SCORE = "UPDATE_SCORE";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const SET_ANSWER = "SET_ANSWER";
export const SET_PLAYER_ANSWER = "SET_PLAYER_ANSWER";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const INCORRECT_ANSWER = "INCORRECT_ANSWER";

export function updateScore(index: any, score: any) {
  return {
    type: UPDATE_SCORE,
    score: score,
    index,
  };
}

export function setAnswer(answer: string | undefined) {
  return {
    type: SET_ANSWER,
    answer: answer,
  };
}

export function setPlayerAnswer(answer: string | undefined) {
  return {
    type: SET_PLAYER_ANSWER,
    playerAnswer: answer,
  };
}

export function playerName(index: any, name: any) {
  return {
    type: ADD_PLAYER,
    index,
    name,
  };
}

export function selectPlayer(index: any) {
  return {
    type: SELECT_PLAYER,
    index,
  };
}

export function correctAnswer(index: any) {
  return {
    type: CORRECT_ANSWER,
    index,
  };
}

export function incorrectAnswer(index: any, incorrectQuestion: any) {
  return {
    type: INCORRECT_ANSWER,
    index,
    incorrectQuestion,
  };
}

export function moveToNextQuestion() {
  return {
    type: NEXT_QUESTION,
  };
}
