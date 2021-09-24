import { FETCHED_BUTTON_CLICKED } from "../actions/types";

//one reducer can catch many actions
export default function(state=null, action) {
    //check action type and return payload to store
    switch(action.type){
        case FETCHED_BUTTON_CLICKED:
            return action.payload;
            break;
    }
    return state;
}