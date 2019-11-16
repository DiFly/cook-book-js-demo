import React from "react";

export const CreateForm = () => {
  return (
    <form>
      <div className="form-group">
        <label for="recipeName">Recipe name</label>
        <input
          type="text"
          className="form-control"
          id="recipeName"
          placeholder="Enter recipe name"
        />
      </div>
      <div class="form-group">
        <label for="recipeAdditionalText">Additional information</label>
        <input
          type="email"
          className="form-control"
          id="recipeAdditionalText"
          placeholder="Enter additional information"
        />
      </div>
      <div class="form-group">
        <label for="recipeDescrition">Recipe description</label>
        <textarea
          class="form-control"
          id="recipeDescrition"
          rows="3"
          placeholder="Enter description text information"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">
        Create
      </button>
    </form>
  );
};