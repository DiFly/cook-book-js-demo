import React from 'react';

export const RecipeSimpleView = ({recipes}) => {
    let  formatter = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return (
        <div>
            {recipes.map(recipe => (
                <div className="card mb-3" key={recipe.id}>
                    <div className="card-header">{recipe.reason}</div>
                    <div className="card-body">
                        <h5 className="card-title">{recipe.title}</h5>
                        <p className="card-text">{recipe.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            Updated {formatter.format(recipe.change)}
                        </small>
                    </div>
                </div>

            ))}
        </div>
    );
}
