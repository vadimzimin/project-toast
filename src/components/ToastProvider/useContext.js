import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContext } from './ToastProvider';

function useContext() {
	const context = React.useContext(ToastContext);

	const returValue = React.useMemo(() => {
		const pushToast = ({ message, variant }) => {
			const newToasts = [...context.toasts];
			newToasts.push({ message, variant, id: uuidv4() })
			context.setToasts(newToasts);
		}

		const onDismiss = (id) => {
			const newToasts = context.toasts.filter(toast => toast.id !== id);
			context.setToasts(newToasts);
		}
		return { pushToast, onDismiss, toasts: context.toasts };
	}, [context]);

	return returValue;
}

export default useContext;
