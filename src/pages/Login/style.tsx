import styled from "styled-components";
import img from "/bg.webp"

const Background = styled.section`
background-image: url(${img});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 100vh;
`

const Col = styled.div`
max-width: 350px;
background-color: #00000073;
border-radius: 10px;
box-shadow: 2px 4px 8px black;
`

const Input = styled.input`
background: none;
border: none;
border-bottom: 1px #b3b3b3 solid;
color: #b3b3b3;
outline: none;


    &::placeholder{
        color: #b3b3b3;
        font-size: .9rem;
    }

`

const Button = styled.button`
    border-radius: 5px;
    border: none;

`

const SmButtons = styled.button`
background: none;
color: ${props => props.color};
border: none;
margin: 5px;
font-size: 12px;
font-weight: bold;
`


export { Col, Background, Input, Button, SmButtons };