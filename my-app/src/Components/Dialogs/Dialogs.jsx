import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx'

let newMessageElement = React.createRef();

let addMessage = () => {
	let text = newMessageElement.current.value;
	alert(text);
}

const Dialogs = (props) => {


	let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

	let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div>
					<textarea ref={newMessageElement}></textarea>
				</div>
				<div>
					<button onClick={addMessage}>Add Message</button>
				</div>
			</div>
		</div>)
}

export default Dialogs;