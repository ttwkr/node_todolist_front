import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Rows = () => {

    const [todo, setTodo] = useState([
        {
            todo : '지금 할일'
        },
        {
            todo : '이따가 할일'
        }
    ]);
    const [content, setContent] = useState({});

    const inputContent = (e) => {
        setContent({
            todo : e.target.value
        });
    }
    const addList = () => {
        setTodo(todo.concat(content))
        setContent('')
    }
    
    // setTodo([
    //     {
    //         todo : '지금 할일'
    //     },
    //     {
    //         todo : '이따가 할일'
    //     }
    // ])
    // const getList = async () => {
    //         await axios.get('/api/list').then((res) => {
    //         setTodo(res.data.data)
    //     })
    // }
    // useEffect( () => {
    //     getList()
    // },[])
    return (
        <div>
            <div>
                <input onChange={inputContent}></input>
            </div>
            <div>
                <button onClick={addList}>+</button>
            </div>
            {
                todo.map((curr, i) => {
                    return (
                        <div key = {i}>
                            {curr.todo}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Rows