import React from "react";

const Header = ({ pseudo }) => {
   // const formatPseudo =(pseudo) => /[aeiuoy]/i.test(pseudo[0]) ? `d'${pseudo}` : ` de ${pseudo}`
  return (
    <header>
      <h1> Bienvenue dans ta boite à recettes {pseudo}</h1>
    </header>
  );
};

export default Header;
