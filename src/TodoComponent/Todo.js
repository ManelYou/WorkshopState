import React from 'react';
import './Todo.css';
import { Button } from 'react-bootstrap';



const Todo = (props)=>{

    console.log(props);
    return(<div className = "align">
       <li>{props.todo}</li> 
       <Button as="input" type="reset" value="Remove" onClick = {props.onClick} />
    </div>)
}

export default Todo;