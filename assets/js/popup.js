let primerServicio = document.getElementById('servicio1');
let overlayPrimerServicio = document.getElementById('ov-servicio1');
let segundoServicio = document.getElementById('servicio2');
let overlaySegundoServicio = document.getElementById('ov-servicio2');
let tercerServicio = document.getElementById('servicio3');
let overlayTercerServicio = document.getElementById('ov-servicio3');
let cuartoServicio = document.getElementById('servicio4');
let overlayCuartoServicio = document.getElementById('ov-servicio4');
let quintoServicio = document.getElementById('servicio5');
let overlayQuintoServicio = document.getElementById('ov-servicio5');
let sextoServicio = document.getElementById('servicio6');
let overlaySextoServicio = document.getElementById('ov-servicio6');
let septimoServicio = document.getElementById('servicio7');
let overlaySeptimoServicio = document.getElementById('ov-servicio7');
let octavoServicio = document.getElementById('servicio8');
let overlayOctavoServicio = document.getElementById('ov-servicio8');
let novenoServicio = document.getElementById('servicio9');
let overlayNovenoServicio = document.getElementById('ov-servicio9');
let decimoServicio = document.getElementById('servicio10');
let overlayDecimoServicio = document.getElementById('ov-servicio10');
let onceServicio = document.getElementById('servicio11');
let overlayOnceServicio = document.getElementById('ov-servicio11');

primerServicio.addEventListener('click', activePrimerServicio)
overlayPrimerServicio.firstElementChild.firstElementChild.addEventListener('click', closePrimerServicio)
segundoServicio.addEventListener('click', activeSegundoServicio)
overlaySegundoServicio.firstElementChild.firstElementChild.addEventListener('click', closeSegundoServicio)
tercerServicio.addEventListener('click', activeTercerServicio)
overlayTercerServicio.firstElementChild.firstElementChild.addEventListener('click', closeTercerServicio)
cuartoServicio.addEventListener('click', activeCuartoServicio)
overlayCuartoServicio.firstElementChild.firstElementChild.addEventListener('click', closeCuartoServicio)
quintoServicio.addEventListener('click', activeQuintoServicio)
overlayQuintoServicio.firstElementChild.firstElementChild.addEventListener('click', closeQuintoServicio)
sextoServicio.addEventListener('click', activeSextoServicio)
overlaySextoServicio.firstElementChild.firstElementChild.addEventListener('click', closeSextoServicio)
septimoServicio.addEventListener('click', activeSeptimoServicio)
overlaySeptimoServicio.firstElementChild.firstElementChild.addEventListener('click', closeSeptimoServicio)
octavoServicio.addEventListener('click', activeOctavoServicio)
overlayOctavoServicio.firstElementChild.firstElementChild.addEventListener('click', closeOctavoServicio)
novenoServicio.addEventListener('click', activeNovenoServicio)
overlayNovenoServicio.firstElementChild.firstElementChild.addEventListener('click', closeNovenoServicio)
decimoServicio.addEventListener('click', activeDecimoServicio)
overlayDecimoServicio.firstElementChild.firstElementChild.addEventListener('click', closeDecimoServicio)
onceServicio.addEventListener('click', activeOnceServicio)
overlayOnceServicio.firstElementChild.firstElementChild.addEventListener('click', closeOnceServicio)

function activePrimerServicio(){
    overlayPrimerServicio.classList.add('active');
    overlayPrimerServicio.firstElementChild.classList.add('active')
}
function closePrimerServicio(){
    overlayPrimerServicio.classList.remove('active');
    overlayPrimerServicio.firstElementChild.classList.remove('active')
}
function activeSegundoServicio(){
    overlaySegundoServicio.classList.add('active');
    overlaySegundoServicio.firstElementChild.classList.add('active')
}
function closeSegundoServicio(){
    overlaySegundoServicio.classList.remove('active');
    overlaySegundoServicio.firstElementChild.classList.remove('active')
}
function activeTercerServicio(){
    overlayTercerServicio.classList.add('active');
    overlayTercerServicio.firstElementChild.classList.add('active')
}
function closeTercerServicio(){
    overlayTercerServicio.classList.remove('active');
    overlayTercerServicio.firstElementChild.classList.remove('active')
}
function activeCuartoServicio(){
    overlayCuartoServicio.classList.add('active');
    overlayCuartoServicio.firstElementChild.classList.add('active')
}
function closeCuartoServicio(){
    overlayCuartoServicio.classList.remove('active');
    overlayCuartoServicio.firstElementChild.classList.remove('active')
}
function activeQuintoServicio(){
    overlayQuintoServicio.classList.add('active');
    overlayQuintoServicio.firstElementChild.classList.add('active')
}
function closeQuintoServicio(){
    overlayQuintoServicio.classList.remove('active');
    overlayQuintoServicio.firstElementChild.classList.remove('active')
}
function activeSextoServicio(){
    overlaySextoServicio.classList.add('active');
    overlaySextoServicio.firstElementChild.classList.add('active')
}
function closeSextoServicio(){
    overlaySextoServicio.classList.remove('active');
    overlaySextoServicio.firstElementChild.classList.remove('active')
}
function activeSeptimoServicio(){
    overlaySeptimoServicio.classList.add('active');
    overlaySeptimoServicio.firstElementChild.classList.add('active')
}
function closeSeptimoServicio(){
    overlaySeptimoServicio.classList.remove('active');
    overlaySeptimoServicio.firstElementChild.classList.remove('active')
}
function activeOctavoServicio(){
    overlayOctavoServicio.classList.add('active');
    overlayOctavoServicio.firstElementChild.classList.add('active')
}
function closeOctavoServicio(){
    overlayOctavoServicio.classList.remove('active');
    overlayOctavoServicio.firstElementChild.classList.remove('active')
}
function activeNovenoServicio(){
    overlayNovenoServicio.classList.add('active');
    overlayNovenoServicio.firstElementChild.classList.add('active')
}
function closeNovenoServicio(){
    overlayNovenoServicio.classList.remove('active');
    overlayNovenoServicio.firstElementChild.classList.remove('active')
}
function activeDecimoServicio(){
    overlayDecimoServicio.classList.add('active');
    overlayDecimoServicio.firstElementChild.classList.add('active')
}
function closeDecimoServicio(){
    overlayDecimoServicio.classList.remove('active');
    overlayDecimoServicio.firstElementChild.classList.remove('active')
}
function activeOnceServicio(){
    overlayOnceServicio.classList.add('active');
    overlayOnceServicio.firstElementChild.classList.add('active')
}
function closeOnceServicio(){
    overlayOnceServicio.classList.remove('active');
    overlayOnceServicio.firstElementChild.classList.remove('active')
}