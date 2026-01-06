fetch('productos.json')
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById('productos');

    productos.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" />
        <h3>${p.nombre}</h3>
        <p class="precio">$${p.precio}</p>
      `;

      contenedor.appendChild(card);
    });
  });
