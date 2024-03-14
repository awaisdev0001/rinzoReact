import {
  ChangeEventHandler,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { GlobalCart, WalletConnect } from "src/view/components";
import { Footer, Header, HeaderMobile, SimpleHeader } from "src/view/templates";

import { useAppDispatch, useAppSelector } from "src/hooks";
import {
  addTheme,
  changeOpenCart,
  changePopUp,
  changeSweepCart,
  changeVisitCount,
} from "src/store";
import {
  CHECKOUT_PAGE,
  LISTING_PAGE,
  MARKETING_PAGE,
  TRANSFER,
} from "./contsants";
import { tCollectionReducer } from "src/store/collections/reducer";
import { tCartOpenReducer } from "src/store/layout/reducer";
import { EMode, tTheme } from "src/typed/types";

interface IProps {
  children: ReactNode;
}

export const SimpleLayouts: FC<IProps> = ({ children }) => {
  const [isCartContainPage, setIsCartContainPage] = useState<boolean>(true);
  const [isModeChanged, setIsModeChanged] = useState<boolean>(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [, updateState] = useState<boolean>();
  const forceUpdate = useCallback(
    () => updateState((prevState) => !prevState),
    []
  );
  const { selectedCards } = useAppSelector<tCollectionReducer>(
    (state) => state.collectionReducer
  );
  const { cartOpen, popupOpen, visitCount } = useAppSelector<tCartOpenReducer>(
    (state) => state.cartOpenReducer
  );
  const { account, openWalletPopUp } = useAppSelector(
    (state) => state.accountReducer
  );

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const checkPathName = () => {
    const path = pathname.split("/");
    if (
      (path.includes("collection") && path.includes("listings")) ||
      (path.includes("collection") && path.includes("items")) ||
      pathname === "/checkout-page"
    ) {
      setIsCartContainPage(false);
    } else setIsCartContainPage(true);
  };

  const dispatch = useAppDispatch();
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  let storedTheme = localStorage.getItem("theme");

  if (storedTheme === null) {
    storedTheme = EMode.LIGHT;
  }

  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  let defaultMode =
    storedTheme === EMode.LIGHT || (storedTheme === null && prefersLight);

  if (defaultMode) {
    setLight();
  }

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    forceUpdate();
    setIsModeChanged(e.target.checked);

    if (e.target.checked) {
      dispatch(addTheme(EMode.LIGHT));
      setLight();
      defaultMode = true;
    } else {
      setDark();
      dispatch(addTheme(EMode.DARK));
      defaultMode = false;
    }
  };

  useEffect(() => {
    const theme: tTheme = localStorage.getItem("theme") as tTheme;

    dispatch(addTheme(theme));

    if (theme === EMode.LIGHT) {
      setLight();
    } else if (theme === EMode.DARK) {
      setDark();
    }
  }, [isModeChanged, storedTheme]);

  useEffect(() => {
    if (visitCount && account.address === "" && pathname === "/") {
      dispatch(changeVisitCount(false));
      navigate("/marketing");
    }
    checkPathName();
    dispatch(changeOpenCart(false));
    dispatch(changePopUp(false));
    dispatch(changeSweepCart(false));
  }, [pathname]);

  const layoutByPageHandler = (pageName: string) => {
    switch (Boolean(pageName)) {
      case pageName === CHECKOUT_PAGE:
        return <SimpleHeader />;
      case pageName === MARKETING_PAGE:
        return null;
      case pageName === TRANSFER:
        return <SimpleHeader />;
      case pageName === LISTING_PAGE:
        return <SimpleHeader />;

      default:
        return (
          <>
            <Header
              defaultMode={defaultMode}
              toggleTheme={toggleTheme}
              account={account}
            />
            <HeaderMobile
              openedMenu={(val) => {
                setOpenMenu(val);
              }}
              account={account}
              defaultMode={defaultMode}
              toggleTheme={toggleTheme}
            />
          </>
        );
    }
  };

  if (pathname === MARKETING_PAGE) {
    return (
      <div style={{ paddingTop: 0 }}>
        {layoutByPageHandler(pathname)}
        {children}
      </div>
    );
  }

  return (
    <div
      style={pathname === MARKETING_PAGE ? { paddingTop: 0 } : {}}
      className={`app  ${
        (openWalletPopUp || openMenu || popupOpen) && "app--hidden"
      }`}
    >
      {layoutByPageHandler(pathname)}
      <div className="app__content">
        <>{children}</>
        {isCartContainPage ? (
          <div
            className={`cart-block cart-block--absolute ${
              cartOpen && "cart-block--open"
            }`}
          >
            <div className="cart-block__content">
              <GlobalCart items={selectedCards} />
            </div>
          </div>
        ) : (
          false
        )}
      </div>
      <WalletConnect />
      <Footer />
    </div>
  );
};
