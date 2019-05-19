import React, { Component } from "react";
import AjouterRecette from "./AjouterRecette";
import AdminForm from "./AdminForm";

export default class Admin extends Component {
  render() {
    const {
      recettes,
      ajouterRecette,
      modifierRecette,
      chargerExemple
    } = this.props;
    return (
      <div className="cards">
        <AjouterRecette ajouterRecette={ajouterRecette} />
        {Object.keys(recettes).map(key => (
          <AdminForm
            id={key}
            key={key}
            recettes={recettes}
            modifierRecette={modifierRecette}
          />
        ))}
        <footer>
          <button onClick={chargerExemple}> Remplir</button>
        </footer>
      </div>
    );
  }
}
