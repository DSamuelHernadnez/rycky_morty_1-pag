import  styles  from './Card.module.css'
export default function Card(props) {
return (
      <div className= {styles.card}>
         <button onClick={props.onClose}>x</button>
         <h2>{props.name}</h2> 
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img className= {styles.image} src={props.image} alt={props.name} />
      </div>
   );
}