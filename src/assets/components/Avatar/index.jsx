import { Box, AvatarContainer, Eyescontainer, Eyes, ResultCPF, IconResult, Img } from './styles'

const Avatar = ({avatar, src, alt, result, content}) => {

    return (
        <Box>
            <AvatarContainer className={avatar}>
                <Img src={src} alt={alt} />
                <Eyescontainer className="eyes">
                    <Eyes/>
                    <Eyes />
                </ Eyescontainer>
                <ResultCPF className={`${result}`} id="result-cpf">
                    <IconResult className="icon-heart" />
                    <p>
                        {content}
                    </p>
                </ ResultCPF>
            </ AvatarContainer>
        </ Box>
    );
};

export default Avatar;