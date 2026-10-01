import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import useContext from '../ToastProvider/useContext';

function ToastShelf() {
  const { toasts, onDismiss, dismissAll } = useContext();

  React.useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape") {
        dismissAll();
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              variant={toast.variant}
              isOpen={true}
              onDismiss={() => onDismiss(toast.id)}
            >
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
