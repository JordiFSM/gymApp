import styles from "./home.module.css";
import photo1 from "../../assets/s1.jpg";
import photo2 from "../../assets/s2.jpg";
import photo4 from "../../assets/s3.jpg";
import photo3 from "../../assets/quet.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons'; 

// import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const FiveSection = () => {
  return (
    <div
      className={`${styles.five} sections-padding`}
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom">
      <div className={`${styles.five_content} container `}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}>
          <SwiperSlide>
            <div className={styles.swipe_content}>
              <div className={styles.five_image_holder}>
                <img src={photo1} alt="" className={styles.trainer} />
                <img src={photo3} alt="" />
              </div>

              <div className={styles.five_text}>
                <h4>Oscar</h4>
                <p>Athletics /Trainer</p>
                <div className={styles.starts}>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                </div>
                <p>
                  Descripcion
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swipe_content}>
              <div className={styles.five_image_holder}>
                <img src={photo2} alt="" className={styles.trainer} />
                <img src={photo3} alt="" />
              </div>

              <div className={styles.five_text}>
                <h4>Javier</h4>
                <p>Athletics /Trainer</p>
                <div className={styles.starts}>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                </div>
                <p>
                Descripcion
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swipe_content}>
              <div className={styles.five_image_holder}>
                <img src={photo4} alt="" className={styles.trainer} />
                <img src={photo3} alt="" />
              </div>

              <div className={styles.five_text}>
                <h4>Nattasha</h4>
                <p>Athletics /Trainer</p>
                <div className={styles.starts}>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                  <FontAwesomeIcon  icon={faStar} style={{color: 'gold'}}/>
                </div>
                <p>
                Descripcion
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
