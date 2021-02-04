import React, { Component } from 'react';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" />
			<h1>ReactJS</h1>
		</header>);
}

export default Header;