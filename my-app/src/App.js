import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import Music from './Components/Music/Music.jsx';
import News from './Components/News/News.jsx';
import Settings from './Components/Settings/Settings.jsx';
import { BrowserRouter, Route } from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/*<Route path='/Profile' component={Profile} />
          <Route path='/Dialogs' component={Dialogs} />*/}
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />

          <Route path='/Profile' render={ () => <Profile state={ props.state.profilePage } addPost={props.addPost}/>} />
          <Route path='/Dialogs' render={ () => <Dialogs state={ props.state.dialogsPage } />} />
        </div>
      </div>
    </BrowserRouter>);
}


export default App;
