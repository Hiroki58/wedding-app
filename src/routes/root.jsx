import MenuBar from "../assets/menu-bar"
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      light: "",
      dark: "",
      contrastText: "#f73378"
    },
    secondary: {
      main: "#f73378",
      light: "",
      dark: "",
      contrastText: ""
    }
  }
});

export default function Root() {
    return (
      <ThemeProvider theme={theme}>
        <MenuBar />
        <div id="detail" class="w-screen place-content-center">
            <Outlet />
        </div>
      </ThemeProvider>
    );
  }