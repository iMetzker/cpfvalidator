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
const cpf = document.querySelector("#cpf");

cpf.addEventListener("keyup", () => {
  let value = cpf.value.replace(/[^0-9]/g, "").replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4");
  
  cpf.value = value;
});

