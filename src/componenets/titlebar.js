import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Titles = props => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Titles;
