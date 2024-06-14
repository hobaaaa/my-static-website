import styles from "../styles/About.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1
          className={`${styles.heading} ${styles.text_gray} ${styles.text_center} ${styles.font_xl}`}
        >
          Hakkımızda
        </h1>
        <p
          className={`${styles.paragraph} ${styles.font_p} ${styles.text_center}`}
        >
          Bu sayfa hakkımızda bilgi verir.
        </p>
      </div>
    </div>
  );
}
