import styles from "../../styles/components/RestTimeModal.module.css";

export function RestTimeModal() {
  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        <header>Hora de descanso</header>
        <main>
          <strong>Seu cerebro merece um descanso, não acha ?</strong>
          <img src="/overtraining.webp" alt="overtraining" />
        </main>
        <footer>
          <button className={styles.confirmar}>Confirmar</button>
          <button className={styles.cancelar}>Cancelar</button>
        </footer>
      </div>
    </div>
  );
}
