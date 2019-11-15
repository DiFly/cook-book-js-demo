import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {RecipeList} from "./pages/RecipeList";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container pt-4">
                <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/recipes'} exact component={RecipeList} />
                    <Route path={'/about'} exact component={About} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
