import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'
import bulb from '../assets/Images/bubble.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const up = keyframes`
0% {
    transform : translateY(0); 
    opacity: 0;
 }
 50% {
     opacity: 1;
  }
 70% {
     opacity: 1;
  }
 100% {
     transform : translateY(-110vh); 
     opacity: 0;
  }
`

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Bubble = styled.div`
width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: -70px;
img{
    width: 50px;
    animation: ${up} 7s linear infinite;
}
&>*:nth-child(1){
    animation-delay: 2s;
    width: 25px;
}
&>*:nth-child(2){
    animation-delay: 1.6s
}
&>*:nth-child(3){
    animation-delay: 5s;
    width: 20px;
}
&>*:nth-child(4){
    animation-delay: 1s;
}
&>*:nth-child(5){
    animation-delay: 3.5s;
}
&>*:nth-child(6)
{animation-delay: 6s;
    width: 25px;}
    &>*:nth-child(7)
 {animation-delay: 4s;
    width: 30px;}   
`


// color: ${(props) => props.theme.text};
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: #fff;
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Bubble>
            <img src={bulb} alt="bubble1"/>
            <img src={bulb} alt="bubble2"/>
            <img src={bulb} alt="bubble3"/>
            <img src={bulb} alt="bubble4"/>
            <img src={bulb} alt="bubble5"/>
            <img src={bulb} alt="bubble6"/>
            <img src={bulb} alt="bubble7"/>
        </Bubble>
        <Main>
        I'm currently a Website Content Writer living in Vietnam. I love to travel and learn about new techs, so I studied: Japanese, English, and Programming.
<br /> <br/>
I'm interested in trying new things and building projects. Or at least somewhat contributing the developments of big projects, by using both my knowledges and experiences.
<br/> <br/>
I always give it my all, because I believe everything is Art when you put your soul in it. You can contact with me via social links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
        

        </Box>
        
        </ThemeProvider>
        
        
    )
}

export default AboutPage
