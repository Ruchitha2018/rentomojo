import React, { useState, useEffect} from "react";
import { postDetailApi, postCommentsApi, postDeleteApi } from "./apiCore";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const PostDetails = (props) => {
    
    const [postDetails, setPostDetails] = useState([]);
    const [postComment, setPostComment] = useState([]);
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => { 
        const postId = props.match.params.postId;
        console.log(postId);
        loadPostDetail(postId);
        loadPostComments(postId);
    }, []);
    
     const loadPostDetail = (postId) => {
         setLoading(true);
        postDetailApi(postId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setPostDetails(data);
                setLoading(false);
            }
        });
    };
    
    const loadPostComments = (postId) => {
        postCommentsApi(postId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setPostComment(data);
                setLoading(false);
            }
        });
    };
    
    const deletePostDetail = () => {        
        postDeleteApi(props.match.params.postId).then(data => {
            if (data.error) {
                console.log(data);
                console.log(data.error);
            } else {
                setRedirect(true);
            }
        });
    };
    
  
    
    const displayPostComments = () => (
        <div>
          <h6 className = "commentHeading">Comments</h6>
          {postComment.map((comment, index) =>(
           <div className = "col-md-12">
             <div className = "commentCard">
               <div className = "row">
                 <div className = "col-md-1">
                    <img src = "https://image.flaticon.com/icons/svg/44/44757.svg" width = "100%" />
                 </div>
                 <div className = "col-md-8">
                        <h6>{comment.email.split("@")[0]}</h6>
                        <h6>{comment.name}</h6> 
                 </div>
              </div>
             </div>
         </div>
        ))}
        </div>   
    );
     const showLoading = () => (
      loading && (
            <div className="alert alert-info">
                <h2 className = "text-center">Your favourite post is loading...:):)</h2>
                  {loading}
            </div>
    ));
   
    const displayPostDetail = () => (
       <div className = "row postDetailRow">
         <div className = "col-md-10 offset-md-1">
           <div className = "cardLayout">
             <h4 className = "DeletePost" onClick = {deletePostDetail}>Delete Post</h4>
               <h5 className = "heading">TITLE</h5>
               <h6>{postDetails.title}</h6>
               <br/>
               <h5 className = "heading">DESCRIPTION</h5>
               <p>{postDetails.body} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
               <hr />
            {displayPostComments()}
           </div>
         </div>               
      </div>    
    );
  
     const redirectUser = () => {
        if (redirect) {
            const userId= postDetails.userId;
            console.log(userId);
             return <Redirect to={`/posts?userId=${userId}`} />;
        }
    };

    return(
      <div className = "container"> 
         {redirectUser()}
         {loading ? showLoading() : displayPostDetail()}
    
     </div>
    );
}

export default PostDetails