import React from 'react';
import "../Styles/projets.css"

function Projets() {
  return (
    <div className="container"> 
      <h4>Projets</h4>
      <div className="box-container">
        <div className="box"> 
          <img src="/images/listePoke.jpeg" alt="p1"/>
          <h3>PokeApp</h3>  
          <p>C'est une application mobile de gestion des pokemons en utilisant les api</p>
          <a href="https://github.com/SAMIHA88/PokeApp" className="btn">github -PokeApp-</a>
        </div> 
        <div className="box">
          <img src="/images/parakech.png" alt="p1"/>
          <h3>ParaKech</h3>  
          <p>C'est une application de gestion du stock d'une parapharmacie en utilisant c#</p>
          <a href="https://github.com/SAMIHA88/parakech_windowsForm" className="btn">github -ParaKech-</a>
        </div> 
        <div className="box">
          <img src="/images/gStock.png" alt="p1"/>
          <h3>Stock-Management</h3>  
          <p>C'est une application en JAVA Swing qui gèrent les E/S du stock</p>
          <a href="https://github.com/SAMIHA88/gestionStock-_Java-Mysql_" className="btn">github -GStock-</a>
        </div> 
        <div className="box">
          <img src="/images/e-school.png" alt="p1"/>
          <h3>e-school</h3>  
          <p>C'est une application en PHP qui gèrent une école primaire "La Réussite"</p>
          <a href="https://github.com/SAMIHA88/e-school" className="btn">github -e_school-</a>
        </div> 
        <div className="box">
          <img src="/images/e-stock laravel.png" alt="p1"/>
          <h3>e-stock</h3>  
          <p>C'est une application en PHP  qui gèrent les E/S du stock sous LARAVEL</p>
          <a href="https://github.com/SAMIHA88/e-stock" className="btn">github -e_stock-</a>
        </div> 
        <div className="box">
          <img src="/images/ckd.png" alt="p1"/>
          <h3>CKD-Prediction</h3>  
          <p>C'est une application desktop en python qui prédie si une personne sera attaquée avec CKD ou pas </p>
          <a href="https://github.com/SAMIHA88/CKD-Prediction" className="btn">github -CKD_Prediction-</a>
        </div> 
      </div>
    </div>
  );
}

export default Projets;
