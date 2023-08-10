import React from 'react';
import {SwitchContainer, Button, BoxButton } from './style';

const Switch = ({id, event}) => {

    return (
        <SwitchContainer id={id} onClick={event} >
            <Button />
            <BoxButton />
        </SwitchContainer>
    );
};

export default Switch;