import React  from 'react';
import Todo from '../TodoComponent/Todo';

const TodoList = (props) =>{
  console.log(props);
  const todos = props.data;

 
  

  // const ClickButton = () => {
  //   alert("You are sure to delete this task!!");
  //   //let list1 = list.filter(ite => ite !== item);
  //   console.log("");
  // }
  
    return(<div>
       <ol>
       {todos.map((item, index) => (
        <Todo key={index} onClick={() => {props.removeTodo(index)}} todo={item} />
       ))
      
      }

       </ol>
       

    </div>
    )
}
export default TodoList;