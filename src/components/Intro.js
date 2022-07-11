import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/me-avatar3.png'
import {DarkTheme} from '../components/Themes'
import { NavLink } from 'react-router-dom'
import MyCV from '../assets/resume/Nguyen-Vu-Ngoc-Minh.pdf'
import MyCVJP from '../assets/resume/Nguyen-Vu-Ngoc-Minh-JP.pdf'

const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:nth-child(3) {
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
}


`

const CV = styled.span`
z-index:1;
`
const Button1 = styled(NavLink)`
z-index:2;
color: ${props => props.theme.body};

&>*:nth-child(1) {
    margin: 0.2rem;
    padding: 0.5rem 0rem 0.5rem 0rem;
    text-align:center;
    position: relative;
    
    font-size: 60%;
    border: 1px solid ${props => props.theme.body};
    width: 11vw;
}

`

const Button2 = styled(NavLink)`
z-index:2;
color: ${props => props.theme.body};
&>*:nth-child(1) {
    margin: 0.2rem;
    padding: 0.5rem 0rem 0.5rem 0rem;
    text-align:center;
    position: relative;
    
    font-size: 60%;
    border: 1px solid ${props => props.theme.body};
    width: 11vw;
}

`



const Intro = (props) => {
    

    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Minh.</h3>
                    <motion.h6
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:0.4 }}>A Content Writer working at C-SpaceShip.<br/> Living in HCM City of Vietnam</motion.h6>
                    
                    <CV target="_blank" >
                        <Button1 target="_blank" to={MyCV} download>
                        <motion.h3
                        initial={{
                            opacity:0,
                        
                        transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            opacity: 1,
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: DarkTheme.text,
                            color:"#000000",
                        }}
                        whileTap={{scale: 0.9}}
                        >
                            Resume
                        </motion.h3>
                        </Button1>

                        <Button2 target="_blank" to={MyCVJP} download>
                        <motion.h3
                        initial={{
                            opacity:0,
                        
                        transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            opacity: 1,
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: DarkTheme.text,
                            color:"#000000",
                        }}
                        whileTap={{scale: 0.9}}
                        >
                            履歴書
                        </motion.h3>
                        </Button2>
                        

                        {/* <motion.h3
                        initial={{
                            opacity:0,
                        y:-200,
                        transition: { type:'spring', duration: 1.5}
                        }}
                        animate={{
                            opacity: 1,
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "#F86212",
                            color:"#000000",
                        }}
                        whileTap={{scale: 0.9}}
                        >
                            Resume 2
                        </motion.h3> */}
                    </CV>
                    {/* <Button>
                         
                    </Button> */}
                </Text>
                
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:1.5 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
