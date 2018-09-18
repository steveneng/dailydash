import React,{Component} from 'react';
import $ from "jquery";
import Headline_child from './headline_child';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class Headlines extends Component{
    constructor(props){
        super(props);
        this.state={
            headlines:[]
        }
        $.ajax({
            type: "get",
            url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=5e161d0fb95b487da8bf2daced3e729d",
            data:"json",
            success:  (response)=>{
               this.setState({
                   headlines:response.articles
               })
            }
        });
    }

// componentDidMount(){
//     $.ajax({
//         type: "get",
//         url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=5e161d0fb95b487da8bf2daced3e729d",
//         data:"json",
//         success:  (response)=>{
//            this.setState({
//                headlines:response.articles
//            })
//         }
//     });
// }

render(){
    const listed= this.state.headlines.map((val,ind)=>
        <Headline_child key={ind} info={val} />
    )
    
    return(
        <Card>
            <CardContent>
                <Typography variant="headline" component="h2">
                    Main HeadLines
                </Typography>
            </CardContent>
            <CardContent>
                {listed}
            </CardContent>
        </Card>
    )
}

}

export default Headlines