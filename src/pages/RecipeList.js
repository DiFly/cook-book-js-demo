import React, {Fragment} from 'react';
import {Recipes} from "../components/Recipes";
import { SearchForm } from '../components/SearchForm';

export const RecipeList = () => {
    const recipes = new Array(11)
        .fill('')
        .map((_, i) => ({
            id: i,
            title: `Recipe Title ${i}`,
            create: Date.now(),
            description: 'Some text blablabla',
            change: Date.now()
        }))

    return (
        <Fragment>
            <SearchForm/>
            <hr/>
            <Recipes recipes={recipes}/>
        </Fragment>
    )
}
