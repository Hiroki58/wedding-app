import MenuBar from "../assets/menu-bar"
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF00FF",
      light: "#000000",
      dark: "#000000",
      contrastText: "#FF00FF"
    },
    secondary: {
      main: "##000000",
      light: "#000000",
      dark: "#000000",
      contrastText: "#FF00FF"
    }
  }
});

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <div id="detail" className="w-screen place-content-center  overflow-y-scroll overflow-x-hidden bg-pink-200 h-svh">\
        <MenuBar className="top-0" />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}