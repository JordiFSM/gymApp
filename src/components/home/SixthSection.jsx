import styles from "./home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGem, faHeart  } from '@fortawesome/free-solid-svg-icons'; 
import { } from '@fortawesome/free-brands-svg-icons'



export const SixSection = () => {


  const buttonStyles = {
    position: 'relative',
    fontSize: '18px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    display: 'inline-block',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '0.7em 1em',
    border: '3px solid #fdd700',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    transition: '0.3s ease all',
    color: "#fdd700",
    zIndex: 1,
  };
  
  const buttonBeforeStyles1 = {
    ...buttonStyles,
    ':before': {
      content: '""',
      transition: '0.5s all ease',
      position: 'absolute',
      top: 0,
      left: '50%',
      right: '50%',
      bottom: 0,
      opacity: 0,
      backgroundColor: '#fdd700',
      zIndex: -1,
    },
    ':hover, :focus': {
    },
    ':hover:before, :focus:before': {
      transition: '0.5s all ease',
      left: 0,
      right: 0,
      opacity: 1,
    },
    ':active': {
      transform: 'scale(0.9)',
    },
  };

  return (
    <div className={`${styles.six} container`}>
      <div>
        <p className="paragraph" style={{color:"red"}}>Nuestros planes</p>
        <h2>Selecciona tu plan</h2>
      </div>
      <div className={styles.plans} data-aos="flip-up">
        <div className={styles.plan} >
          <h3>
          <FontAwesomeIcon icon={faHeart} style={{color:"red"}} /> 
            &nbsp;
            Basico
          </h3>
          <div style={{backgroundColor:"rgb(26, 105, 252)"}}>
            <h4>₡ 1500 / diarios</h4>
          </div>
          <ul>
            <li>Válido por 1 día</li>
            <li>Coaching necesario</li>
            <li>Acceso a la instalación</li>
            <li>Rutina a elegir</li>
            <li>Mentoría técnica</li>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button  style={{color: "rgb(26, 105, 252)", border:"3px solid rgb(26, 105, 252)"}} > Suscribir </button>
          </ul>
        </div>
        <div className={styles.plan}>
          <h3>
          <FontAwesomeIcon icon={faStar}  style={{color:"gold"}}/> 
          &nbsp;
            Standard
          </h3>
          <div style={{backgroundColor:"rgb(241, 35, 180)"}}>
            <h4>₡ 12000 / quincenal</h4>
          </div>
          <ul>
            <li>Válido por 2 semanas</li>
            <li>Coaching necesario</li>
            <li>Acceso a la instalación</li>
            <li>Rutina personalizada</li>
            <li>Mentoría técnica</li>
            <li>Seguimiento de cargas</li>
            <br></br>
            <br></br>
            
            <button > Suscribir </button>
          </ul>
        </div>
        <div className={styles.plan} >
          <h3>
          <FontAwesomeIcon icon={faGem} style={{color:"#40dada"}} /> 
          &nbsp; 
          Premium
          </h3>
          <div style={{backgroundColor:"rgb(253, 215, 0)"}}>
            <h4>₡ 20000 / mensual</h4>
          </div>
          <ul>
          <li>Válido por 1 mes</li>
            <li>Coaching necesario</li>
            <li>Acceso a la instalación</li>
            <li>Rutina personalizada</li>
            <li>Mentoría técnica</li>
            <li>Seguimiento de cargas</li>
            <li>Seguimiento de peso mensual</li>
            <button style={{ color: "#fdd700", border:"3px solid #fdd700" }}> Suscribir </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

