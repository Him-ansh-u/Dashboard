import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import SidebarComponent from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import { SummarySection } from "./Components/SummarySection";
import { CenterSection } from "./Components/CenterSection";
import { ProductSell } from "./Components/Product sell/productsSell";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='App'>
          <SidebarComponent />
          <div className='content'>
            <Topbar />
            <SummarySection />
            <CenterSection />
            <ProductSell />
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
