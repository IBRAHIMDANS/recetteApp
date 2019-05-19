import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import recettes from "./recettes";
import Admin from "./components/admin";
import Card from "./components/Card";
import base from "./base";
class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  };
  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: "recettes"
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  ajouterRecette = recette => {
    const recettes = { ...this.state.recettes };
    recettes[`recete-${Date.now()}`] = recette;
    this.setState({ recettes });
  };
  modifierRecette = (key, newrecette) => {
    const recettes = { ...this.state.recettes };
    recettes[key] = newrecette;
    this.setState({ recettes });
  };
  chargerExemple = () => this.setState({ recettes });
  render() {
    const cards = Object.keys(this.state.recettes).map(item => (
      <Card details={this.state.recettes[item]} key={item} />
    ));
    return (
      <div className="box">
        <Header pseudo={this.state.pseudo} />
        <div className="cards">{cards}</div>
        <Admin
          recettes={this.state.recettes}
          chargerExemple={this.chargerExemple}
          ajouterRecette={this.state.ajouterRecette}
          modifierRecette={this.modifierRecette}
        />
      </div>
    );
  }
}

export default App;
