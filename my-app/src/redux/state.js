
import {rerenderEntireTree} from '../render.js';

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: "Hi, how are you?", likesCount: 10 },
			{ id: 2, message: "Hi, I'm fine?", likesCount: 5 },
			{ id: 3, message: "Hi, where are you?", likesCount: 65 },
			{ id: 4, message: "Yo", likesCount: 69 }]
	},
	dialogsPage: {

		messages: [
			{ id: 1, message: "Hi" },
			{ id: 2, message: "How are you?" },
			{ id: 3, message: "Yo" }],
		dialogs: [
			{ id: 1, name: "Hayk" },
			{ id: 2, name: "Sofi" },
			{ id: 3, name: "Haykandukht" },
			{ id: 4, name: "Zara" },
			{ id: 5, name: "Gor" },
			{ id: 6, name: "Betty" },
			{ id: 7, name: "Alya" }],
	}
};

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 987
	};
	state.profilePage.posts.push(newPost);
};

rerenderEntireTree(state); 

export default state;