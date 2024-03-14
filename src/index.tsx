import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import "semantic-ui-css/semantic.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import 'src/assets/styles/styles.scss';
import { SimpleLayouts } from 'src/view/layouts';
import { store } from './store';
import { Provider } from 'react-redux';

import ScrollToTop from './helpers/ScrollTop';

// Wagmi wallet connect modules
import { WagmiConfig, createClient, configureChains, mainnet, goerli } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Wagmi wallet connect options
const { provider, webSocketProvider } = configureChains(
  [mainnet, goerli],
  [publicProvider()],
);
 
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const theme = createTheme({
	typography: {
		fontFamily: 'Inter',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 2000
		}
	}
});

export const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<ScrollToTop />
		<React.StrictMode>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<ThemeProvider theme={theme}>
						<WagmiConfig client={client}>
							<SimpleLayouts>
								<App />
							</SimpleLayouts>
							<ToastContainer />
						</WagmiConfig>
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
);

reportWebVitals();
