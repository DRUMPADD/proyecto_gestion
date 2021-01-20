const buscar = document.querySelector('#search');
const boton = document.querySelector('#btnSearch');
const temas = document.getElementsByClassName('temas');
const info_temas = document.getElementsByClassName('info_temas');
const resultado = document.querySelector('#resultado');

// let productos = [
//     {nombre: 'Jugo', valor: 23},
//     {nombre: 'Pelota', valor: 15},
//     {nombre: 'Carrito', valor: 54},
//     {nombre: 'Sopa', valor: 5}
// ]
let aparecer = false;

for(let x = 0; x < temas.length; x++) {
    temas[x].addEventListener('click', () => {
        if(aparecer == false) {
            info_temas[x].style.display = 'block';
            aparecer = true;
        }else {
            aparecer = false;
            info_temas[x].style.display = 'none';
        }
    });
}

// filtrar();