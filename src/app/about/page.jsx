import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/31707366/pexels-photo-31707366/free-photo-of-majestic-view-of-mont-saint-michel-abbey.jpeg"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
export default AboutPage;
