import { io } from "socket.io-client";
import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "src/hooks";
import { tCurrencyPrice, tWebSocket, newlistingOfCards } from "src/store";
import { tWebSocketReducer } from "src/store/globalWebSocket/reducer";
import { IETHPriceUpdate /*, ITypesUpdate */ } from "src/typed/webSocket";
// import { rows } from "src/view/pages/CollectionPage/CollectionActivity/data";

/**
 * Global websocket handler.
 */
export function GlobalWebSocket() {
    const dispatch = useAppDispatch();

    // Selector to use instance of socket
    const { instance } = useAppSelector<tWebSocketReducer>((state) => state.WebSocketReducer);

    const isFiltered = useAppSelector((state) => state.collectionReducer.isFiltered);

    const [isConnected, setIsConnected] = useState(instance.connected);

    const [reconnectCounter, setReconnectCounter] = useState(0);

    const tryReconnect = (_instance: any) => {
        if (reconnectCounter < 3) {
            setTimeout(() => {
                _instance.connect((err: any) => {
                    if (err) {
                        setReconnectCounter((prevState) => prevState + 1);
                        tryReconnect(_instance);
                    }
                });
            }, 2000);
        }
    };

    useEffect(() => {
        const _instance = io({ reconnection: false });

        dispatch(tWebSocket(_instance));

        _instance.on("connect", () => {
            setIsConnected(true);
        });

        _instance.on("disconnect", () => {
            setIsConnected(false);
        });

        _instance.on("eth-usd/update", (msg: IETHPriceUpdate) => {
            dispatch(tCurrencyPrice(1, msg.price));
        });

        _instance.on("tryReconnect", () => {
            setReconnectCounter(0);
            tryReconnect(_instance);
        });

        // remove handlers
        return () => {
            _instance.off("connect");
            _instance.off("disconnect");
            _instance.off("eth-usd/update");
        };
    }, [dispatch]);
}
