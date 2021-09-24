import React, { Component } from 'react'
import { fetchPosts } from '../actions/postAction'
//to connect component with action creator we need following libraries
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class ButtonComponent extends Component {
    render() {
        return(
            <div>
                <button onClick={()=>this.props.fetchPosts()}>Click me</button>
            </div>
        )
    }
}
//dispatch action
function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts:fetchPosts}, dispatch)
}
export default connect(null, matchDispatchToProps)(ButtonComponent)