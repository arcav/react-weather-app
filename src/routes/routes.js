import React from 'react';
import { Route, Switch } from 'react-router-dom'



const routes = () => {
    return (
        <>
        <Switch>
        <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route excat path="/NoMatch"component={NoMatch} /> 
        </Switch>
            
        </>
    )
}

export default routes
