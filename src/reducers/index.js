//create a root reducer. because store can access by only one reducer. can not have multiplr reducers

import { combineReducers } from "redux";
import AllPostReducer from './reducer-AllPosts'
import SelectedPostReducer from './reducer-selectedPost'

const rootReducer = combineReducers(
    {
        AllPosts: AllPostReducer,
        selectedPost: SelectedPostReducer
    }
)

export default rootReducer