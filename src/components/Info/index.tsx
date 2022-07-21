import { infoProps } from "./info.interface";
import styles from "./info.module.scss";

export function Info({ title, total, hasColorTitle = true }: infoProps) {
  return (
    <div className={styles.wrapper}>
      <strong
        className={
          hasColorTitle ? styles.strongWithConcluded : styles.strongCreateTask
        }
      >
        {title}
      </strong>
      <div className={styles.icon}>
        <p>{total}</p>
      </div>
    </div>
  );
}
