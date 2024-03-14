import { WEB_SOCKET } from './action-types';


export const tWebSocket = (Instance: any) => ({
  type: WEB_SOCKET,
  payload: { instance: Instance },
});
