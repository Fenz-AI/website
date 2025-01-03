import Link from "next/link";
import styles from "./Card.module.css"; // Styling for the card component

const Card = ({ title, excerpt, link, date }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.excerpt}>{excerpt}</p>
      <p>{date}</p>
      <Link href={link}>
        <button className={styles.button}>Read More</button>
      </Link>
    </div>
  );
};

export default Card;
