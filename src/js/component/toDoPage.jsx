import React, { useState, useEffect } from "react";
import ToDoList from "./toDoList.jsx";
import NewToDoInput from "./newToDoInput.jsx";

//create your first component
const ToDoPage = () => {
	// useState hook to setup the input as a controlled variable and a toDo list as an empty array
	const [inputValue, setInputValue] = useState("");
	const [toDoList, setToDoList] = useState([]);
	// defining the API Url endpoint
	const apiUrl = "https://assets.breatheco.de/apis/fake/todos/user/ZeInacioCB";

	// initialize new list if no list exists
	// should probably use this just once to initialize the API
	// confirm with Edgar, as this throws an error 400 or 500 if using mode: no-cors

	// Update the empty list with the toDos stored in the API backend
	// try to use async await
	useEffect(() => { 
		fetch(apiUrl)
		.then(resp => {
			if (!resp.ok) {
				fetch(apiUrl, {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: '[]'
				})
				.then(response => {
					console.log('response from 1st POST:', response.clone());
					if (!response.ok) throw new Error("Something went wrong. What is it Edgar? A user and a list already created?");
					else return response.json();
				})
				.then(data => {console.log('First POST to create the list:', data)})
				.catch(error => {
					console.log(error)
				});
			}
			else return resp.json()
		})
		.then(data => {
			console.log('The 1st update:', data);
			setToDoList(data)})
	}, []);

	// Update toDos list in the backend everytime the current toDoList is changed!
    const updateBackend = (newlist) => {
		fetch(apiUrl, {
			method: "PUT",
			body: JSON.stringify(newlist),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => resp.json())
    	.then(data => { //here is were your code should start after the fetch finishes
			console.log('Backend updated:', data); //this will print on the console the exact object received from the server
    	})
    	.catch(error => { // error handling
			console.log('Error with the update:', error);
    	});
	}

	const handleClickButton = () => {
		fetch(apiUrl)
			.then(resp => resp.json())
			.then(data => {console.log(data)})
			.catch(error => {console.log('error from GET:', error)});
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			// clean and capitalize first letter
			let cleanInputValue = inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1);
			// set new toDo element and add it to the list of ToDo's
			const newToDo = {label: cleanInputValue, done: false}
			setToDoList((prevList) => [newToDo, ...prevList]);
			// update bakend
			updateBackend([newToDo, ...toDoList]);
			// cleaning the input value and tag
			setInputValue("");
		}
	}

	const handleClickRemove = (e) => {
		const removedItem = e;
		console.log(removedItem);
		const newToDoList = toDoList.filter((item) => item.label !== removedItem);
    	setToDoList(newToDoList);
		updateBackend(newToDoList);
	}

	const handleDeleteButton = () => {
		fetch(apiUrl, {
			method: "DELETE",
			headers: {"Content-Type": "application/json"}
		})
		.then(resp => resp.json())
		.then(data => {console.log(data)})
		.catch(error => {console.log(error)})
		setToDoList([]);
	}

	return (
		<div className="text-center list-item my-2">
			<h1 className="my-5">ToDo List for ToDay</h1>
			<NewToDoInput
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown} 
			/>
			<ToDoList toDoList={toDoList} onClick={handleClickRemove} />
			<p className="mt-4 text-start">You have {toDoList.length} more task to do</p>
			<button className="btn btn-danger w-50 m-auto mt-4 mx-2" onClick={handleDeleteButton}>Delete Everything</button>
			<button className="btn btn-info w-50 m-auto mt-4 mx-2" onClick={handleClickButton}>Test Consoles</button>
		</div>
	);
};

export default ToDoPage;
