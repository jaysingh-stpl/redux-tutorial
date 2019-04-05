/**
 * Created by jay on 5/4/19.
 */

export function addNumber(number) {
    return {
        type : "ADD",
        payload : number
    };
}
export function subtractNumber(number) {
    return {
        type : "SUBTRACT",
        payload : number
    };
}