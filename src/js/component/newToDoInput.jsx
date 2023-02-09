import React from "react";

const NewToDoInput = (props) => {
	return <input 
			className="text-center my-2"
			type="text"
			placeholder="What do you have to do today?"
			value={props.value}
			onChange={props.onChange}
			onKeyDown={props.onKeyDown}
			/>
};

export default NewToDoInput;