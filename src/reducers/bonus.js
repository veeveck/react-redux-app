import { INCBONUS } from "../actions/action";

export function bonusReducer(state={points:0},action){
    switch(action.type){
        
        case INCBONUS :
            return {points:state.points+1}    
       
        default:
            return state;    
    }
}