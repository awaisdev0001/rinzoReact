import axios from "axios";
import { baseURL } from "src/config";
import {
  errorHandler,
  requestInterceptor,
  responseInterceptor,
} from "./interceptors";
/**
 * Store instance to be injected into API client.
 */

export let store: any;

/**
 * API client instance.
 */
const apiClient = axios.create({
  baseURL: baseURL,
});

/**
 * API store injector.
 *
 * @param _store store instance
 */
export const injectStore = (_store: any) => {
  store = _store;
};

/**
 * Register response interceptor & error handler.
 */
apiClient.interceptors.response.use(responseInterceptor, errorHandler);

/**
 * Register request interceptor.
 */
apiClient.interceptors.request.use(requestInterceptor);

export default apiClient;
