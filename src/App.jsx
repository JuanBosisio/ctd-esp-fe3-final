import {Outlet} from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal, ContextProvider, ThemeContext, ThemeProvider, themes } from "./Components/utils/global.context";
import { useContext } from "react";



function App() {
  const {currentTheme} = useContext(ThemeContext);
  return (
    <ThemeProvider>
    <ContextProvider>
      <div className="App">
          <Navbar/>
          <Outlet />         
          <Footer/>
      </div>
    </ContextProvider>
    </ThemeProvider>
  );
}

export default App;