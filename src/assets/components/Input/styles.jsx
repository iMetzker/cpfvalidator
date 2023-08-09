import styled, { keyframes } from 'styled-components';

const BlinkText = keyframes`

0% {
    font-weight: 400;
}
100% {
    font-weight: 600;
}

`

export const ButtonInput = styled.button`

cursor: pointer;
    border: none;
    border-radius: 10px;

    padding: 15px 20px;
    color: var(--text-color);
    font-size: 25px;
    font-weight: 400;
    font-family: 'Handjet', cursive;

    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    animation: ${BlinkText} 1s infinite;

    &:hover {
    animation: none;
    font-weight: 600;
    }
`

export const Form = styled.form`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

gap: 10px;
padding-bottom: 20px;

`

export const Label = styled.label`

font-size: 25px;
font-weight: 400;

`

export const InputContainer = styled.input`

text-align: center;
border: none;
outline: none;
border-radius: 6px;

padding: 15px 20px;
font-family: 'Handjet', cursive;
font-size: 25px;
width: 100%;

backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);

&:focus {
    box-shadow: 2px 2px 10px 1px #ffffff;
}

`