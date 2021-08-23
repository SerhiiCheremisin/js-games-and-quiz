import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import "./Styles/main.css"
import Header from "./Header";
import Cross from "./Cross";
import Quiz from "./Quiz";



function App(): JSX.Element {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/cross'>
                    <Cross/>
                </Route>
                <Route exact path='/quiz'>
                    <Quiz/>
                </Route>
            <Redirect to= '/cross'/>
            </Switch>

        </>
    );
}

export default App;
