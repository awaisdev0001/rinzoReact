import { store } from "src/store";
import { GlobalWebSocket } from "src/services";
import { Routes, Route } from "react-router-dom";
import { injectStore } from "src/services/apiClient";
import { Fallback } from "src/view/components/Error";
import { ErrorBoundary } from "react-error-boundary";
import { reactErrorHandler } from "src/helpers/errorHandlers";
import { ErrorPortal } from "src/view/components/Error/ErrorPortal";
// import { clearError } from "src/store/error";
import {
  Home,
  Top,
  Sweeps,
  Dumps,
  Leaderboard,
  HomeActivity,
  CheckoutPage,
  CollectionPage,
  Items,
  CollectionActivity,
  Analytics,
  NftPage,
  Profile,
  Portfolio,
  ProfileActivity,
  ProfileStatistics,
  Settings,
  SendNFTs,
  Marketing,
  PageNotFound,
  Transfer,
  SellNFTs,
  SellNFTsItems,
  MyListings,
  OffersReceived,
  OffersSent,
  CreateListing,
  WalletPortfolio,
  WalletActivity,
  WalletStatistics,
  Wallet
} from 'src/view/pages';

const App = () => {
  GlobalWebSocket();
  return (
    <>
      <ErrorBoundary FallbackComponent={Fallback} onError={reactErrorHandler}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Top />} />
            <Route path="/sweeps" element={<Sweeps />} />
            <Route path="/dumps" element={<Dumps />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/activity" element={<HomeActivity />} />
          </Route>
          <Route path="/checkout-page" element={<CheckoutPage />} />
          <Route path="/collection/:slug" element={<CollectionPage />}>
            <Route path="items" element={<Items isItems />} />
            <Route path="listings" element={<Items />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="activity" element={<CollectionActivity />} />
            <Route path=":token_id" element={<NftPage />} />
          </Route>
          <Route path="/profile" element={<Profile />}>
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="statistics" element={<ProfileStatistics />} />
            <Route path="activity" element={<ProfileActivity />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="/send" element={<SendNFTs />} />
          <Route path="/manage" element={<SellNFTs />}>
            <Route path="items" element={<SellNFTsItems />} />
            <Route path="listings" element={<MyListings />} />
            <Route path="offers-received" element={<OffersReceived />} />
            <Route path="offers-sent" element={<OffersSent />} />
          </Route>
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/transfer-page" element={<Transfer />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/wallet/:slug" element={<Wallet />}>
            <Route path="portfolio" element={<WalletPortfolio />} />
            <Route path="statistics" element={<WalletStatistics />} />
            <Route path="activity" element={<WalletActivity />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ErrorBoundary>
      <ErrorPortal />
    </>
  );
};

export default App;
