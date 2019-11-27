import React, { useState, useEffect} from "react";
import { listUsersApi } from "./apiCore";
import { Link } from "react-router-dom";

const Home = () => {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        loadUsers();
    }, []);
    
     const loadUsers = () => {
         setLoading(true);      
        listUsersApi().then(data => {
            if(data.error){
                console.log(data.error);
            }else{
                console.log(data);
                setUsers(data);
                setLoading(false);
            }
        });
     };
    
    const showLoading = () => (
      loading && (
            <div className="alert alert-info">
                <h2 className = "text-center">Data is loading...:):)</h2>
                  {loading}
            </div>
    ));
    
    const displayUsers = () => (
        <div className = "row userRow">
        {users.map((user, index) =>(
        <div className = "col-6 col-md-3">
          <div className = "cardLayout userCard">
            <h5 className = "userName">{user.name}</h5>
            <h6 className = "userCompany">{user.company.name}</h6>
            <Link to={`/posts?userId=${user.id}`} className = "Link userPostsLink">VIEW POSTS</Link>  
          </div>
        </div>
        ))}
       </div>
    )
    return(
        <div className = "container">
          {showLoading()}
          {displayUsers()}
      </div>  
    );
}

export default Home