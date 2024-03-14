import { store } from "src/store";
import { showToast } from "src/store/error/reducer.actions";

let activeRequests: any = [];
const getEndpointOfUrl = (req: any) => {
  let fullUrl = new URL(`${req?.baseURL + req?.url}`);
  return fullUrl.pathname;
};

const removeExistingEndpoint = (request: any) => {
  const index = activeRequests.findIndex(
    (req: any) =>
      req.url === getEndpointOfUrl(request) &&
      req.body === JSON.stringify(request.data) &&
      req.method === request.method &&
      req.componentId === request.headers.componentid // check for the same component ID
  );
  if (index > -1) {
    activeRequests.splice(index, 1);
  }
};

/**
 * API request interceptor.
 *
 * @param request any
 * @returns any
 */
export const requestInterceptor = (request: any) => {
  const controller = new AbortController();
  request.signal = controller.signal;
  // Extract the component ID from the headers of the request
  const componentId = request.headers.componentId;

  activeRequests
    .filter(
      (item: any) =>
        item.url === getEndpointOfUrl(request) &&
        item.body === JSON.stringify(request.data) &&
        item.method === request.method &&
        item.componentId === componentId // check for existing requests with the same component ID
    )
    .forEach((item: any) => {
      item.controller.abort();
    });

  activeRequests.push({
    url: getEndpointOfUrl(request),
    body: JSON.stringify(request.data),
    method: request.method,
    controller,
    componentId, // add the component ID to the activeRequests array
  });

  return request;
};

/**
 * API response interceptor.
 *
 * @param response any
 * @returns any
 */
export const responseInterceptor = (response: any) => {
  removeExistingEndpoint(response.config);
  return response;
};

export const errorHandler = (error: any) => {
  const componentId = error?.config.headers.componentId;
  removeExistingEndpoint(error?.config);
  const message = error?.response?.data?.message || error?.statusText;
  if (error.code !== "ERR_CANCELED") {
    showToast(
      error?.response?.data?.code,
      error?.response?.data?.message,
      3000
    );
  }
  return Promise.reject(error);
};
