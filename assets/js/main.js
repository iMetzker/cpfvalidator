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
        return Number(inputCpf.value.replace(/\D+/g, ""));
      },
    });
  }

  ValidateCPF.prototype.valida = function () {

    /* checking null sending or equal numbers */
    if (this.cpfClean === 0 || typeof this.cpfClean === 'undefined') return false;
    if (String(this.cpfClean).length !== 11) return false;
    return true;
  };

  ValidateCPF.prototype.createDigit = function () {
    
  }

  console.log(cpf.valida());
  console.log(typeof cpf.cpfClean);
  console.log(cpf.cpfClean);
  console.log(String(cpf.cpfClean).length);
}

input.addEventListener("submit", preventSubmit);
