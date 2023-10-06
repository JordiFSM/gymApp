import { useNavigate } from "react-router";
import styles from "./home.module.css";

const FirstSection = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.first_section} data-aos="zoom-out-down">
      <h1 className="main-heading">
        Mantén tu cuerpo
        <br />
        Saludable & Fuerte
      </h1>
      <div>
        <button onClick={() => navigate("/schedule")}>Inicia ahora</button>
      </div>
    </div>
  );
};

export default FirstSection;
