//Carrusel

const imagenes = [{
    img:'../Imagenes/K1nG_at_the_FNCS_2025_Global_Championship.jpg',
    titulo:"Jugadores Profesionales",
    desc: "Todo sobre los ultimos tops y rendimiento de tus jugadores Profesionales favoritos"},
    {img: '../Imagenes/cooper.jpg',
        titulo:"Jugadores Profesionales",
    desc: "Todo sobre los ultimos tops y rendimiento de tus jugadores Profesionales favoritos"},
    {img: '../Imagenes/fncs2025.jpg',
        titulo: "Todo sobre torneos oficiales",
        desc: "Informacion sobre fechas, clasificaciones y finales de los torneos mas emocionantes"
    },
    {img: '../Imagenes/fncs2024.jpg',
        titulo: "Todo sobre torneos oficiales",
        desc: "Informacion sobre fechas, clasificaciones y finales de los torneos mas emocionantes"
    },
    {img: '../Imagenes/actualizaciones1.jpg',
        titulo: "Actualizaciones y novedades",
        desc: "Informaremos sobre posibles y nuevas actualizaciones o eventos del juego"
    },
    {img: '../Imagenes/actualizaciones2.jpg',
        titulo: "Actualizaciones y novedades",
        desc: "Informaremos sobre posibles y nuevas actualizaciones o eventos del juego"
    }]

let indice = 0

function actualizar() {
    document.getElementById("img-carrusel").src = imagenes[indice].img;
    document.getElementById("titulo-carrusel").textContent = imagenes[indice].titulo;
    document.getElementById("desc-carrusel").textContent = imagenes[indice].desc;

}

function imgSig(){
    indice = (indice + 1) % imagenes.length;
    actualizar(); 
}

function imgAnt(){
     if (indice === 0) {
        indice = imagenes.length - 1;
    } else {
        indice--;
    }
    actualizar();
}
   
actualizar();

let texto = document.getElementById("textocarrusel")

