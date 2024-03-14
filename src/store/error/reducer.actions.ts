import { SHOW_ERROR, CLEAR_ERROR ,SHOW_TOAST} from "./action-types";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const showError = (title: string, message: string) => ({
  type: SHOW_ERROR,
  payload: { title: title, message: message },
});

export const showToast = (type: string, message: string, duration: number):any => {
  switch (type) {
    case 'success':
      toast.success(message, { autoClose: duration });
      break;
    case 'warning':
      toast.warn(message, { autoClose: duration });
      break;
    case 'error':
      toast.error(message, { autoClose: duration });
      break;
    default:
      toast.info(message, { autoClose: duration });
      break;
  }
};

// export const showToast = (status: number, message: string, duration: number) => {
//   if (status >= 200 && status < 300) {
//     toast.success(message, { autoClose: duration });
//   } else if (status >= 400 && status < 600) {
//     toast.error(message, { autoClose: duration });
//   } else {
//     toast.info(message, { autoClose: duration });
//   }
// };

export const clearError = () => ({
  type: CLEAR_ERROR,
});
