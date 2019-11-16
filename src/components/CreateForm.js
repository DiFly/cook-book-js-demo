import React from "react";

export const CreateForm = () => {
  return (
    <form>
      <div className="form-group">
        <label>Recipe name</label>
        <input
          type="text"
          className="form-control"
          id="recipeName"
          placeholder="Enter recipe name"
        />
      </div>
      <div className="form-group">
        <label>Additional information</label>
        <input
          type="email"
          className="form-control"
          id="recipeAdditionalText"
          placeholder="Enter additional information"
        />
      </div>
      <div className="form-group">
        <label>Recipe description</label>
        <textarea
          className="form-control"
          id="recipeDescrition"
          rows="3"
          placeholder="Enter description text information"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};