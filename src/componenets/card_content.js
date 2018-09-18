import React,{Component} from 'react';
import $ from 'jquery'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


const NewsContent= (props)=> {
        return(
            <Card>
                <CardMedia 
                    component="img"
                    height="140"
                    image={props.media.urlToImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.media.title}
                    </Typography>
                    <Typography component="p">
                        {/* {this.props.media.info.description} */}
                        {props.media.description}
                    </Typography>
                </CardContent>
            </Card>
        )
    
}

export default NewsContent