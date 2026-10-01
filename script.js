
const WHATSAPP = "5950983835886"; 

const CATALOGOS = {
  flores: {
    titulo: "Catálogo de flores",
    sub: "Ramos y arreglos hechos al momento.",
    productos: [
      { nombre: "Ramo de Hello Kitty", precio: "$95.000", desc: "Ramo con tematica y 7 flores.", foto: "img/ramo1.jpeg" },
      { nombre: "Ramo verdoso", precio: "$110.000", desc: "Flores, mariposas y una corona.", foto: "img/ramo2.jpeg" },
      { nombre: "Ramo celestes", precio: "$92.000", desc: "Flores celestes y una mariposa.", foto: "img/ramo3.jpeg" },
      { nombre: "Ramo morado", precio: "$85.000", desc: "Flores moradas y una mariposa.", foto: "img/ramo4.jpeg" },
      { nombre: "Ramo amarillo", precio: "$84.000", desc: "7 flores amarillas y una mariposa.", foto: "img/ramo5.jpeg" },
      { nombre: "Ramo rosita", precio: "$90.000", desc: "Colores llamativos con una mariposa", foto: "img/ramo6.jpeg" },
      { nombre: "Ramo elegante", precio: "$87.000", desc: "7 flores rojas y una mariposa.", foto: "img/ramo7.jpeg" },
      { nombre: "Ramo azulado", precio: "$100.000", desc: "Flores, una mariposa y dedicatoria.", foto: "img/ramo8.jpeg" },
      { nombre: "Proximamente", precio: "$80.000", desc: "Sin descripcion." foto: "img/ramo9.jpeg" },
      { nombre: "Proximamente", precio: "$80.000", desc: "Sin descripcion." foto: "img/ramo10.jpeg" },
      { nombre: "Proximamente", precio: "$80.000", desc: "Sin descripcion." foto: "img/ramo11.jpeg" },
      { nombre: "Proximamente", precio: "$80.000", desc: "Sin descripcion." foto: "img/ramo12.jpeg" },
      { nombre: "Proximamente", precio: "$80.000", desc: "Sin descripcion." foto: "img/ramo14.jpeg" },
      { nombre: "Proximamente", precio: "$80.000", desc: "Sin descripcion." foto: "img/ramo15.jpeg" },
      { nombre: "Proximamente", precio: "$80.000", desc: "Sin descripcion." foto: "img/ramo16.jpeg" },
      { nombre: "Proximamente", precio: "$80.000", desc: "Sin descripcion." foto: "img/ramo17.jpeg" },
      { nombre: "Proximamente", precio: "$80.000", desc: "Sin descripcion." foto: "img/ramo18.jpeg" }
    ]
  },
  regalos: {
    titulo: "Regalos & detalles",
    sub: "Sorpresas para cualquier ocasión.",
    productos: [
      { nombre: "Casita de Snoopy", precio: "$225.000", desc: "Dedicatorias, cartas y dulces surtidos.", foto: "img/regalo1.jpeg" },
      { nombre: "Cofre de Clash Royale", precio: "$210.000", desc: "Dedicatoria, stickers y dulces.", foto: "img/regalo2.jpeg" },
      { nombre: "Cofre de Minecraft", precio: "$220.000", desc: "Peluche, dulces y una carta.", foto: "img/regalo3.jpeg" },
      { nombre: "Caja dulce de recuerdos", precio: "$180.000", desc: "Fotos, dedicatoria y dulces.", foto: "img/regalo4.jpeg" },
      { nombre: "Caja HotWheels", precio: "$160.000", desc: "Un carrito, 2 flores, dedicatoria y dulces.", foto: "img/regalo5.jpeg" },
      { nombre: "Caja de sneaks", precio: "$170.000", desc: "4 fotos y 6 dulces a eleccion.", foto: "img/regalo6.jpeg" },
      { nombre: "Caja de cumpleaños boy", precio: "$150.000", desc: "Fotos, dedicatoria y dulces.", foto: "img/regalo7.jpeg" },
      { nombre: "Caja de cumpleaños girl", precio: "$160.000", desc: "Fotos, dedicatoria y dulces.", foto: "img/regalo8.jpeg" }
    ]
  },
  postres: {
    titulo: "Postres",
    sub: "Hechos con ingredientes frescos cada día.",
    productos: [
      { nombre: "Torta tu hermana 1", precio: "$67.000", desc: "Che kaiguema", foto: "img/postre1.jpeg" },
      { nombre: "Torta tu hermana 2", precio: "$67.000", desc: "OHh Ferran OHh Ferran", foto: "img/postre2.jpeg" },
      { nombre: "Torta tu hermana 2", precio: "$67.000", desc: "Che kaiguema", foto: "img/postre3.jpeg" },
      { nombre: "Torta tu hermana 2", precio: "$67.000", desc: "Te amo Ale", foto: "img/postre4.jpeg" },
      { nombre: "Torta tu hermana 2", precio: "$67.000", desc: "Che kaiguema", foto: "img/postre5.jpeg" },
      { nombre: "Torta tu hermana 2", precio: "$67.000", desc: "Ganando bro", foto: "img/postre6.jpeg" },
      { nombre: "Torta tu hermana 2", precio: "$67.000", desc: "Che kaiguema", foto: "img/postre7.jpeg" },
      { nombre: "Torta tu hermana 2", precio: "$69.000", desc: "Mbappe x Pablito Pintos", foto: "img/postre8.jpeg" }
    ]
  }
};

const ICONO_FOTO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>';
const inicio = document.getElementById("inicio");
const catalogo = document.getElementById("catalogo");

document.getElementById("wa-home").href =
  "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Hola A&A Creaciones, quiero hacer un pedido");

function mostrarCatalogo(clave) {
  const c = CATALOGOS[clave];
  document.getElementById("cat-titulo").textContent = c.titulo;
  document.getElementById("cat-sub").textContent = c.sub;
  document.getElementById("productos").innerHTML = c.productos.map((p, i) => {
    const foto = p.foto || "img/" + clave + "-" + (i + 1) + ".jpg";
    const msg = encodeURIComponent("Hola, me interesa: " + p.nombre + " (" + p.precio + ")");
    return '<article class="prod">' +
      '<div class="foto">' + ICONO_FOTO + '<img src="' + foto + '" alt="' + p.nombre + '" loading="lazy" onerror="this.remove()"></div>' +
      '<div class="info"><h3>' + p.nombre + '</h3><p>' + p.desc + '</p><span class="precio">' + p.precio + '</span>' +
      '<a class="pedir" href="https://wa.me/' + WHATSAPP + '?text=' + msg + '" target="_blank" rel="noopener">Pedir</a></div></article>';
  }).join("");
}

function ir(clave) {
  const hay = !!clave && Object.prototype.hasOwnProperty.call(CATALOGOS, clave);
  if (hay) mostrarCatalogo(clave);
  inicio.hidden = hay;
  catalogo.hidden = !hay;
  window.scrollTo(0, 0);
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    ir(a.getAttribute("href").slice(1));
  });
});
ir("");
