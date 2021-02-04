import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {

	return (
		<div className='content'>
			<ProfileInfo />
			<MyPosts posts={props.state.posts} addPost={props.addPost} />
		</div>);
}

export default Profile; 