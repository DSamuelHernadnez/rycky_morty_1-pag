import React, { useState } from 'react';
import styles from './App.module.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then(response => response.json())
         .then(data => {
            if (data.name) {
               const exists = characters.find(c => c.id === data.id);
               if(exists) return alert("Ese personaje ya existe");
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = (id) => {
      const filtered = characters.filter((char) => char.id !== Number(id));
      setCharacters(filtered);
   };

   return (
      <div className= {styles.app}>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
