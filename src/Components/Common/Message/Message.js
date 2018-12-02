import React from 'react';

const Message = (props) => {
	return (
		<div style={{ fontSize: '31px', marginTop: '20%', color: '#ccc', textAlign: 'center' }}>
			<div>
				<i className={props.classes}></i>
			</div>
			{props.message}
		</div>
	)
}

export default Message;