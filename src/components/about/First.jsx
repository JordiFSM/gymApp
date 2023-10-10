import styles from "./about.module.css";

export const First = () => {
  return (
    <div
      className={`${styles.first} margin-sections main-background`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">
        Comienza con nosotros el cambio
        <br />
        mentalizate y gana
      </h1>
    </div>
  );
};
