import React from 'react'
import TodoItem from "../Components/TodoItem"
export default function Todos(props) {
    let h3styleElement={
        color:"gray",
        fontSize:"3.5em",
        textDecoration:"underline"
    }
    return (
        <div className="container Todos">
            <h3 className="text-center" style={h3styleElement}>Todo List</h3>
            {props.todo.length===0?"No todos to display :)":props.todo.map((todo)=>{
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}
        </div>
    )
}

