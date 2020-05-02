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
        todo.map((curr, i) => {
            return (
                <div key = {i}>
                    {curr.todo}
                </div>
            )
        })
    )
}

export default Rows