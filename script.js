
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
      { nombre: "Ramo azulado", precio: "$100.000", desc: "Flores, una mariposa y dedicatoria.", foto: "img/ramo8.jpeg" }
    ]
  },
  regalos: {
    titulo: "Regalos & detalles",
    sub: "Sorpresas para cualquier ocasión.",
    productos: [
      { nombre: "Caja sorpresa", precio: "$480.000", desc: "Chocolates, tarjeta y detalle especial.", foto: "img/regalo1.png" },
      { nombre: "Peluche con globo", precio: "$350.000", desc: "Osito suave con globo metálico.", foto: "img/regalo2.png" },
      { nombre: "Desayuno sorpresa", precio: "$520.000", desc: "Fruta, pan, jugo y mensaje personalizado.", foto: "img/regalo3.png" },
      { nombre: "Vela aromática", precio: "$180.000", desc: "Vela artesanal de vainilla y lavanda.", foto: "img/regalo4.png" },
      { nombre: "Taza personalizada", precio: "$150.000", desc: "Con nombre o frase a tu elección.", foto: "img/regalo5.png" },
      { nombre: "Caja de chocolates", precio: "$260.000", desc: "Surtido de 16 chocolates finos.", foto: "img/regalo6.png" },
      { nombre: "Globo burbuja", precio: "$390.000", desc: "Globo transparente con mensaje y confeti.", foto: "img/regalo7.png" },
      { nombre: "Set de spa", precio: "$430.000", desc: "Sales, jabón y crema en caja de regalo.", foto: "img/regalo8.png" }
    ]
  },
  postres: {
    titulo: "Postres",
    sub: "Hechos con ingredientes frescos cada día.",
    productos: [
      { nombre: "Pastel de chocolate", precio: "$520.000", desc: "Mediano, 10 porciones, con ganache.", foto: "img/postre1.png" },
      { nombre: "Cheesecake de frutos rojos", precio: "$450.000", desc: "Cremoso, con salsa de fresa y zarzamora.", foto: "img/postre2.png" },
      { nombre: "Cupcakes (6 pzas)", precio: "$210.000", desc: "Sabores surtidos con betún decorado.", foto: "img/postre3.png" },
      { nombre: "Galletas decoradas", precio: "$180.000", desc: "6 piezas con diseños para tu evento.", foto: "img/postre4.png" },
      { nombre: "Brownies (9 pzas)", precio: "$230.000", desc: "Húmedos, con nuez y chocolate.", foto: "img/postre5.png" },
      { nombre: "Pastel tres leches", precio: "$480.000", desc: "Suave y ligero, con crema batida.", foto: "img/postre6.png" },
      { nombre: "Fresas con chocolate", precio: "$260.000", desc: "12 fresas bañadas en chocolate.", foto: "img/postre7.png" },
      { nombre: "Pay de limón", precio: "$320.000", desc: "Con base de galleta y merengue.", foto: "img/postre8.png" }
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
