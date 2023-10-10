import styles from "./about.module.css";
import photo2 from "../../assets/about5.jpeg";

export const Third = () => {
  return (
    <div
      className={`${styles.third} container sections-padding`}
      data-aos="fade-right">
      <div className={styles.third_one}>
        <div className={styles.one_content}>
          <p className="paragraph">Bienvenido</p>
          <h2>
            La historia detras
            <br />
            de nosotros
          </h2>
          <p>
          Hace unos años, un visionario llamado Carlos decidió emprender un camino diferente: crear un gimnasio que no solo transformara cuerpos, sino también vidas. Inspirado por su propia historia de superación personal, Carlos se propuso construir un espacio que motivara y empoderara a otros.
          </p>
        </div>
        <div className={styles.one_content2}>
          <h3>Historia</h3>
          <p>
          Con esfuerzo y dedicación, convirtió un antiguo almacén en un refugio de salud y bienestar. Pintó las paredes con colores vivos, instaló equipos de última generación y creó un ambiente que irradiaba positividad.

          Lo más especial fue la creación del "Rincón de Logros", donde cada miembro podía compartir sus éxitos. Este rincón se convirtió en un testimonio vivo de las historias de transformación y fortaleza.

          Hoy, nuestro gimnasio no es solo un lugar para entrenar, sino una comunidad que impulsa a cada individuo a alcanzar sus metas. Únete a nosotros en este viaje hacia una vida más saludable y plena. ¡Bienvenido a Strengthy, donde cada día es una oportunidad para ser la mejor versión de ti mismo!
          </p>
          <img src={photo2} alt="" />
        </div>
      </div>
      <div className={styles.third_two}>
        <div className={styles.two_content}>
          <h3>Nuestra Misión</h3>
          <p>
          Nuestra misión es ser el faro de inspiración para la transformación personal y el bienestar integral. Nos comprometemos a proporcionar un entorno acogedor y motivador donde cada individuo, sin importar su nivel de condición física, pueda descubrir su fuerza interior y alcanzar sus metas de salud y fitness. A través de programas innovadores, coaching personalizado y una comunidad unida, nos esforzamos por ser el catalizador que impulsa a las personas a adoptar un estilo de vida activo y saludable.
          </p>
        </div>
        <div className={styles.two_content2}>
          <h3>Nuestra Visión</h3>
          <p>
          Visualizamos un futuro donde la salud y el bienestar son accesibles para todos. Buscamos ser reconocidos como el epicentro de la transformación positiva, donde las personas encuentren inspiración, apoyo y recursos para llevar vidas más saludables y plenas. Nos esforzamos por ser líderes en innovación en la industria del fitness, ofreciendo programas adaptados, instalaciones de vanguardia y una comunidad vibrante que nutre el cuerpo, la mente y el espíritu. 
          </p>
        </div>
      </div>
    </div>
  );
};
