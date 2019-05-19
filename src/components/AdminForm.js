import React from "react";

const AdminForm = () => {
  return (
    <div className="card">
      <form className="admin-form ">
        <input
          name="nom"
          type="text"
          placeholder="Nom de la recette"
        />
        <input
          name="image"
          type="text"
          placeholder="Nom de l'image"
    
        />
        <textarea
          name="ingredients"
          id=""
          rows="3"
          placeholder="Ingredients"

        />
        <textarea
          name="instructions"
          id=""
          rows="15 "
          placeholder="Listes des instructions"

        />
        <button type="submit">Supprimer</button>
      </form>
    </div>
  );
};

export default AdminForm;
