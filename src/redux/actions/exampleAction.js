import { GET_USER, GET_USER_REQUESTED } from "../constantType";

export function getuser(user){
    return {
        type : GET_USER_REQUESTED,
        payload : user
    }
}