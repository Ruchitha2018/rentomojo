import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import UserPosts from "./core/UserPosts";
import PostDetails from "./core/PostDetails";
import './style.css';

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path = "/" exact component={Home} />
            <Route path="/posts" component={UserPosts} />
            <Route path = "/post-detail/:postId" exact component = {PostDetails} />
        </Switch>
        </BrowserRouter>
    );
};

export default Routes;
