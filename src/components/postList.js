import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { selectPost } from '../actions/postAction'

class PostList extends Component {

    createItemList(){
        return this.props.AllPosts.map((post)=>{
            return(
                <li key={post.id} onClick={()=>this.props.selectPost(post)}>{post.title}</li>
            )
        })
    }

    render() {
        if(!this.props.AllPosts){
            return (<h2>Click button first!</h2>);
        } else {
            return(
                <ul>
                    {this.createItemList()}
                </ul>
            )
        } 
    }
}

function mapStateToProps(state){
    //we do map state to properties of this component.
    //then AllPosts prop will create in this component
    return{
        AllPosts:state.AllPosts
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectPost:selectPost}, dispatch)
}

//using connect function we connect component with redux store and action creators
export default connect(mapStateToProps, matchDispatchToProps)(PostList)