import styles from "./trainers.module.css";

import photo1 from "../../assets/coach2.jpg";
import photo2 from "../../assets/coach1.jpg";
import photo3 from "../../assets/coach3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const Trainers = () => {
  return (
    <div className={`${styles.trainers} container sections-padding`}>
      <div className={styles.trainers_head}>
        <p className="paragraph" style={{color:"red"}}>Nuestros entrenadores</p>
        <h2>Encantados de ayudarte a conseguir objetivos</h2>
      </div>

      <div className={styles.boxes}>
        <div
          className={styles.box}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <img src={photo1} alt="" />
          <div>
            <div>
              <h4>Carlos Rojas</h4>
              <p>
              <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>/5
              </p>
            </div>
            <h5>Especialidad :</h5>
            <p>Crossfit, Nutrición & Rehabilitación</p>
            <a href="#" target="_blank"> <FontAwesomeIcon icon={faInstagram} style={{fontSize:"30px", marginRight: "15px",color: '#E4405F'}} /> </a>
            <a href="#" target="_blank"> <FontAwesomeIcon icon={faFacebook} style={{fontSize:"30px", marginRight: "15px", color:"blue"}}/> </a>
            <a href="#" target="_blank"> <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:"30px", marginRight: "5px",color:"green"}}/> </a>
          </div>
        </div>
        <div
          className={styles.box}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <img src={photo2} alt="" />
          <div>
            <div>
              <h4>Madison Sanders</h4>
              <p>
              <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>/5
              </p>
            </div>
            <h5>Especialidad :</h5>
            <p>Nutrición & Yoga</p>
            <a href="#" target="_blank"> <FontAwesomeIcon icon={faInstagram} style={{fontSize:"30px", marginRight: "15px",color: '#E4405F'}} /> </a>
            <a href="#" target="_blank"> <FontAwesomeIcon icon={faFacebook} style={{fontSize:"30px", marginRight: "15px", color:"blue"}}/> </a>
            <a href="#" target="_blank"> <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:"30px", marginRight: "5px",color:"green"}}/> </a>
          </div>
        </div>

        <div
          className={styles.box}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <img src={photo3} alt="" />
          <div>
            <div>
              <h4>Joshua Frankilin</h4>
              <p>
              <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>/5
              </p>
            </div>
            <h5>Especialidad :</h5>
            <p>Crossfit, Powerlift e Hipertrofia</p>
            <a href="#" target="_blank"> <FontAwesomeIcon icon={faInstagram} style={{fontSize:"30px", marginRight: "15px",color: '#E4405F'}} /> </a>
            <a href="#" target="_blank"> <FontAwesomeIcon icon={faFacebook} style={{fontSize:"30px", marginRight: "15px", color:"blue"}}/> </a>
            <a href="#" target="_blank"> <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:"30px", marginRight: "5px",color:"green"}}/> </a>
          </div>
        </div>
      </div>
    </div>
  );
};
