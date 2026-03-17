// import  styles  from './Card.module.css'
// export default function Card(props) {
// return (
//       <div className= {styles.card}>
//          <button onClick={props.onClose}>x</button>
//          <h2>{props.name}</h2> 
//          <h2>{props.status}</h2>
//          <h2>{props.species}</h2>
//          <h2>{props.gender}</h2>
//          <h2>{props.origin.name}</h2>
//          <img className= {styles.image} src={props.image} alt={props.name} />
//       </div>
//    );
// }

import styles from './Card.module.css';

export default function Card(props) {
   return (
      <div className={styles.card}>
         <button className={styles.closeButton} onClick={props.onClose}>X</button>
         
         {/* Contenedor de imagen con el marco eléctrico  */}
         <div className={styles.imageContainer}>
            <img className={styles.image} src={props.image} alt={props.name} />
         </div>

         {/* Información del personaje */}
         <div className={styles.content}>
            <h2 className={styles.name}>{props.name}</h2>
            
            <div className={styles.dataGrid}>
               <div className={styles.dataItem}>
                  <span>STATUS</span>
                  <p>{props.status}</p>
               </div>
               <div className={styles.dataItem}>
                  <span>SPECIES</span>
                  <p>{props.species}</p>
               </div>
               <div className={styles.dataItem}>
                  <span>GENDER</span>
                  <p>{props.gender}</p>
               </div>
               <div className={styles.dataItem}>
                  <span>ORIGIN</span>
                  <p>{props.origin.name}</p>
               </div>
            </div>
         </div>
      </div>
   );
}