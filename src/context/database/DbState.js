import React, {useReducer} from 'react';
import axios from 'axios';
import {DbContext} from "./dbContext";
import {dbReducer} from "./dbReducer";
import {ADD_RECIPE, FETCH_RECIPES, REMOVE_RECIPE, SHOW_LOADER} from "../types";

const url = process.env.REACT_APP_DB_URL;

export const DbState = ({children}) => {
  const initialState = {
    recipes: [],
    loading: false
  };
  const [state, dispatch] = useReducer(dbReducer, initialState);

  const showLoader = () => dispatch({type: SHOW_LOADER});

  const fetchRecipes = async () => {
    showLoader();
    const res = await axios.get(`${url}/api`);
    console.log('fetchRecipes', res.data);

    const payload =  Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    })

    dispatch({
      type: FETCH_RECIPES,
      payload
    })
  }



  const addRecipe = async recipeInf => {
    const recipe = {
      title: recipeInf.title,
      reason: recipeInf.reason,
      description: recipeInf.description
    }

    try {
      const res = await axios.post(`${url}/api`, recipe);
      console.log('addRecipe', res.data);
      const payload = {
        ...recipe,
        id: res.data.id
      }

      dispatch({
        type: ADD_RECIPE,
        payload
      })

    }catch (e) {
      throw new Error(e.message)
    }
  }

  const changeRecipe = async recipeInf => {
    const recipe = {
      title: recipeInf.title,
      reason: recipeInf.reason,
      description: recipeInf.description
    }

    const res = await axios.post(`${url}/api`, recipe);
    console.log('putRecipe', res.data);
  }

  const removeRecipe = async id => {
    const res = await axios.delete(`${url}/api`, id);
    console.log('removeRecipes', res.data);

    dispatch({
      type: REMOVE_RECIPE,
      payload: id
    })
  }

  return (
    <DbContext.Provider value={{
      showLoader, addRecipe, removeRecipe, changeRecipe, fetchRecipes,
      loading: state.loading,
      recipes: state.recipes
    }}>
      {children}
    </DbContext.Provider>
  )
}
