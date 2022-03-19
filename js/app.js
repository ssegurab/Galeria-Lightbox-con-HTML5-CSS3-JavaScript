"use strict";

/* 
    // Cuando hacemos CLICK en .a
        // .lightbox ADD CLASS 'activo'
        // .img ATTR "SRC"
        // .grande COLOCAR el SRC de .img

    // Cuando hacemos CLICK en .cerrar
        // .lightbox REMOVE CLASS 'activo'

*/

const enlaces = document.querySelectorAll(".ul .a");
const lightbox = document.querySelector(".lightbox");
const grande = document.querySelector('.grande');
const cerrar = document.querySelector('.cerrar');

enlaces.forEach((cadaEnlace, i) => {
    enlaces[i].addEventListener("click", (e) => {
        e.preventDefault(); // con esto prevenimos/evitamos el evento del ratón por defecto. Así al hacer click no hará nada.
        let rutaImg = cadaEnlace.querySelector(".img").src;
        console.log(rutaImg);

        lightbox.classList.add('activo')
        grande.setAttribute('src', rutaImg)
    });
});

cerrar.addEventListener('click', () => {
    lightbox.classList.remove('activo')
    /* grande.setAttribute('src', '') */
});