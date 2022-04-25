import './App.css';
import React  from 'react';
import TodoList from "./TodoListComponent/TodoList";
import AddTask from './AddTaskComponent/AddTask';
import { Form } from 'react-bootstrap';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      taskdata:[],
      updated: true
    }
    this.onInputchange = this.onInputchange.bind(this)
    this.ClickButton = this.ClickButton.bind(this);
  }

ClickButton = () =>{
    let { taskdata, input} = this.state;
    taskdata.push(input);
    this.setState({
      updated: false
    })
    
}

onInputchange = (event) =>{
  this.setState({
    input: event.target.value
  });

}

removeTodo2 = (index) => {
  if(window.confirm("You are sure to delete this task!!")){
    console.log(index);
    let list = this.state.taskdata;
    delete list[index];
    this.setState({
      taskdata: list
    });
    //setTodos(newTodos);
    console.log(list);
  }
  else{
    console.log("cancel operation...")
  }
 
  //return todos;
  
};

  render(){
    return (
     <div>
       <h1>Workshop to do tasks list</h1>
       <br/>
       {!this.state.updated && <TodoList data={this.state.taskdata} removeTodo = {this.removeTodo2}/> }
      <div className='input'>
      <Form.Control type="text" placeholder="Normal text" onChange={this.onInputchange} className = "flex-items"/>
      <AddTask onChildClick = {this.ClickButton} />
      </div>
       
     
      
   

     </div>
    );
  }
 
}

export default App;
