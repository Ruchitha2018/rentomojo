import React, { useState, useEffect} from "react";
import { userPostsApi } from "./apiCore";
import { Link } from "react-router-dom";

const UserPosts = (props) => {
    
    const [userPosts, setUserPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const userId = props.location.search;
        loadUserPosts(userId);
        console.log(props);
    }, []);
    
    const loadUserPosts = userId => {
        setLoading(true);
        userPostsApi(userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setUserPosts(data);
                setLoading(false);
            }
        });
    };
    
    const showLoading = () => (
      loading && (
            <div className="alert alert-info">
                <h2 className = "text-center">Your favourite posts are loading...:):)</h2>
                  {loading}
            </div>
    ));

    const displayUserPosts = () => (
    <div className = "row userPostRow">
        <h5 className = "postsCounthead">{userPosts.length} posts are available</h5>
       {userPosts.map((post, index) =>(
        <div className = "col-md-12">
          <div className = "cardLayout userPostCard">
            <h4 className = "postIndex">{index + 1}</h4>
            <h6 className = "postTitle">{post.title}</h6>
           <Link to={`/post-detail/${post.id}`} className = "Link userPostsLink">VIEW MORE</Link>  
          </div>
        </div>
        ))}
    </div>
    );

  
    return(
      <div className = "container"> 
      {loading ? showLoading() : displayUserPosts()}
     </div>
    );
}

export default UserPosts