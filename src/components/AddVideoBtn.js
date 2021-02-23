import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from '@material-ui/core/styles';
import eventBus from "../utils/EventBus";

export default function FormDialog() {
  const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));
  const classes = useStyles();
  const loadFile = (e) => {
    var fileURL = URL.createObjectURL(e.target.files[0]);
    let video_object = {
      type: "video",
      title: "Example title",
      sources: [
        {
          src: fileURL,
          type: "video/mp4",
          size: 720,
        },
      ],
      poster: "/path/to/poster.jpg",
    };
    eventBus.dispatch("Blob_created", video_object);
  };
  return (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(e) => loadFile(e)}
      />
      <label htmlFor="contained-button-file">
        {/* <Button variant="contained" color="primary" component="span"> */}
        {/*   Upload */}
        {/* </Button> */}
        <Button style={{'margin':'6px'}} variant="outlined" color="secondary"  component="span">
          Load Video
        </Button>
      </label>
    </div>
  );
}
