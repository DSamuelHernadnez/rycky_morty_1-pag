import Card from   './Card'
import styles from './Cards.module.css';
export default function Cards(props) {
const { characters } = props;

   return (
      <div  className={styles.cards}>
         {characters.map((character) => (
            <Card
               key={character.id} 
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}   
               image={character.image}
               onClose={() => window.alert('Emulando el cierre de la card')}
            />
         ))}
      </div>
   );
}
