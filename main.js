// !Variables

const btnCierra = document.querySelector('#btn__close');
const btnAdelanta = document.querySelector('#btn__next');
const btnRetrocede = document.querySelector('#btn__previous');
const imagenes = document.querySelectorAll('#gallery__container img');
const lightbox = document.querySelector('#container');
const imagenActiva = document.querySelector('#img__active');
const textoActiva = document.querySelector('#gallery__title');
let indiceImagen = 0;


// !Abre el Lightbox

const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = 'flex';
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});


// !Cierra el Lightbox 

btnCierra.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


// !Adelanta la imagen

const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);


// !Retrocede la Imagen
const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocederImagen);