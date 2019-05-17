import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import recettes from './recettes';
import Admin from './components/admin';
import Card from './components/Card'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes : {}
  };
chargerExemple = () => this.setState({recettes})
  render() {
    const cards = Object.keys(this.state.recettes).map(item =>
      <Card details= {this.state.recettes[item]} key= {item} />
    )
    return ( 
      <div className="box">
        <Header pseudo = {this.state.pseudo}/>
        <div className="cards">
            {cards}
        </div>
      <Admin chargerExemple ={this.chargerExemple}></Admin>
      </div>
    );
  }
}

export default App;
