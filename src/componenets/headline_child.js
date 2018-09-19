import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardActionArea from "@material-ui/core/CardActionArea";
import Paper from '@material-ui/core/Paper';


const Headline_child = props => {
  // console.log(props.info,"exp")
  const clicked = e => {
    console.log(props.info.url);
    window.open(props.info.url);
  };
  return (
      
    <CardActionArea onClick={clicked}>

      <ListItem divider={true}>
        <Typography variant="body1" color="default">
          {props.info.publishedAt}
          <br/>
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
    
    </CardActionArea>
   
  );
};

export default Headline_child;
