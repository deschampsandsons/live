import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import NotFound from '../layout/NotFound';
import EditProfile from '../forms/EditProfile';
import AddPost from '../forms/AddPost';
import EditPost from '../forms/EditPost';
import Dashboard from '../dashboard/Dashboard';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/posts/:id' component={Post} />
        <PrivateRoute exact path='/editprofile' component={EditProfile} />
        <PrivateRoute exact path='/editpost/:id' component={EditPost} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/addpost' component={AddPost} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
