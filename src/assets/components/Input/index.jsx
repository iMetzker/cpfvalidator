import { ButtonInput, Form, Label, InputContainer } from './styles';
import '../../css/style.css'

const Input = () => {
    return (
        <div className="interaction">
            <Form action="" method="get">
                <Label htmlFor="cpf">Digite um CPF:</Label>
                <InputContainer type="text" id="cpf" name="cpf" maxLength="14" />
                <ButtonInput>Vamos ver</ButtonInput>
            </Form>
        </div>
    )
};

export default Input;