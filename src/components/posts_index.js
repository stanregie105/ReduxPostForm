import React, { Component} from 'react';
import { connect} from 'react-redux';
import { fetchPosts} from '../actions/index';
import { Link} from 'react-router';

class PostsIndex extends Component{
    componentWillMount(){
        this.props.fetchPosts();
    }

  renderPosts(){
      if(!this.props.posts){
          return <div></div>;
      }
      return this.props.posts.map((post)=>{
          return (
            
             <li className="list-group-item" key={post.id}>
                 <Link to={"posts/" +post.id}>
                 <span className="pull-xs-right">{post.categories}</span>
                 <strong>{post.title}</strong>
                 </Link>
              </li>
              
          );
      });
  }  
  render(){
        //console.log(this.renderPosts());
        //console.log(this.props.posts);
        
      return(
          <div>
          <div className="text-xs-right">
              <Link to="/posts/new"className="btn btn-primary">
                Add a Post
              </Link>
          </div>
         <h3>List of blog posts</h3>
         <ul className="list-group">
             {this.renderPosts()}
            </ul>
         </div>
      )
  }
}
function mapStateToProps(state){
    return {posts: state.posts.all};
}

/*
function mapDispatchToProps(dispatch){
    return {
        fetchPosts:()=>dispatch(fetchPosts())
    };
}
*/


export default connect( mapStateToProps,{fetchPosts})(PostsIndex);