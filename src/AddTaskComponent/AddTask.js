import React from 'react';
import {Button} from 'react-bootstrap';

const AddTask = (props) =>{
    return(<div>
        <Button as="input" type="reset" value="Add" onClick = {props.onChildClick}/>
    </div>)
}

export default AddTask;