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
const input = document.querySelector('.interaction');

function preventSubmit (event) {
  event.preventDefault();

  const inputCpf = event.target.querySelector('#cpf');

  let cpfClean = inputCpf.value.replace(/\D+/g, '');

  console.log('CPF digitado:', cpfClean);
 
}


input.addEventListener("submit", preventSubmit);







