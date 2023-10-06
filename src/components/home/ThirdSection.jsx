import styles from "./home.module.css";

import photo1 from "../../assets/home2.jpg";
import photo2 from "../../assets/home3.jpg";
import photo3 from "../../assets/home4.jpg";

export const ThirdSection = () => {

  return (
    <div className={`${styles.third} container sections-padding`}>
      <div
        className={styles.text}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <h2>
          Respeta tu cuerpo,
          <br />
          es algo que nadie más que tu puedes hacer
        </h2>
        <p>
        Recuerda que cada step que tomas hacia un estilo de vida más activo es un paso más cerca de una versión más saludable y feliz de ti mismo. ¡Tú eres más fuerte de lo que crees, y cada pequeño esfuerzo cuenta en tu viaje hacia el bienestar!
        </p>
        <div className={styles.text_one}>
          <div>
            <h3>Motivación</h3>
            <p>
            La motivación es como el clima: cambia. La consistencia, en cambio, es tu brújula hacia el éxito en el ejercicio.     
            </p>
          </div>
          <img src={photo1} alt="Photo one" />
        </div>
        <div className={styles.text_two}>
          <img src={photo2} alt="Photo two" />
          <div>
            <h3>Inpira</h3>
            <p>
            Sé la inspiración que motiva a otros a cuidar de su salud y transformar sus cuerpos. Tu cambio impacta más de lo que imaginas.
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles.fourth_image_container}
        data-aos="fade-up"
        data-aos-duration="3000">
        <img src={photo3} alt="Man Exercise" />
      </div>
    </div>
  );
};
