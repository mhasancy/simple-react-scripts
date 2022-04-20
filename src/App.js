// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import ThemeColorPresets from './components/ThemeColorPresets';

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
