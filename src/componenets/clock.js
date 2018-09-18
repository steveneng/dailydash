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
        const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
      return (
        <div>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit">
               {this.state.date.getDate()} {monthNames[this.state.date.getMonth()]} {this.state.date.getFullYear()} 
              </Typography>
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