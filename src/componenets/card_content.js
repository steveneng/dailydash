import React,{Component} from 'react';
import $ from 'jquery'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


const NewsContent= (props)=> {
        if(
            !$.isEmptyObject({})){
            console.log(props.media)
        }
        return(
            <Card>
                <CardMedia 
                    component="img"
                    height="140"
                    // image={media.urlToImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {console.log(props.media)}
                    </Typography>
                    <Typography component="p">
                        {/* {this.props.media.info.description} */}
                        {/* {media[randomArticle].description} */}
                    </Typography>
                </CardContent>
            </Card>
        )
    
}

export default NewsContent