import React, { Component } from 'react'
import {connect} from 'react-redux'


class SelectedPost extends Component {
 render() {
     if(!this.props.selectedPost) {
         return (<h2>select a post.......</h2>)
     } else {
        return(
            <div>
                <h2>UserID:  {this.props.selectedPost.userID}</h2>
                <h2>Title:  {this.props.selectedPost.title}</h2>
                <h2>Body:  {this.props.selectedPost.body}</h2>
            </div>
            )
        }
     }
}
 
function mapStateToProps(state){
    //we do map state to properties of this component.
    //then selectedPost prop will create in this component
    return{
        selectedPost:state.selectedPost
    }
}

//using connect function we connect component with redux store and action creators
//we pass only mapStateToProps: beacuse we don't click and get any data from this component
export default connect(mapStateToProps)(SelectedPost)
