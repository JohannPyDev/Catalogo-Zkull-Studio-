const NUMERO_WHATSAPP = "573239757710"; 
const COSTO_ENVIO_NACIONAL = 15000;

const productos = [
  {
    id: 1,
    nombre: "Buzo BOSS",
    precio: 140000,
    oferta: true,
    imagenes: ["boss.jpeg"],
    tallas: [
      { nombre: "S", disponible: false },
      { nombre: "M", disponible: true },
      { nombre: "L", disponible: true },
      { nombre: "XL", disponible: false }
    ],
    detalles: [
      { titulo: "CONSTRUCCIÓN PREMIUM", desc: "Acabados pensados para durar." },
      { titulo: "100% ALGODÓN PREMIUM", desc: "Suave · pesado · estructurado" },
      { titulo: "FIT", desc: "Silueta oversize cuidadosamente equilibrada." }
    ]
  },
  {
    id: 2,
    nombre: "Buzo ESSENTIALS",
    precio: 150000,
    precioAnterior: null,
    oferta: false,
    imagenes: ["essentials og.jpeg", "essentials.jpeg"],
    tallas: [
      { nombre: "S", disponible: false },
      { nombre: "M", disponible: true },
      { nombre: "L", disponible: true },
      { nombre: "XL", disponible: true }
    ],
    detalles: [
      { titulo: "CONSTRUCCIÓN PREMIUM", desc: "Acabados pensados para durar." },
      { titulo: "100% ALGODÓN PREMIUM", desc: "Suave · pesado · estructurado" },
      { titulo: "FIT", desc: "Silueta oversize cuidadosamente equilibrada." }
    ]
  },
  {
    id: 3,
    nombre: "Chaqueta Hellstar",
    precio: 190000,
    precioAnterior: 220000,
    oferta: false,
    imagenes: ["hellstar 1.jpeg", "hellstar 2.jpeg", "hellstar 3.jpeg"],
    tallas: [
      { nombre: "S", disponible: true },
      { nombre: "M", disponible: true },
      { nombre: "L", disponible: true },
      { nombre: "XL", disponible: false }
    ],
    detalles: [
      { titulo: "CONSTRUCCIÓN PREMIUM", desc: "Acabados pensados para durar." },
      { titulo: "100% ALGODÓN PREMIUM", desc: "Suave · pesado · estructurado" },
      { titulo: "FIT", desc: "Silueta oversize cuidadosamente equilibrada." }
    ]
  },
  {
    id: 4,
    nombre: "Buzo Hugo",
    precio: 160000,
    precioAnterior: null,
    oferta: true,
    imagenes: ["hugo red.jpeg", "hugo 2.jpeg"],
    tallas: [
      { nombre: "S", disponible: true },
      { nombre: "M", disponible: true },
      { nombre: "L", disponible: false },
      { nombre: "XL", disponible: false }
    ],
    detalles: [
      { titulo: "CONSTRUCCIÓN PREMIUM", desc: "Acabados pensados para durar." },
      { titulo: "100% ALGODÓN PREMIUM", desc: "Suave · pesado · estructurado" },
      { titulo: "FIT", desc: "Silueta oversize cuidadosamente equilibrada." }
    ]
  },
  {
    id: 5,
    nombre: "Chaqueta New Balance Rompevientos",
    precio: 150000,
    precioAnterior: null,
    oferta: false,
    imagenes: ["new balance beige.jpeg", "new balance n.jpeg"],
    tallas: [
      { nombre: "S", disponible: true },
      { nombre: "M", disponible: true },
      { nombre: "L", disponible: true },
      { nombre: "XL", disponible: true }
    ],
    detalles: [
      { titulo: "CONSTRUCCIÓN PREMIUM", desc: "Acabados pensados para durar." },
      { titulo: "100% ALGODÓN PREMIUM", desc: "Suave · pesado · estructurado" },
      { titulo: "FIT", desc: "Silueta oversize cuidadosamente equilibrada." }
    ]
  },
  {
    id: 6,
    nombre: "Buzo Nike x Billie Eilish",
    precio: 170000,
    precioAnterior: null,
    oferta: false,
    imagenes: ["nike bi 1.jpeg", "nike bi 2.jpeg"],
    tallas: [
      { nombre: "S", disponible: false },
      { nombre: "M", disponible: false },
      { nombre: "L", disponible: false },
      { nombre: "XL", disponible: false }
    ],
    detalles: [
      { titulo: "CONSTRUCCIÓN PREMIUM", desc: "Acabados pensados para durar." },
      { titulo: "100% ALGODÓN PREMIUM", desc: "Suave · pesado · estructurado" },
      { titulo: "FIT", desc: "Silueta oversize cuidadosamente equilibrada." }
    ]
  },
  {
    id: 7,
    nombre: "Buzo Nike x Billie Eilish",
    precio: 170000,
    precioAnterior: null,
    oferta: false,
    imagenes: ["nike billie 1.jpeg", "nike billie 2.jpeg", "nike billie 3.jpg", "nike billie 4.jpg", "nike billie 5.jpg"],
    tallas: [
      { nombre: "S", disponible: true },
      { nombre: "M", disponible: false },
      { nombre: "L", disponible: true },
      { nombre: "XL", disponible: true }
    ],
    detalles: [
      { titulo: "CONSTRUCCIÓN PREMIUM", desc: "Acabados pensados para durar." },
      { titulo: "100% ALGODÓN PREMIUM", desc: "Suave · pesado · estructurado" },
      { titulo: "FIT", desc: "Silueta oversize cuidadosamente equilibrada." }
    ]
  },
  {
    id: 8,
    nombre: "Buzo Nike",
    precio: 140000,
    precioAnterior: null,
    oferta: false,
    imagenes: ["nike v.jpeg"],
    tallas: [
      { nombre: "S", disponible: false },
      { nombre: "M", disponible: true },
      { nombre: "L", disponible: true },
      { nombre: "XL", disponible: false }
    ],
    detalles: [
      { titulo: "CONSTRUCCIÓN PREMIUM", desc: "Acabados pensados para durar." },
      { titulo: "100% ALGODÓN PREMIUM", desc: "Suave · pesado · estructurado" },
      { titulo: "FIT", desc: "Silueta oversize cuidadosamente equilibrada." }
    ]
  },
  {
    id: 9,
    nombre: "Chaqueta North Face",
    precio: 140000,
    precioAnterior: 180000,
    oferta: true,
    imagenes: ["nort face.jpeg", "nort face 1.jpeg", "nort face 2.jpg"],
    tallas: [
      { nombre: "S", disponible: false },
      { nombre: "M", disponible: false },
      { nombre: "L", disponible: true },
      { nombre: "XL", disponible: false }
    ],
    detalles: [
      { titulo: "CONSTRUCCIÓN PREMIUM", desc: "Acabados pensados para durar." },
      { titulo: "100% ALGODÓN PREMIUM", desc: "Suave · pesado · estructurado" },
      { titulo: "FIT", desc: "Silueta oversize cuidadosamente equilibrada." }
    ]
  },
  {
    id: 10,
    nombre: "Buzo Supreme",
    precio: 190000,
    precioAnterior: 220000,
    oferta: true,
    imagenes: ["supreme.jpeg", "supreme 1.jpeg"],
    tallas: [
      { nombre: "S", disponible: false },
      { nombre: "M", disponible: true },
      { nombre: "L", disponible: true },
      { nombre: "XL", disponible: false }
    ],
    detalles: [
      { titulo: "CONSTRUCCIÓN PREMIUM", desc: "Acabados pensados para durar." },
      { titulo: "100% ALGODÓN PREMIUM", desc: "Suave · pesado · estructurado" },
      { titulo: "FIT", desc: "Silueta oversize cuidadosamente equilibrada." }
    ]
  },
  {
    id: 11,
    nombre: "Chaqueta Columbia 2 en 1",
    precio: 170000,
    precioAnterior: null,
    oferta: false,
    imagenes: ["columbia c.jpeg", "columbia r.jpeg", "peluche.jpeg"],
    tallas: [
      { nombre: "S", disponible: false },
      { nombre: "M", disponible: true },
      { nombre: "L", disponible: true },
      { nombre: "XL", disponible: false }
    ],
    detalles: [
      { titulo: "CONSTRUCCIÓN PREMIUM", desc: "Acabados pensados para durar." },
      { titulo: "100% ALGODÓN PREMIUM", desc: "Suave · pesado · estructurado" },
      { titulo: "FIT", desc: "Silueta oversize cuidadosamente equilibrada." }
    ]
  }
];

let productoActual = null;
let indiceImagenActual = 0;
let tallaSeleccionada = "";

const formatearCOP = (valor) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(valor);
};

function cargarCatalogo() {
  const grid = document.getElementById("gridProductos");
  if (!grid) return;
  grid.innerHTML = "";

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card-producto";
    card.onclick = () => abrirModal(prod);

    card.innerHTML = `
      ${prod.oferta ? '<span class="badge-oferta">Oferta</span>' : ''}
      <div class="card-imagen-wrap">
        <img src="${prod.imagenes[0]}" alt="${prod.nombre}">
      </div>
      <div class="card-info">
        <h3>${prod.nombre}</h3>
        <div class="precio-wrap">
          <span class="precio-actual">${formatearCOP(prod.precio)}</span>
          ${prod.precioAnterior ? `<span class="precio-anterior">${formatearCOP(prod.precioAnterior)}</span>` : ''}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function abrirModal(prod) {
  productoActual = prod;
  indiceImagenActual = 0;

  document.getElementById("modalTitulo").innerText = prod.nombre;
  document.getElementById("modalPrecio").innerText = formatearCOP(prod.precio);

  // Cargar detalles del producto
  const contenedorDetalles = document.getElementById("modal-detalles");
  if (contenedorDetalles) {
    contenedorDetalles.innerHTML = "";
    if (prod.detalles) {
      prod.detalles.forEach(detalle => {
        contenedorDetalles.innerHTML += `
          <div class="espec-item">
            <strong>${detalle.titulo}</strong>
            <span>${detalle.desc}</span>
          </div>
        `;
      });
    }
  }

  const contTallas = document.getElementById("modalTallas");
  if (contTallas) {
    contTallas.innerHTML = "";
    tallaSeleccionada = "";

    const tallasProducto = prod.tallas || [
      { nombre: "S", disponible: true },
      { nombre: "M", disponible: true },
      { nombre: "L", disponible: true },
      { nombre: "XL", disponible: true }
    ];

    tallasProducto.forEach(talla => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.innerText = talla.nombre;

      if (talla.disponible) {
        btn.className = "btn-talla";
        btn.onclick = (e) => seleccionarTalla(talla.nombre, e.target);

        // Selecciona automáticamente la primera talla disponible
        if (!tallaSeleccionada) {
          tallaSeleccionada = talla.nombre;
          btn.classList.add("active");
        }
      } else {
        btn.className = "btn-talla disabled";
        btn.disabled = true;
      }

      contTallas.appendChild(btn);
    });
  }

  actualizarGaleria();

  document.getElementById("vistaProducto").classList.remove("hidden");
  document.getElementById("vistaCheckout").classList.add("hidden");
  document.getElementById("modalProducto").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modalProducto").style.display = "none";
}

function actualizarGaleria() {
  document.getElementById("modalImgPrincipal").src = productoActual.imagenes[indiceImagenActual];

  const contMiniaturas = document.getElementById("modalMiniaturas");
  if (!contMiniaturas) return;
  contMiniaturas.innerHTML = "";

  productoActual.imagenes.forEach((img, idx) => {
    const min = document.createElement("img");
    min.src = img;
    if (idx === indiceImagenActual) min.classList.add("active");
    min.onclick = () => {
      indiceImagenActual = idx;
      actualizarGaleria();
    };
    contMiniaturas.appendChild(min);
  });
}

function cambiarImagen(direccion) {
  indiceImagenActual += direccion;
  if (indiceImagenActual < 0) indiceImagenActual = productoActual.imagenes.length - 1;
  if (indiceImagenActual >= productoActual.imagenes.length) indiceImagenActual = 0;
  actualizarGaleria();
}

function seleccionarTalla(talla, elemento) {
  tallaSeleccionada = talla;
  document.querySelectorAll(".btn-talla").forEach(btn => btn.classList.remove("active"));
  elemento.classList.add("active");
}

function irAlCheckout() {
  if (!tallaSeleccionada) {
    alert("Por favor selecciona una talla disponible.");
    return;
  }

  document.getElementById("vistaProducto").classList.add("hidden");
  document.getElementById("vistaCheckout").classList.remove("hidden");

  document.getElementById("resumenImg").src = productoActual.imagenes[0];
  document.getElementById("resumenTitulo").innerText = productoActual.nombre;
  document.getElementById("resumenTalla").innerText = `Talla: ${tallaSeleccionada}`;
  document.getElementById("resumenPrecioBase").innerText = formatearCOP(productoActual.precio);
  document.getElementById("resumenSubtotal").innerText = formatearCOP(productoActual.precio);

  calcularEnvio();
}

function volverAProducto() {
  document.getElementById("vistaCheckout").classList.add("hidden");
  document.getElementById("vistaProducto").classList.remove("hidden");
}

function calcularEnvio() {
  const ciudad = document.getElementById("ciudad").value.trim().toLowerCase();
  const departamento = document.getElementById("departamento").value;

  let costoEnvio = 0;

  if (ciudad === "bogota" || ciudad === "bogotá" || departamento === "Bogotá") {
    costoEnvio = 0;
    document.getElementById("resumenEnvio").innerText = "GRATIS (Bogotá)";
  } else {
    costoEnvio = COSTO_ENVIO_NACIONAL;
    document.getElementById("resumenEnvio").innerText = formatearCOP(COSTO_ENVIO_NACIONAL);
  }

  const total = productoActual.precio + costoEnvio;
  document.getElementById("resumenTotal").innerText = formatearCOP(total);
}

function procesarEnvioWhatsApp(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const email = document.getElementById("email").value;
  const direccion = document.getElementById("direccion").value;
  const complemento = document.getElementById("complemento").value;
  const ciudad = document.getElementById("ciudad").value;
  const departamento = document.getElementById("departamento").value;
  const telefono = document.getElementById("telefono").value;

  const esBogota = ciudad.trim().toLowerCase() === "bogota" || ciudad.trim().toLowerCase() === "bogotá" || departamento === "Bogotá";
  const costoEnvio = esBogota ? 0 : COSTO_ENVIO_NACIONAL;
  const total = productoActual.precio + costoEnvio;

  const mensaje = `*NUEVO PEDIDO DE COMPRA*%0A%0A` +
    `*Producto:* ${productoActual.nombre}%0A` +
    `*Talla:* ${tallaSeleccionada}%0A` +
    `*Valor Producto:* ${formatearCOP(productoActual.precio)}%0A` +
    `*Envío:* ${costoEnvio === 0 ? 'GRATIS (Bogotá)' : formatearCOP(costoEnvio)}%0A` +
    `*Total a pagar:* ${formatearCOP(total)}%0A%0A` +
    `*DATOS DEL CLIENTE:*%0A` +
    `• *Nombre:* ${nombre} ${apellidos}%0A` +
    `• *Email:* ${email}%0A` +
    `• *Teléfono:* ${telefono}%0A` +
    `• *Dirección:* ${direccion} ${complemento ? '(' + complemento + ')' : ''}%0A` +
    `• *Ciudad/Dpto:* ${ciudad}, ${departamento}%0A%0A` +
    `Quedo a la espera de la información bancaria para realizar el pago.`;

  window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`, '_blank');
}

document.addEventListener("DOMContentLoaded", cargarCatalogo);
