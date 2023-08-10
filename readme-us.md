<table align="left">
    <tr>
        <td>
            <a href="README.md"> 🇧🇷 Português </a>
        </td>
        <td>
            <b>
                <a href="readme-us.md"> 🇺🇸 English </a>
            </b>
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

# CPF validator
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript&logoColor=white)
![](https://img.shields.io/badge/reactJS-20b2aa?style=for-the-badge&logo=react&logoColor=white)
 ![](https://img.shields.io/badge/styled_components-fe4164?style=for-the-badge&logo=styled-components&logoColor=white)
![](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)


<br>

## 🚀 Project

The project consists of creating a user-interactive web page for CPF validation.

<br>

The logic for the CPF validation account used in the project was based on the fact that a CPF number consists of 11 digits, the first 9 are the base numbers, and the last 2 are the so-called check digits, which are used to validate if the base 9 numbers are correct.

- The first validation performed was to multiply each base number separately, starting with 10 and ending with 2 and reserving the sum of the total of each multiplication in an accumulator;

- Afterwards, reserved the rest of the division of the result of that sum by 11;

- If the remainder of the division is greater than 9, the first digit will be 0, if not, the digit will be the remainder of the division.

- The second digit to be validated will be the difference between number 11 and the first digit;

- Finally, a validation is performed between the final number with the last digits and the typed number and a return to the user is printed on the screen;

- The project has both light and dark mode versions.

<br>

## 🛸 Technologies

This project was developed with the following technologies:

- HTML e CSS;
- JavaScript;
- React;
- Styled Components;
- Git.
 
## 💻 Layout

<img src="./src/assets/img/preview/preview-validator.png" alt="preview project">

<br>

<p align="center">
  <a href="/LICENSE">
    <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
  </a>
</p>

