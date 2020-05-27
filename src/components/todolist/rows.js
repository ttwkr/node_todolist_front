import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Rows = () => {

    const [todo, setTodo] = useState([]);
    const [content, setContent] = useState({});

    const inputContent = (e) => {
        if(todo.length === 0) {
            setContent({
                contents : e.target.value
            })
        }else {
            setContent({
                id : todo[todo.length-1].id,
                contents : e.target.value
            });
        }
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
    const deleteContent = (commentId) => {
        setTodo(todo.filter((curr) => curr.id !== commentId))
        axios.delete('http://localhost:8000/api/delete/todolist',
        {
            data : {
                id : commentId
            }
        }).then((res)=>{
            console.log(res.data);
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
                        <div key = {i}>
                            {curr.contents}
                            <button onClick={()=>{ deleteContent(curr.id) }}>삭제</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Rows