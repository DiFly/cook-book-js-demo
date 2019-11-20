import React, { Fragment } from 'react';
import { CreateForm } from '../components/CreateForm';

export const AddRecipe = () => {
    return (
        <Fragment>
            <CreateForm recipe={{parent: null}} />
        </Fragment>
    )
}
