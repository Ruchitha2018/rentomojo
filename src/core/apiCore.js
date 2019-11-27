//List Users
export const listUsersApi = () => {
 
    return fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: "GET",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {return data;})
};


export const userPostsApi = userId => {
    return fetch(`https://jsonplaceholder.typicode.com/posts${userId}`, {
        method: "GET",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {return data;})
};


export const postDetailApi = postId => {
    console.log(postId)
     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "GET",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {return data;})
}

export const postCommentsApi = postId => {
     return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {
        method: "GET",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {return data;})
}

export const postDeleteApi = postId => {
    console.log(postId);
    return fetch('https://jsonplaceholder.typicode.com/posts/${postId}', {
      method: "DELETE",
      headers: {
          Accept: "application/json",
          "Content-Type":"application/json"
      }    
}).then(response => {
      return response.json();  
    }).catch(err => console.log(err));
};
