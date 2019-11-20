import React, {Fragment, useContext, useEffect} from 'react';
import {Recipes} from "../components/Recipes";
import {DbContext} from "../context/database/dbContext";
import {Loader} from "../components/Loader";

export const RecipeList = () => {
  const {loading, recipes, fetchRecipes} = useContext(DbContext);

  useEffect(() => {
    fetchRecipes()
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      { loading
        ? <Loader/>
        : <Recipes recipes={recipes}/>
      }
    </Fragment>
  )
}
