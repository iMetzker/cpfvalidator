import './assets/css/style.css';
import Avatar from './assets/components/Avatar';
import Title from './assets/components/Title';
import Switch from './assets/components/Switch';
import Input from './assets/components/Input';
import React, { useState } from 'react';
import InitialAvatar from './assets/img/avatar/avatar-.png';
import ValidAvatar from './assets/img/avatar/avatar-valid.png';
import FailAvatar from './assets/img/avatar/avatar-fail.png';

function App() {
 
  const [isLightMode, setIsLightMode] = useState(true);
  const [cpf, setCpf] = useState('');
  const [isValidCpf, setIsValidCpf] = useState(null); 

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  const handleCpfChange = (event) => {
    const inputValue = event.target.value.replace(/\D+/g, '');
    if (inputValue.length <= 11) {
      let formattedCpf = '';
      for (let i = 0; i < inputValue.length; i++) {
        if (i === 3 || i === 6) {
          formattedCpf += '.';
        } else if (i === 9) {
          formattedCpf += '-';
        }
        formattedCpf += inputValue[i];
      }
      setCpf(formattedCpf);
      event.target.value = formattedCpf;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanedCpf = cpf.replace(/\D+/g, '');
    if (cleanedCpf.length !== 11) {
      setIsValidCpf(false);
      return;
    }

    const isSequence = cleanedCpf[0].repeat(cleanedCpf.length) === cleanedCpf;
    if (isSequence) {
      setIsValidCpf(false);
      return;
    }

    const cpfNineNumber = cleanedCpf.slice(0, -2);
    const firstDigit = createDigit(cpfNineNumber);
    const secondDigit = createDigit(cpfNineNumber + firstDigit);

    const newCpf = cleanedCpf.slice(0, -2) + firstDigit + secondDigit;
    setIsValidCpf(newCpf === cleanedCpf);
  };

  const createDigit = (cpfPartial) => {
    const cpfArray = Array.from(cpfPartial);

    

    let regressiveCounter = cpfArray.length + 1;
    const totalPartial = cpfArray.reduce((ac, val) => {
      ac += regressiveCounter * Number(val);
      regressiveCounter--;
      return ac;
    }, 0);

    const digit = 11 - (totalPartial % 11);
    return digit > 9 ? '0' : String(digit);
  };

  return (
    <div className={`body ${isLightMode ? 'light' : ''}`}>
      <Avatar
      avatar={` ${isValidCpf !== null ? (isValidCpf ? 'false' : 'fail') : ''}`}
      src={
        isValidCpf !== null
        ? isValidCpf
        ? ValidAvatar
        : FailAvatar
        : InitialAvatar }
      alt={`
      robô ${
      isValidCpf !== null
      ? isValidCpf
      ? 'feliz com olhos curvados'
      : 'triste com olhos em xis'
      : 'inicial todo preto com duas antenas e dois olhos redondos'
      }
      `}
      result={`${isValidCpf !== null ? '' : 'false'}`}
      content={
      isValidCpf !== null
      ? isValidCpf
        ? 'Isso ai! Este CPF é válido!'
        : 'Oh não! Este CPF não é válido!'
      : ''
      }
      />
      <Title />
      <Switch id='switch' event={toggleMode}/>
      <Input submit={handleSubmit} change={handleCpfChange}/>
    </div>
  );
}

export default App;
