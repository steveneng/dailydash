import React,{Component} from 'react';

const Headline_child=(props)=>{
    console.log(props,"exp")
    return(
        <li>
            {props.info.title}
        </li>
    )
}

export default Headline_child;