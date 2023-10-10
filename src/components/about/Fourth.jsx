import styles from "./about.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faIdCard , faUserCheck, faCalendar, faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


export const Fourth = () => {

  return (
    <div className={styles.four}>
      <div className={styles.four_image}></div>
      <div className={`${styles.four_content} sections-padding`}>
        <div className={`${styles.values} container`}>
          <div>
            <p className="paragraph">Valores</p>
            <h2>Mis principales valores laborales</h2>
          </div>
        </div>
        <div className={`${styles.four_boxes} container`}>
          <div data-aos="fade-right">
            <FontAwesomeIcon icon={faIdCard} style={{fontSize:"30px", marginRight: "5px",color:""}}/> 
         
            <h3>Entrenadores certificados</h3>
            <p>
            La certificación de coaches en fitness y bienestar aporta profesionalismo, credibilidad y seguridad a la industria. 
            </p>
          </div>
          <div data-aos="fade-right">
           <FontAwesomeIcon icon={faNewspaper} style={{fontSize:"30px", marginRight: "5px",color:""}}/> 
         
            <h3>Permisos sanitarios</h3>
            <p>
            La certificación de permisos sanitarios demuestra que el negocio cumple con los estándares y regulaciones de salud pública, incluyendo prácticas de higiene y condiciones ambientales adecuadas. 
            </p>
          </div>
          <div data-aos="fade-right">
            <FontAwesomeIcon icon={faUserCheck} style={{fontSize:"30px", marginRight: "5px",color:""}}/> 
            <h3>Años de experiencia</h3>
            <p>
            La experiencia acumulada por los entrenadores a lo largo de los años es un indicador valioso de su competencia y capacidad para guiar a los clientes hacia sus objetivos de salud y fitness. 
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.numbers} container`}>
        <div>
          <h3>1+
          &nbsp;
          <FontAwesomeIcon icon={faCalendar} style={{fontSize:"30px", marginRight: "5px",color:""}}/> 
          
          </h3>
          <p>Años de experiencia
            </p>
        </div>
        <div>
          <h3>100+
          &nbsp;
          <FontAwesomeIcon icon={faFaceLaughBeam} style={{fontSize:"30px", marginRight: "5px",color:""}}/> 
          
          </h3>
          <p>Clientes contentos
          </p>
        </div>
        <div>
          <h3>2k 
          &nbsp;
          <FontAwesomeIcon icon={faInstagram} style={{fontSize:"30px", marginRight: "5px",color:""}}/> 
          </h3>
          <p>Seguidores en Instagram    
          </p>
        </div>
      </div>
    </div>
  );
};
