fetch('./productos.json')
  .then(response => response.json())
  .then(productos => {
    const contenedor = document.getElementById('productos');

    productos.forEach(p => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="./${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p class="precio">$${p.precio}</p>
      `;

      contenedor.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error cargando productos:', error);
  });
