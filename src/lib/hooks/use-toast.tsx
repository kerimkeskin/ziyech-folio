import {toast, ToastOptions} from 'react-toastify';

type ToastType = 'success' | 'error' | 'info';

export function useToast() {
  const showToast = (type: ToastType) => (message: string, arg?: ToastOptions<[]>) => {
    toast[type](message, arg);
  };

  const success = showToast('success');
  const error = showToast('error');
  const info = showToast('info');

  return {success, error, info};
}
