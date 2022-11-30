import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css'

const HomePg = lazy(() => import('./pages/HomePg'));
const NotificationsPg = lazy(() => import('./pages/Notification'));
const ExplorePg = lazy(() => import('./pages/Explore'));
const ProfilePg = lazy(() => import('./pages/Profile'));
const MessagePg = lazy(() => import('./pages/Messages'));
const BookmarkPg = lazy(() => import('./pages/Bookmarks'));
const listPg = lazy(() => import('./pages/List'));
const MorePg = lazy(() => import('./pages/More'));

const App = () => {


  return (
    <BrowserRouter >
      <Suspense>
        <Switch>
          <Route exact path="/" component={HomePg} />
          <Route exact path="/notifications" component={NotificationsPg} />
          <Route exact path="/explore" component={ExplorePg} />
          <Route exact path="/profile" component={ProfilePg} />
          <Route exact path="/messages" component={MessagePg} />
          <Route exact path="/bookmarks" component={BookmarkPg} />
          <Route exact path="/lists" component={listPg} />
          <Route exact path="/more" component={MorePg} />
        </Switch>
      </Suspense>
    </BrowserRouter >

  )
}

export default App