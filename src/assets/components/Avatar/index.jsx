import React from 'react';
import avatarImg from '../../img/avatar/avatar-defaulttest.png';

import { Box, AvatarContainer, Eyescontainer, Eyes, ResultCPF, IconResult, Title, Img } from './styles'

const Avatar = () => {
    return (
        <Box>
            <AvatarContainer>
                <Img src={avatarImg} alt="robô com duas antenas e dois olhos abrindo e fechando, todo preto." />
                <Eyescontainer className="eyes">
                    <Eyes/>
                    <Eyes />
                </ Eyescontainer>

                <ResultCPF className="false" id="result-cpf">
                    <IconResult className="icon-heart" />
                    <p></p>
                </ ResultCPF>
            </ AvatarContainer>
            <Title>CPF Validator</Title>
        </ Box>
    );
};

export default Avatar;