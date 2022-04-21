// routes
import Router from "./routes/index.tsx";
// theme
import ThemeProvider from "./theme/index.tsx";
// components
import ScrollToTop from "./components/ScrollToTop.tsx";
import ThemeColorPresets from "./components/ThemeColorPresets.tsx";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ThemeColorPresets>
        {/* <RtlLayout> */}

        {/* <Settings /> */}
        <ScrollToTop />
        <Router />

        {/* </RtlLayout> */}
      </ThemeColorPresets>
    </ThemeProvider>
  );
}
