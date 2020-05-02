import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import Main from './components/main/main'
import TodoListMain from './components/todolist/main'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path = '/' component={Main}/>
                    <Route exact path = '/todolist' component={TodoListMain}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes