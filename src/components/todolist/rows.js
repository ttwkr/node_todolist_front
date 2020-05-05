import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Rows = () => {

    const [todo, setTodo] = useState([]);
    const [content, setContent] = useState({});

    const inputContent = (e) => {
        setContent({
            contents : e.target.value
        });
    }
    const addList = () => {
        setTodo(todo.concat(content))
        setContent('')
        axios.post('http://localhost:8000/api/add/todolist', content).then((res)=>{
            console.log(res)
        })
    }
    
    const getList = async () => {
            await axios.get('http://localhost:8000/api/todolist').then((res) => {
                console.log(res.data)
                setTodo(res.data)
        })
    }
    useEffect( () => {
        getList()
    },[])
    
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
                        <div key = {curr.id}>
                            {curr.contents}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Rows