import styles from "./home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGem, faHeart  } from '@fortawesome/free-solid-svg-icons'; 
import { } from '@fortawesome/free-brands-svg-icons'



export const SixSection = () => {

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
          <div style={{
            background: 'linear-gradient(to right, rgb(26, 105, 252), rgb(255, 70, 70))',
            padding: '20px', // Agrega el espaciado según sea necesario
            color: 'white' // Cambia el color del texto si es necesario
          }}>
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
            <button style={{
              backgroundImage: 'linear-gradient(to right, rgb(26, 105, 252), rgb(255, 70, 70))',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              border: '2px solid',
              borderImage: 'linear-gradient(to right, rgb(26, 105, 252), rgb(255, 70, 70)) 1',
              transition: '0.3s ease all', 
              position: 'relative',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'white'
               e.currentTarget.style.backgroundClip = "initial"
               e.currentTarget.style.WebkitBackgroundClip = "initial" }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'transparent'
              e.currentTarget.style.backgroundClip = "text"
              e.currentTarget.style.WebkitBackgroundClip = "text" } }
            >
              Suscribir
            </button>
          </ul>
        </div>
        <div className={styles.plan}>
          <h3>
          <FontAwesomeIcon icon={faStar}  style={{color:"gold"}}/> 
          &nbsp;
            Standard
          </h3>
          <div style={{
            background: 'linear-gradient(to right, rgb(241, 35, 180), rgb(255, 215, 0))',
            padding: '20px', // Agrega el espaciado según sea necesario
            color: 'white' // Cambia el color del texto si es necesario
          }}>
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
            <button style={{
              backgroundImage: 'linear-gradient(to right, rgb(241, 35, 180),  rgb(255, 215, 0))',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              border: '2px solid',
              borderImage: 'linear-gradient(to right, rgb(241, 35, 180),  rgb(255, 215, 0)) 1',
              transition: '0.3s ease all', 
              position: 'relative',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'white'
               e.currentTarget.style.backgroundClip = "initial"
               e.currentTarget.style.WebkitBackgroundClip = "initial" }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'transparent'
              e.currentTarget.style.backgroundClip = "text"
              e.currentTarget.style.WebkitBackgroundClip = "text" } }
            >
              Suscribir
            </button>
          </ul>
        </div>
        <div className={styles.plan} >
          <h3>
          <FontAwesomeIcon icon={faGem} style={{color:"#40dada"}} /> 
          &nbsp; 
          Premium
          </h3>
          <div style={{
            background: 'linear-gradient(to right, rgb(253, 215, 0), #40dada)',
            padding: '20px', // Agrega el espaciado según sea necesario
            color: 'white' // Cambia el color del texto si es necesario
          }}>
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
            <button style={{
              backgroundImage: 'linear-gradient(to right, rgb(253, 215, 0),  #40dada)',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              border: '2px solid',
              borderImage: 'linear-gradient(to right,  rgb(253, 215, 0),  #40dada) 1',
              transition: '0.3s ease all', 
              position: 'relative',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'white'
               e.currentTarget.style.backgroundClip = "initial"
               e.currentTarget.style.WebkitBackgroundClip = "initial" }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'transparent'
              e.currentTarget.style.backgroundClip = "text"
              e.currentTarget.style.WebkitBackgroundClip = "text" } }
            >
              Suscribir
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

