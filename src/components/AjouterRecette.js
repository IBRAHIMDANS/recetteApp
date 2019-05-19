import React, { Component } from "react";

export default class AjouterRecette extends Component {
  state = {
    nom: "",
    image: "",
    ingredients: "",
    instructions: ""
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const recette = { ...this.state };
    this.props.ajouterRecette(recette);
    Object.keys(recette).forEach(item => (recette[item] = ""));
    this.setState({ ...recette });
  };
  render() {
    return (
      <div className="card" onSubmit={this.handleSubmit}>
        <form className="admin-form ajouter-recette">
          <input
            name="nom"
            type="text"
            placeholder="Nom de la recette"
            value={this.state.nom}
            onChange={this.handleChange}
          />
          <input
            name="image"
            type="text"
            placeholder="Nom de l'image"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <textarea
            name="ingredients"
            id=""
            rows="3"
            placeholder="Ingredients"
            value={this.state.ingredients}
            onChange={this.handleChange}
          />
          <textarea
            name="instructions"
            id=""
            rows="15 "
            placeholder="Listes des instructions"
            value={this.state.instructions}
            onChange={this.handleChange}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}
