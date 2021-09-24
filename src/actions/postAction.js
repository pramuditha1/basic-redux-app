import axios from 'axios'
import { FETCHED_BUTTON_CLICKED, SELECT_POST } from "./types"

// export const fetchPosts=()=>{
//   return{
//     type: FETCHED_BUTTON_CLICKED,
//     payload: [
//         {
//             userID: 1,
//             id: 1,
//             title: 'Pramuditha Niroshan Jayasinghe',
//             body: 'First react redux tutorial app'
//         },
//         {
//             userID: 2,
//             id: 2,
//             title: 'Dileep Rajapaksha',
//             body: 'Second react redux tutorial app'
//         }
//     ]
//   }
// }

export const fetchPosts=()=>(dispatch)=>{
    axios.get("https://jsonplaceholder.typicode.com/posts?_limits=5")
    .then(res=>{
        dispatch({
        type: FETCHED_BUTTON_CLICKED,
        payload:res.data
        })
    })
}

export const selectPost=(post)=>{
    return {
        type: SELECT_POST,
        payload: post
    }
}