import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {RecipeList} from "./pages/RecipeList";
import {AddRecipe} from './pages/AddRecipe';
import {EditRecipe} from "./pages/EditRecipe";
import {AlertState} from "./context/alert/AlertState";
import {DbState} from "./context/database/DbState";

function App() {
    return (
      <DbState>
          <AlertState>
              <BrowserRouter>
                  <Navbar/>
                  <div className="container pt-4">
                      <Alert />
                      <Switch>
                          <Route path={'/'} exact component={Home} />
                          <Route path={'/recipes'} exact component={RecipeList} />
                          <Route path={'/add-recipe'} exact component={AddRecipe} />
                          <Route path={'/id/:id'} exact component={EditRecipe} />
                          <Route path={'/about'} exact component={About} />
                      </Switch>
                  </div>
              </BrowserRouter>
          </AlertState>
      </DbState>
    );
}

export default App;
