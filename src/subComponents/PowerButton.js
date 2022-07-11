// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes }  from 'styled-components'
import { YinYang } from '../components/AllSvgs'
import { DarkTheme } from '../components/Themes'

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`
// background-color: #FCF6F4;
const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);



background-color: ${props => props.color === 'dark' ? DarkTheme.body : DarkTheme.text};;
padding: 0.1rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.1rem;
height: 2.1rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: rgba(245,255,12,0.4);
    box-shadow: 0 0 8px 6px rgba(0,12,155,0.2);
}

&>*:first-child{
    animation: ${rotate} infinite 1.5s linear;
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = (props) => {
    return (
        <Power color={props.theme}>
        <NavLink to="/">
        <YinYang width={40} height={40} fill='currentColor' />
        </NavLink>
        </Power>
    )
}

export default PowerButton
