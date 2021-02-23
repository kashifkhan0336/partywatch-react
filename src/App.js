import React, { useRef } from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AlertDialog from "./components/Alert";
import Header from "./components/Header";
import Video from "./components/Video"
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "#7986cb",
      main: "rgba(0, 0, 0, 1)",
      dark: "#303f9f",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff4081",
      main: "rgba(126, 211, 33, 1)",
      dark: "#c51162",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  }
});
export default function App() {
  const childRef = useRef();
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }));
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <button onClick={() => childRef.current.handleClickOpen()}>
          Click
        </button>
        <AlertDialog ref={childRef} />
        <Video></Video>
      </ThemeProvider>
    </>
  );
}
