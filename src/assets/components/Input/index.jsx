import { ButtonInput, Form, Label, InputContainer } from './styles';
import '../../css/style.css';

const Input = ({submit, change}) => {
    
    return (
        <div className="interaction">
            <Form onSubmit={submit}>
                <Label htmlFor="cpf">Digite um CPF:</Label>
                <InputContainer
                type="text"
                id="cpf"
                name="cpf"
                maxLength="14"
                onChange={change}
                />
                <ButtonInput type="submit">Vamos ver</ButtonInput>
            </Form>
        </div>
    )
};

export default Input;