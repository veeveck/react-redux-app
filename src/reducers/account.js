import {INC,DEC,INCBYVALUE} from '../actions/action'
export function accountReducer(state={amount:1},action){
    switch(action.type){
        // case INIT:
        //     return {amount:action.payload}
        case INC :
            return {amount:state.amount+1}    
        case DEC :
            return {amount:state.amount-1}
        case INCBYVALUE :
            return {amount:state.amount + action.payload}
        default:
            return state;    
    }
}