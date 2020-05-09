import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import Main from './components/main/main'
import TodoListMain from './components/todolist/main'
import JoinForm from './components/joinForm/joinForm'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path = '/' component={Main}/>
                    <Route exact path = '/todolist' component={TodoListMain}/>
                    <Route exact path = '/join' component={JoinForm}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes