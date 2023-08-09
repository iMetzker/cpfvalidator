/* title */
const textTitle = document.querySelector("h1");

function textWriter(el) {
  const textArray = el.innerHTML.split("");
  el.innerHTML = "";

  textArray.forEach((letra, i) => {
    setTimeout(() => {
      el.innerHTML += letra;
    }, 90 * i);
  });
}

textWriter(textTitle);

/* mode preview */
const html = document.documentElement;
const btnMode = document.querySelector("#switch");

function toggleMode() {
  html.classList.toggle("light");
}

btnMode.addEventListener("click", () => {
  toggleMode();
});

/* input cpf typed */
let cpfTyped = document.querySelector("#cpf");

cpfTyped.addEventListener("keyup", () => {
  if (cpfTyped.value.length == 3 || cpfTyped.value.length == 7) {
    cpfTyped.value += ".";
  } else if (cpfTyped.value.length == 11) {
    cpfTyped.value += "-";
  }
});

/* validation */
const input = document.querySelector(".interaction");

function preventSubmit(event) {
  event.preventDefault();

  let inputCpf = event.target.querySelector("#cpf");

  const cpf = new ValidateCPF(inputCpf);

  function ValidateCPF() {
    Object.defineProperty(this, "cpfClean", {
      enumerable: true,
      get: function () {
        return inputCpf.value.replace(/\D+/g, "");
      },
    });
  }

  ValidateCPF.prototype.valida = function () {

    /* checking null sending or equal numbers */
    if (this.cpfClean === 0 || typeof this.cpfClean === 'undefined') return false;
    if (this.cpfClean.length !== 11) return false;
    if (this.isSequence()) return false;
    
    /* account */
    const cpfPartialDigit = this.cpfClean.slice(0, -2);
    const firstDigit = this.createDigit(cpfPartialDigit);
    const secondDigit = this.createDigit(cpfPartialDigit + firstDigit);
    
    const newCpf = cpfPartialDigit + firstDigit + secondDigit;
    return newCpf === this.cpfClean;
  };

  ValidateCPF.prototype.createDigit = function (cpfPartial) {
    const cpfArray = Array.from(cpfPartial);
    
    let regressiveCounter = cpfArray.length + 1;
    const totalPartial = cpfArray.reduce((ac, val) => {
      ac += (regressiveCounter * Number(val));
      regressiveCounter --;
      return ac;
    }, 0);
    
    const digit = 11 - (totalPartial % 11);
    return digit > 9 ? '0' : String(digit);
  };

  /* checking if the cpf is a sequence */
  ValidateCPF.prototype.isSequence = function () {
    const sequence = this.cpfClean[0].repeat(this.cpfClean.length);
    return sequence === this.cpfClean;
  }

  /* result */
  const img = document.querySelector('.avatar img');
  const boxResult = document.querySelector('#result-cpf');
  const p = document.querySelector('#result-cpf p');
  const avatar = document.querySelector('.avatar');

  if (cpf.valida()) {
    avatar.classList.add('false');
    avatar.classList.remove('fail');
    boxResult.classList.remove('false');
    img.setAttribute('src', './assets/img/avatar/avatar-valid.png');
    img.setAttribute('alt', 'robô feliz com olhos fechados.');
    p.innerHTML = `Isso ai! Este CPF é válido!`;
    textWriter(p);
  } else {
    avatar.classList.add('fail');
    avatar.classList.add('false');
    boxResult.classList.remove('false');
    img.setAttribute('src', './assets/img/avatar/avatar-fail.png');
    img.setAttribute('alt', 'robô triste com olhos em formato de xis.');
    p.innerHTML = `Oh não! Este CPF não é válido!`;
    textWriter(p);
  }
}

input.addEventListener("submit", preventSubmit);
