import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () =>  this.setState({
            date: new Date()
          }),
        1000
      );
    }
  
    render() {
      return (
        <div>
          <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
          {this.state.date.toLocaleTimeString()}
          </Typography>
        </Toolbar>
      </AppBar>
        </div>
      );
    }
  }

export default Clock;