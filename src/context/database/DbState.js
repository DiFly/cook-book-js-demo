import React, {useReducer} from 'react';
import axios from 'axios';
import {DbContext} from "./dbContext";
import {dbReducer} from "./dbReducer";
import {REMOVE_RECIPE, SHOW_LOADER} from "../types";

const url = process.env.REACT_APP_DB_URL;

export const DbState = ({children}) => {
  const initialState = {
    recipes: [],
    loading: false
  };
  const [state, dispath] = useReducer(dbReducer, initialState);

  const showLoader = () => dispath({type: SHOW_LOADER});

  const fetchRecipes = async () => {
    showLoader();
    const res = await axios.get(`${url}/crud`);
    console.log('fetchRecipes', res.data);
  }

  const addRecipe = async recipeInf => {
    const recipe = {
      title: recipeInf.title,
      reason: recipeInf.reason,
      create: new Date().toJSON(),
      description: recipeInf.description
    }

    const res = await axios.post(`${url}/crud`, recipe);
    console.log('addRecipe', res.data);
  }

  const changeRecipe = async recipeInf => {
    const recipe = {
      title: recipeInf.title,
      reason: recipeInf.reason,
      change: new Date().toJSON(),
      description: recipeInf.description
    }

    const res = await axios.post(`${url}/crud`, recipe);
    console.log('putRecipe', res.data);
  }

  const removeRecipes = async id => {
    const res = await axios.delete(`${url}/crud`, id);
    console.log('removeRecipes', res.data);

    dispath({
      type: REMOVE_RECIPE,
      payload: id
    })
  }

  return (
    <DbContext.Provider value={{
      showLoader, addRecipe, removeRecipes, changeRecipe, fetchRecipes,
      loading: state.loading,
      notes: state.notes
    }}>
      {children}
    </DbContext.Provider>
  )
}
