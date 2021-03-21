import styles from "../../styles/components/RestTimeModal.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { CountdownContext } from "../../contexts/CountdownContext";

export function RestTimeModal() {
  const { isRestTimeOpen, closeRestModal, startRestCountDown } = useContext(
    CountdownContext
  );

  return (
    <>
      {isRestTimeOpen && (
        <div className={styles.container}>
          <div className={styles.modalContainer}>
            <header>
              <span>Hora do descanso</span>
              <button className={styles.closeIcon} onClick={closeRestModal}>
                <AiOutlineCloseCircle />
              </button>
            </header>
            <main>
              <strong>Seu cerebro merece um descanso, não acha ?</strong>
              <img src="/overtraining.webp" alt="overtraining" />
            </main>
            <footer>
              <button
                className={styles.confirmar}
                onClick={() => {
                  closeRestModal();
                  startRestCountDown();
                }}
              >
                Confirmar
              </button>
              <button className={styles.cancelar} onClick={closeRestModal}>
                Cancelar
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
