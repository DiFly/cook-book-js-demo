import React from 'react';

export const Recipes = ({recipes}) => {
    let  formatter = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return (
      <div className="card-deck">
        {recipes.map(recipe => (
          <div className="col-sm-4 mb-3">
            <div className="card" key={recipe.id}>
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Created {formatter.format(recipe.create)}
                </h6>
                <p className="card-text">{recipe.description}</p>
                <a href="#" className="card-link">
                  See all recipe changes
                </a>
                <button type="button" className="btn btn-outline-danger btn-sm">
                  &times;
                </button>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Last updated {formatter.format(recipe.change)}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}
