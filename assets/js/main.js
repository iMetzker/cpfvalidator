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
  
  if (cpf.value.length == 3 || cpf.value.length == 7) {
    cpf.value += "."
  } else if (cpf.value.length == 11) {
    cpf.value += "-"
  }
  
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