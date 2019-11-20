import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {DbContext} from "../context/database/dbContext";

export const CreateForm = ({recipe}) => {
  const [title, setTitle] = useState('');
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const alert = useContext(AlertContext);
  const db = useContext(DbContext);

  const submitHandler = event => {
    event.preventDefault();

    if (title.trim()) {
      console.log('recipe.parent', (!recipe.parent ? '' : recipe.parent))
      if (recipe.parent) {
        db.addRecipe({
          title: title,
          reason: reason,
          description: description,
          parent: recipe.parent
        }).then(()=> {
          alert.show('Recipe created', 'success');
        }).catch(() => {
          alert.show('Something wrong... ', 'danger');
        })
      } else {
        console.log("parent3: recipe.parent", recipe)
        db.addRecipe({
          title: title,
          reason: reason,
          description: description,
        }).then(()=> {
          alert.show('Recipe created', 'success');
        }).catch(() => {
          alert.show('Something wrong... ', 'danger');
        })
      }

      console.log(title, reason, description);
      setTitle('');
      setReason('');
      setDescription('');
    } else {
      alert.show('Enter text', )
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>Recipe name</label>
        <input
          type="text"
          className="form-control"
          id="recipeName"
          placeholder="Enter recipe name"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Additional information</label>
        <input
          type="text"
          className="form-control"
          id="recipeAdditionalText"
          placeholder="Enter additional information"
          value={reason}
          onChange={e => setReason(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Recipe description</label>
        <textarea
          className="form-control"
          id="recipeDescription"
          rows="3"
          placeholder="Enter description text information"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};
