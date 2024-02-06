 

import React, { useState, useEffect , useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Call the onSubmit function passed through props with a new todo object
        props.onSubmit({
            id: Math.floor(Math.random() * 10000), // Generate a pseudo-unique ID for the new todo
            text: input.trim() // Trim the input to remove whitespace from both ends
        });

        setInput(''); // Clear the input field after submission
    };

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Add a todo'
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                />{'\n'}
                <button className='todo-button'>Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;
