const cardsFav = document.getElementById('cardsFav')
const favoritosLs = JSON.parse(localStorage.getItem('favoritos')) || []

cardsFav.innerHTML = favoritesLs.map((fav) =>
    `
    <div class="card col-2 pelicula">
      <div class="face front">
      <img src="${fav.imag}" alt="">
      <h3>${fav.name}</h3>
    </div>
  <div class="face back">
      <h3>${fav.name}</h3>
      <p class="texto">${fav.descripc}</p>
          <div class="link">
                <button class="btn btn-outline-primary"  onclick="deleteFav(${fav.id})">Eliminar</button>
          </div>
      </div>
  </div>
    `
).join('')

const deleteFav = (id) => {
    const confirmDelete = confirm('Si estas seguro de que quieres eliminar este producto de Favoritos?')

    if (confirmDelete) {
        const filterFav = favoritosLs.filter((fav) => fav.id !== id)
        localStorage.setItem('favoritos', JSON.stringify(filterFav))
        location.reload()
    }
}




