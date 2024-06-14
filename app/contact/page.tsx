import styles from "../styles/Contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1
          className={`${styles.heading} ${styles.text_gray} ${styles.text_center} ${styles.font_xl}`}
        >
          İletişim
        </h1>
        <p
          className={`${styles.paragraph} ${styles.font_p} ${styles.text_center}`}
        >
          Bize ulaşın! İletişim bilgileri burada yer alacak.
        </p>
      </div>
    </div>
  );
}
