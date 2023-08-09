import styled,
{ keyframes } from 'styled-components';

export const Box = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

export const AvatarContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
position: relative;

width: 200px;
height: 200px;
border-radius: 50%;
background-color: #ffffff;

`

export const Eyescontainer = styled.div`

position: absolute;
top: 105px;

display: flex;
gap: 22px;

`
const blinkAnimation = keyframes`

    0%, 100% {
        transform: scaleY(0.1);
      }

      50%, 90% {
        transform: scaleY(1);
      }

      55%, 85% {
        transform: scaleY(1);
      }

      100% {
        transform: scaleY(0.1);
      }

`

export const Eyes = styled.span`

width: 15px;
height: 15px;
border-radius: 50%;
background-color: #000000;

animation: ${blinkAnimation} 2s infinite;

`

export const ResultCPF = styled.div`

position: absolute;
top: -30px;
left: 170px;
width: 130px;

padding: 10px 20px;
border-radius: 30px 10px;
background-color: #242423;

font-size: 20px;
font-weight: 400;
color: #ffffff;

`

export const IconResult = styled.div`

no-repeat center;
height: 32px;
width: 32px;

border-radius: 50%;
position: absolute;
top: -5px;
right: -13px;

`

export const Title = styled.h1`

padding-top: 20px;
text-transform: uppercase;

font-size: 35px;

`