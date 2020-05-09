import React, { useState } from 'react';
import axios from 'axios';

const JoinForm = () => {

    const [memberInfo, setMemberInfo] = useState(
        {
            member_id : '',
            password : '',
            email : '',
            phoneNumber : ''
        })

    const changeForm = (e) => {
        setMemberInfo({
            ...memberInfo,
            [e.target.name] : e.target.value
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/member/join',
        {
            data : {
                form : memberInfo
            }
        }).then((res) => {
            console.log(res.data)
        })
    }
    
    return (
        <div>
            <form onSubmit = {formSubmit}>
                <div>
                    <span>
                        ID
                    </span>
                    <input
                        name = 'member_id'
                        type = 'text'
                        value = {memberInfo.id}
                        onChange= {changeForm}
                    />
                </div>
                <div>
                    <span>
                        PASSWORD
                    </span>
                    <input
                        name = 'password'
                        type = 'password'
                        value = {memberInfo.password}
                        onChange= {changeForm}
                    />
                </div>
                <div>
                    <span>
                        Email
                    </span>
                    <input
                        name = 'password'
                        type = 'text'
                        value = {memberInfo.email}
                        onChange= {changeForm}
                    />
                </div>
                <button type='submit' value='submit'>submit</button>
            </form>
        </div>
    );
}

export default JoinForm