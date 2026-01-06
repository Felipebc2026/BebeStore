fetch("productos.json")
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("productos");

    data.forEach(producto => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <img src="${producto.imagen}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
      `;

      contenedor.appendChild(div);
    });
  });
