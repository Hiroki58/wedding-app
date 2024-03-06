import MenuBar from "../assets/menu-bar"
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      light: "#000000",
      dark: "#000000",
      contrastText: "#000000"
    },
    secondary: {
      main: "#f73378",
      light: "#000000",
      dark: "#000000",
      contrastText: "#000000"
    }
  }
});

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <div id="detail" className="w-screen place-content-center  overflow-y-scroll overflow-x-hidden bg-white h-svh">\
        <MenuBar className="top-0" />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}