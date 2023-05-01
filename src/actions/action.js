export const INC='increment';
export const DEC='decrement';
export const INCBYVALUE='incrementByAmount';
export const INCBONUS='incrementBonus';

export function increment(){
    return {type:INC}
}
export function decrement(){
    return {type:DEC}
}
export function incrementByAmount(value){
    return {type:INCBYVALUE,payload:value}
}
export function incrementBonus(){
    return {type:INCBONUS}
}