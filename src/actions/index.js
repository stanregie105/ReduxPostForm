import axios from 'axios';
import { browserHistory} from 'react-router';

export const FETCH_POSTS='FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'https://cors-anywhere.herokuapp.com/http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=GARRYLEE12' ;




export function fetchPosts(){
    const request= axios.get(`${ROOT_URL}/posts/${API_KEY}`);
    console.log("Action sent", request);
    return {
         type: FETCH_POSTS,
         payload: request
    };
}




export function createPost(props, callback){
   const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`,props);
   return(dispatch)=>{
   request.then(({data})=>{
        callback();
       dispatch({type:CREATE_POST, payload:data});
   });
   
   };
}

/*
export function fetchPost(id){
   const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
   return(dispatch)=>{
       request.then(({data})=>{
          dispatch({type: FETCH_POST,payload: request });

       });
}
}
*/

export function fetchPost(id){
   const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    console.log('Action sent',request);
     return{
       type: FETCH_POST,
       payload: request
   };
}


export function deletePost(id){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
   return (dispatch)=>{
       dispatch({
           type: DELETE_POST,
           payload: request
       }).then((response) => {
            dispatch(browserHistory.push('/'));
        });
   };
}

/*
export function deletePost(id,callback){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(()=>callback());
   return {
       type: DELETE_POST,
       payload: request
   }
}

*/

