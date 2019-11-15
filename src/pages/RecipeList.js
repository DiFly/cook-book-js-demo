import React, {Fragment} from 'react';
import {Form} from "../components/Form";
import {Recipes} from "../components/Recipes";

export const RecipeList = () => {
    const recipes = new Array(3)
        .fill('')
        .map((_, i) => ({
            id: i,
            title: `R Title ${i}`,
            create: Date.now(),
            description: 'Some text blablabla',
            change: Date.now()
        }))

    return (
        <Fragment>
            <Form/>
            <hr/>
            <Recipes recipes={recipes}/>
        </Fragment>
    )
}
