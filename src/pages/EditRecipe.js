import React, {Fragment, useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {CreateForm} from '../components/CreateForm';
import {RecipeSimpleView} from "../components/RecipeSimpleView";
import {DbContext} from "../context/database/dbContext";
import {Loader} from "../components/Loader";


export const EditRecipe = () => {
  const {loading, recipes, fetchRecipesById} = useContext(DbContext);
  let { id } = useParams();

  useEffect(() => {
    fetchRecipesById(id)
    // eslint-disable-next-line
  }, []);

    return (
        <Fragment>
          {!loading ? <CreateForm recipe={recipes[0]}/> : ''}
            <hr/>

          { loading ?
            <Loader/> : <RecipeSimpleView recipes={recipes}/>
          }
        </Fragment>
    )
}
