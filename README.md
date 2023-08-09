<table align="left">
    <tr>
        <td>
            <b>
              <a href="README.md"> 🇧🇷 Português </a>
            </b>
        </td>
        <td>
            <a href="readme-us.md"> 🇺🇸 English </a>
        </td>
    </tr>

</table>


<p align="right">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">Licença</a>
</p>

<br> <br>

# Validador de CPF 
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

<br>

## 🚀 Projeto

O projeto consiste na criação de uma página web interativa com o usuário para validação de CPF.

<br>
A lógica para a conta de validação de CPF utilizada no projeto foi com base em que um número de CPF é composto por 11 dígitos, os 9 primeiros são os números base, e os 2 últimos são os chamados dígitos verificadores, que são utilizados para validar se os 9 números base estão corretos.

- A primeira validação feita foi  multiplicar cada número base em separado, começando com 10 e terminando com 2 e reservando a soma do total de cada multiplicação em um acumulador; 

- Depois, reservado o resto da divisão do resultado dessa soma por 11;

- Se o resto da divisão for maior do que 9, o primeiro dígito será 0, se não for, o dígito será o próprio resto da divisão.

- O segundo dígito a ser validado será a diferença entre o número 11 e o primeiro dígito;

- Por fim é feito uma validação entre o número final com os últimos dígitos e o número digitado e é impresso em tela um retorno para o usuário;

- O projeto conta com a as versões de light e dark mode.

⚙ Aprendizados que pude colocar em prática:

- HTML semântico e CSS;
- Javascript;

<br>

## 🛸 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript
- Git

## 💻 Layout

<img src="./src/assets/img/preview/preview-validator.png" alt="preview do projeto">

<br>

<p align="center">
  <a href="/LICENSE">
    <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
  </a>
</p>
