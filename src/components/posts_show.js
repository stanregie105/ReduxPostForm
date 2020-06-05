import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import { Link} from 'react-router';
//import {bindActionCreators} from 'redux';
import { browserHistory} from 'react-router';


class PostsShow extends Component{
    
    componentWillMount(){
        this.props.fetchPost(this.props.params.id);

    }
    onDeleteClick(){

        this.props.deletePost(this.props.params.id);
    


        
        ///.then(()=>{this.props.router.push('/');});
    }
    render(){
        const {post} = this.props;
        console.log(this.props.post);
        if(!post){
           return <div>Loading...</div>
        }
        return(
        <div>
            <Link to="/">Back To index</Link>
            <button
            onClick={this.onDeleteClick.bind(this)}
             className="btn btn-primary pull-xs-right">
                deletePost
            </button>
            <h3>{post.title}</h3>
            <h6>Categories: {post.categories}</h6>
            <p>{post.content}</p>
        </div>
        );
    }
    
}


function mapStateToProps(state){
    return{ post:state.posts.post};
}





export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);