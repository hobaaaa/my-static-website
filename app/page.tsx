import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1
          className={`${styles.heading} ${styles.text_gray} ${styles.text_center} ${styles.font_xl}`}
        >
          Ana Sayfa
        </h1>
        <p
          className={`${styles.paragraph} ${styles.font_p} ${styles.text_center}`}
        >
          Hoş geldiniz! Bu ana sayfa içeriğidir.
        </p>
      </div>
    </div>
  );
}
