import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <div>
                <Link to="/todolist">Todo List</Link>
            </div>
            <div>
                <Link to='/join'>Join</Link>
            </div>
        </div>
    )
}

export default Main