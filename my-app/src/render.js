import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './redux/state.js';
import {BrowserRouter} from 'react-router-dom'

export let rerenderEntireTree = (state) => {

ReactDOM.render(
	<BrowserRouter>
		<App state={state} addPost={addPost}/>
	</BrowserRouter>,
	document.getElementById('root')
);
}

