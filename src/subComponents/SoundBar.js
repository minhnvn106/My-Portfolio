import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import {DarkTheme} from '../components/Themes'

import music from "../assets/audio/u-said-it-v13-1167.mp3"

const Box = styled.div`
display:flex;
cursor:pointer;
position:fixed;
left:8rem;
top:3rem;
z-index:10;

&>*:nth-child(1){
    animation-delay: 0.5s;
}
&>*:nth-child(2){
    animation-delay: 0.2s;
}
&>*:nth-child(3){
    animation-delay: 0.3s;
}
&>*:nth-child(4){
    animation-delay: 0.2s;
}
&>*:nth-child(5){
    animation-delay: 0.5s;
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.color === 'dark' ? DarkTheme.body : DarkTheme.text  };
border: 1px solid ${props => props.theme.text};

animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 2px;
margin:0 0.1rem
`


const SoundBar = (props) => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    return (
        <Box onClick={() => handleClick()}>
            <Line color={props.theme} click={click}/>
            <Line color={props.theme} click={click}/>
            <Line color={props.theme} click={click}/>
            <Line color={props.theme} click={click}/>
            <Line color={props.theme} click={click}/>


            <audio src={music} ref={ref}  loop />
            
            
        </Box>
        
    )
}

export default SoundBar
