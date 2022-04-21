// scroll bar
import "simplebar/src/simplebar.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// contexts
import { SettingsProvider } from "./contexts/SettingsContext.tsx";
import { CollapseDrawerProvider } from "./contexts/CollapseDrawerContext.tsx";
//
import App from "./App.tsx";

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <SettingsProvider>
      <CollapseDrawerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CollapseDrawerProvider>
    </SettingsProvider>
  </HelmetProvider>,
  document.getElementById("root")
);
