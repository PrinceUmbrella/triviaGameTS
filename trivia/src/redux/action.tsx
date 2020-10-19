export const ADD_PLAYER='ADD_PLAYER';
export const SELECT_PLAYER = 'SELECT_PLAYER'
export const UPDATE_SCORE='UPDATE_SCORE';


export function updateScore(index:any, score:any){
    return {
        type:UPDATE_SCORE, 
        score:score, 
        index 
    }
}

export function playerName(index:any, name: string){
    return {
        type:ADD_PLAYER, 
        index,
        name 
    }
}

export function selectPlayer(index:any){
    return{
        type: SELECT_PLAYER,
        index
    }
}
