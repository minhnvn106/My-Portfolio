import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`
const Text = styled.span`
padding: 8vh;
font-size: 0.8rem;
font-family: 'Ariel'

`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          Minh
          <Text color={props.theme}>Click</Text>
        </Logo>
        
    )
}

export default LogoComponent
