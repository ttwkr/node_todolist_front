import React from 'react'
import Rows from './rows'
import { Link } from 'react-router-dom'

const TodoListMain = () => {
    return (
        <div>
            <Rows></Rows>
            <Link to="/">to Main Page</Link>
        </div>
    )
}

export default TodoListMain