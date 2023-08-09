import styled, 
{ keyframes } from 'styled-components';

export const SwitchContainer = styled.div`

cursor: pointer;
position: relative;
width: 64px;

margin: 20px auto;

`

const fadeBack = keyframes`

    from {
        left: 50%;
    }
    to {
        left: 0;
    }


`

export const Button = styled.button`

cursor: pointer;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;

    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    animation: ${fadeBack} .4s;

`

export const BoxButton = styled.span`

display: block;
border-radius: 9999px;
width: 64px;
height: 24px;

backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);

`