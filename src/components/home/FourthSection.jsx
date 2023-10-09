import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faStar  } from '@fortawesome/free-solid-svg-icons'; 
import styles from "./home.module.css";

export const FourthSection = () => {
  return (
    <>
    <div
          className={styles.fourth_box_title}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h4></h4>
          <p><b>LO MÁS IMPORTANTE</b></p>
        </div>
      <div className={`${styles.fourth} container`}>
        <div
          className={styles.fourth_box}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h4>01</h4>
          <p>Mantener una dieta adecuada</p>
        </div>
        <div
          className={styles.fourth_box}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h4>02</h4>
          <p>Rutina de entrenamiento</p>
        </div>
        <div
          className={styles.fourth_box}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h4>03</h4>
          <p>Entrenamiento progresivo</p>
        </div>

        <div
          className={styles.fourth_box}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
            <h4>04</h4>
            <p>Marcar un objetivo  <FontAwesomeIcon  icon={faFire} style={{color: 'red'}}/> </p>
        </div>
      </div>
    </>
  );
};

