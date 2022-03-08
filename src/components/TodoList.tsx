import React from 'react';

import Todo from './../todo.model';
import './TodoList.css';

interface TodoListProps{
    items: Todo[];
    onDeleteTodo: (itemId: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {    
    return (<ul>
        {
            props.items.map((todo: Todo) =>{            
               return <li key={todo.id}>
                        <span>{todo.title}</span>
                        <button onClick = { props.onDeleteTodo.bind( null, todo.id ) }>DELETE</button>
                      </li>            
            })
        }
        </ul>) 
}

export default TodoList;