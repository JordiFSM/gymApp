import styles from "./footer.module.css";
import logoIcon from "../../assets/Icon.ico";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {

  return (
    <>
      <div>
        &nbsp;
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_image}>
          <h2>
            Síguenos en Instagram o Facebook
            &nbsp;
            <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{fontSize:"45px", marginRight: "15px",color: '#E4405F'}} /></a>
            <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} style={{fontSize:"45px", marginRight: "15px", color:"blue"}}/></a>
          </h2>
        </div>
        <div className={`${styles.footer_content} container `}>
          <div>
            <div className={styles.logo_holder}>
              <img src={logoIcon} alt="Logo Icon" />

              <h3>Strengthy</h3>
            </div>
            <p>
              Estaremos anciosos de servirle
              contactenos a:
            </p>
            <div className={styles.info}>
              <span>Teléfono :</span>
              <p>+60000202</p>
              <span>Correo :</span>
              <p>stregthyGYM@gmail.com</p>
            </div>
          </div>
          <div>
            <ul>
              <li>Páginas de utilidad</li>
              <li>Calculadora BMI</li>
              <li>Horarios</li>
              <li >404 Page</li>
              <li>Licenses</li>
              <li>Contacto</li>
              <li>Ubicacion</li>
            </ul>
          </div>
          <div>
            <input type="text" placeholder="Ingresa tu email" style={{color:"white"}}/>
            <button >Subscribete</button>
            <h4><span style={{color:"rgb(184, 35, 72)"}}>Jordi Segura © </span> 2023 All Rights Reserved </h4>
            &nbsp;
            <h4>Privacy Policy </h4>
          </div>
        </div>
      </div>
    </>
  );
};
