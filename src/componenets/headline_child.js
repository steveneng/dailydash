import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const Headline_child = props => {
  // console.log(props.info,"exp")
  return (
    <List>
      <Divider />
      <ListItem>
        <Typography variant="body1" color="default">
          {props.info.title}
          <br />
          -{" "}
          {props.info.author !== null
            ? props.info.author !== ""
              ? props.info.author
              : props.info.source.name
            : props.info.source.name}
        </Typography>
      </ListItem>
    </List>
  );
};

export default Headline_child;
