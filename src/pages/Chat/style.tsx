import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
background: rgba(0, 0, 0, 0.15); 
padding: 0.25rem; 
position: fixed; 
bottom: 0; 
left: 0; 
right: 0; 
display: flex; 
height: 3rem; 
box-sizing: border-box; 
backdrop-filter: blur(10px); 

    button{
        background: #333; 
        border: none; 
        padding: 0 1rem; 
        margin: 0.25rem; 
        border-radius: 3px; 
        outline: none; 
        color: #fff;
    }
`

const Input = styled.input`
border: none; 
padding: 0 1rem; 
flex-grow: 1; 
border-radius: 2rem; 
margin: 0.25rem;

    &:focus{
        outline: none;
    }
`

const Ul = styled.ul`
list-style-type: none; 
margin: 0; 
padding: 0;

    li{
        padding: 0.5rem 1rem;
    }
    li:nth-child(odd){
        background:#efefef; ;
    }
`

export { Section, Form, Input, Ul };
