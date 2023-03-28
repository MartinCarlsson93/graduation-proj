import styles from "./Hero.module.css";

const Hero = ({ header }) => {
  return (
    <div className={styles.container}>
      <h1>{header}</h1>
    </div>
  );
};

export default Hero;
