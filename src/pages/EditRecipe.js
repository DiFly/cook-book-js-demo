import React, { Fragment } from 'react';
import { CreateForm } from '../components/CreateForm';
import {RecipeSimpleView} from "../components/RecipeSimpleView";

export const EditRecipe = () => {
    const recipes = new Array(11)
        .fill('')
        .map((_, i) => ({
            id: i,
            title: `Recipe Title ${i}`,
            reason: 'Reason text blablabla',
            description: 'Some text blablabla',
            change: Date.now()
        }))

    return (
        <Fragment>
            <CreateForm />
            <hr/>
            <RecipeSimpleView recipes={recipes} />
        </Fragment>
    )
}
