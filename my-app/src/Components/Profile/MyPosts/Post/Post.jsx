import React, { Component } from 'react';
import s from './Post.module.css';

const Post = (props) => {

	return (
		<div className={s.item}>
			<img src='https://image.freepik.com/free-vector/beautiful-wing-s-logo-design-template_104950-78.jpg' />
			{props.message}
			<div>
				<span>Like</span> {props.likesCount}
			</div>
		</div>);
}

export default Post;