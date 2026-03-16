document.addEventListener("DOMContentLoaded", () => {
  const imagenes = [
    {
      img: "/Imagenes/K1nG_at_the_FNCS_2025_Global_Championship.jpg",
      titulo: "Jugadores Profesionales",
      desc: "Todo sobre los ultimos tops y rendimiento de tus jugadores Profesionales favoritos",
    },
    {
      img: "/Imagenes/cooper.jpg",
      titulo: "Jugadores Profesionales",
      desc: "Todo sobre los ultimos tops y rendimiento de tus jugadores Profesionales favoritos",
    },
    {
      img: "/Imagenes/fncs2025.jpg",
      titulo: "Todo sobre torneos oficiales",
      desc: "Informacion sobre fechas, clasificaciones y finales de los torneos mas emocionantes",
    },
    {
      img: "/Imagenes/fncs2024.jpg",
      titulo: "Todo sobre torneos oficiales",
      desc: "Informacion sobre fechas, clasificaciones y finales de los torneos mas emocionantes",
    },
    {
      img: "/Imagenes/actualizaciones1.jpg",
      titulo: "Actualizaciones y novedades",
      desc: "Informaremos sobre posibles y nuevas actualizaciones o eventos del juego",
    },
    {
      img: "/Imagenes/actualizaciones2.jpg",
      titulo: "Actualizaciones y novedades",
      desc: "Informaremos sobre posibles y nuevas actualizaciones o eventos del juego",
    },
  ];

  if (imagenes.length === 0) return;

  const elementos = {
    img: document.getElementById("img-carrusel"),
    titulo: document.getElementById("titulo-carrusel"),
    desc: document.getElementById("desc-carrusel"),
    btnSig: document.querySelector(".btn-carrusel sig"),
    btnAnt: document.querySelector(".btn-carrusel ant"),
  };

  for (let key in elementos) {
    if (!elementos[key]) {
      console.error(`Falta el elemento: ${key}`);
      return;
    }
  }

  let indice = 0;

  function actualizarCarrusel() {
    const actual = imagenes[indice];
    elementos.img.src = actual.img;
    elementos.img.alt = actual.titulo;
    elementos.titulo.textContent = actual.titulo;
    elementos.desc.textContent = actual.desc;
  }

  function imgSig() {
    indice = (indice + 1) % imagenes.length;
    actualizarCarrusel();
  }

  function imgAnt() {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    actualizarCarrusel();
  }

  elementos.btnSig.addEventListener("click", imgSig);
  elementos.btnAnt.addEventListener("click", imgAnt);
  actualizarCarrusel();
});
