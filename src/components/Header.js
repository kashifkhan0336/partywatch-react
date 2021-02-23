import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import JoinRoomBtn from "./JoinRoomBtn";
import CreateRoomBtn from "./CreateRoomBtn";
import AddVideoBtn from './AddVideoBtn'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            PartyWatch
          </Typography>
          {/*<Button color="inherit">Login</Button>*/}
          <JoinRoomBtn></JoinRoomBtn>
          <CreateRoomBtn></CreateRoomBtn>
          <AddVideoBtn></AddVideoBtn>
        </Toolbar>
      </AppBar>
    </div>
  );
}