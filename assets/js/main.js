/* title */
const textTitle = document.querySelector('h1');

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
const btnMode = document.querySelector('#switch');

function toggleMode() {
    html.classList.toggle('light');
}

btnMode.addEventListener("click", () => {
    toggleMode();
})

/* input cpf */
let cpf = document.querySelector("#cpf");

cpf.addEventListener("keyup", () => {
  let value = cpf.value.replace(/[^0-9]/g, "").replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4");
  
  cpf.value = value;
});

/* validation */
const cpfTest = '131.776.926-01'

let cpfClean = cpfTest.replace(/\D+/g, '');
cpfArray = Array.from(cpfClean);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfClena', {
      enumerable: true,
      get: function() {
        return cpfEnviado.replace(/\D+/g, '');
      }
    });
  }
  
  ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
  
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
  
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  };