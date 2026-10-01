import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import useContext from '../ToastProvider/useContext';

function ToastShelf() {
  const { toasts, onDismiss } = useContext();

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper}>
            <Toast
              key={toast.id}
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
