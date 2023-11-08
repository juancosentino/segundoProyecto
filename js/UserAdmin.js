const peliculas = JSON.parse(localStorage.getItem('Peliculas')) || []
const contenedor = document.getElementById('contenedor')

const inputName_Serie_Pelicula=document.getElementById('inputName_Serie_Pelicula')
const inputTipo_Serie_Pelicula=document.getElementById('inputTipo_Serie_Pelicula')
const inputGenero_Serie_Pelicula=document.getElementById('inputGenero_Serie_Pelicula')
const inputImg_Serie_Pelicula=document.getElementById('inputImg_Serie_Pelicula')
const inputDescripc_Serie_Pelicula=document.getElementById('inputDescripc_Serie_Pelicula')
const inputActors_Serie_Pelicula=document.getElementById('inputActors_Serie_Pelicula')
const inputVideo_Serie_Pelicula=document.getElementById('inputVideo_Serie_Pelicula')

contenedor.innerHTML = peliculas.map((peliculas) =>
    `
<tr>
    <th scope="row">${peliculas.id}</th>
        <td>${peliculas.name}</td>
        <td>${peliculas.Genero}</td>
        <td>${peliculas.Tipo}</td>
        <td> <img src='${peliculas.img}'</img></td>
        <td>${peliculas.descripc}</td>
        <td>${peliculas.actors}</td>
        <td><iframe width="120" height="120" src='${peliculas.video}'></iframe></td>
        <td class="text-center">

        <button class="btn btn-outline-danger" onclick="borrarPelicula(${peliculas.id})">Eliminar</button>

            <button type="button" class="btn btn-outline-warning my-3" data-bs-toggle="modal" data-bs-target="#exampleModal-${peliculas.id}">
              Editar
            </button>
            
            <div class="modal fade" id="exampleModal-${peliculas.id}" tabindex="-1" aria-labelledby="exampleModalLabel-${peliculas.id}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header logo-homero">
                    <h1 class="modal-title fs-5 titulo-modal" id="exampleModalLabel-${peliculas.id}">Editar-Pelicula==>${peliculas.name}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body modal-peliculas">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label titulo-modal">Nombre</label>
                      <input type="text" class="form-control input-name" id="inputPeliculaName" aria-describedby="emailHelp" value="${peliculas.name}" name="name">
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label titulo-modal">Genero</label>
                      <input type="text" class="form-control input-genero" id="inputPeliculaGenero" aria-describedby="emailHelp" value="${peliculas.Genero}" name="Genero">
                    </div>
                 <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label titulo-modal">Imagen</label>
                    <input type="text" class="form-control input-img" id="inputPeliculaImg" aria-describedby="emailHelp" value="Por Ej:${peliculas.img}" name="img">
                 </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label titulo-modal">Tipo</label>
                    <input type="text" class="form-control titulo-modal input-tipo" id="inputPeliculaTipo" aria-describedby="emailHelp" placeholder="Serie o Pelicula--${peliculas.Tipo}" name="Tipo">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label titulo-modal">Descripcion</label>
                    <input type="text" class="form-control input-descripc" id="inputPeliculaDescripc" aria-describedby="emailHelp"  value="${peliculas.descripc}" name="descripc">
                  </div>
                 <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label titulo-modal">Actores</label>
                  <input type="text" class="form-control input-actors" id="inputPeliculaActors" aria-describedby="emailHelp" value="${peliculas.actors}" name="actors">
                 </div>
                 <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label titulo-modal">Video</label>
                  <input type="text" class="form-control input-video" id="inputPeliculaVideo" aria-describedby="emailHelp" value="Por Ej:${peliculas.video}" name="video">
                 </div>
                    <button type="button" class="btn btn-primary" onclick="editarPelicula(${peliculas.id})">Guardar Cambios</button>
                </form>
                </div>
            
                </div>
            </div>
            </div>
            <button class="btn btn-outline-success" onclick="peliculaDestacada(${peliculas.id})">Destacar</button>
        </td>
</tr>
`
).join('')

const PeliculaName=document.querySelectorAll('.input-name')
const PeliculaGenero=document.querySelectorAll('.input-genero')
const PeliculaImg=document.querySelectorAll('.input-img')
const PeliculaTipo=document.querySelectorAll('.input-tipo')
const PeliculaDescripc=document.querySelectorAll('.input-descripc')
const PeliculaActors=document.querySelectorAll('.input-actors')
const PeliculaVideo=document.querySelectorAll('.input-video')

const dataForm = {
    name: '',
    Tipo: '',
    Genero: '',
    img: '',
    descripc: '',
    actors: '',
    video: ""
  }

  const formCreate = {
    names: '',
    Tipos: '',
    Generos: '',
    imgs: '',
    descripcs: '',
    actorss: '',
    videos: ""
  }

const editarPelicula = (idPelicula) => {
const { name, Tipo, Genero, img, descripc, actors, video } = dataForm
const filterPelicula = peliculas.filter((peli) => peli.id === Number(idPelicula))
const positionPelicula = peliculas.findIndex((peli) => peli.id === Number(idPelicula))
  
    if (filterPelicula.length > 0) {
        filterPelicula[0].name = name ? name : filterPelicula[0].name
        filterPelicula[0].Tipo = Tipo ? Tipo : filterPelicula[0].Tipo
        filterPelicula[0].Genero = Genero ? Genero : filterPelicula[0].Genero
        filterPelicula[0].img = img ? img : filterPelicula[0].img
        filterPelicula[0].descripc = descripc ? descripc : filterPelicula[0].descripc
        filterPelicula[0].actors = actors ? actors : filterPelicula[0].actors
        filterPelicula[0].video = video ? video : filterPelicula[0].video
        peliculas[positionPelicula] = filterPelicula[0]
      localStorage.setItem('Peliculas', JSON.stringify(peliculas))
      location.reload()
    }
  }

  const borrarPelicula = (idPelicula) => {
    const confirmDelete = confirm('Estas seguro de que quieres eliminar esta pelicula?')
  
    if (confirmDelete) {
      const filterPelicula = peliculas.filter((peli) => peli.id !== Number(idPelicula))
      localStorage.setItem('Peliculas', JSON.stringify(filterPelicula))
      location.reload()
    }
  }

  const changeValues = (ev) => {
    const { name, value } = ev.target
    dataForm[name] = value
  }

  const createPeliculaForm = (ev) => {
    const { name, value } = ev.target
   
    formCreate[name] = value
  }

  const sendFormCreate = () => {

    const {names, Tipos, Generos, imgs, descripcs, actorss, videos} = formCreate
  

    if (!names && !Tipos && !Generos && !imgs && !descripcs && !actorss && !videos) {
      alert('el formulario esta vacio')
    } else {
  
      const newId = peliculas[peliculas.length - 1].id + 1
  
      const newPelicula = {
        id: newId,
        name: names,
        Tipo: Tipos,
        Genero:  Generos,
        img:imgs,
        descripc:descripcs,
        actors:actorss,
        video:videos,
  
      }
  
      peliculas.push(newPelicula)
      localStorage.setItem('Peliculas', JSON.stringify(peliculas))
      location.reload()
    }
  
  
  }

  const peliculaDestacada = (id) => {
    let peliDest = JSON.parse(localStorage.getItem('peliDest')) || []
  
    if (peliDest.length > 0) {
      const confirmCambioDest = confirm('Estas seguro de que quieres cambiar la pelicula Destacada?')
  
      if (confirmCambioDest) {
        const peliFilter = peliculas.filter((peli) => peli.id === id)
        peliDest = peliFilter
        localStorage.setItem('peliDest', JSON.stringify(peliDest))
  
      }
    } else {
      const peliFilter = peliculas.filter((peli) => peli.id === id)
      peliDest.push(peliFilter[0])
      localStorage.setItem('peliDest', JSON.stringify(peliDest))
  
    }
  
  }

    PeliculaName.forEach(element => {
        element.addEventListener('input', changeValues)
});
    PeliculaGenero.forEach(element => {
    element.addEventListener('input', changeValues)
});
    PeliculaImg.forEach(element => {
    element.addEventListener('input', changeValues)
});
    PeliculaTipo.forEach(element => {
    element.addEventListener('input', changeValues)
});
    PeliculaDescripc.forEach(element => {
    element.addEventListener('input', changeValues)
});
    PeliculaActors.forEach(element => {
    element.addEventListener('input', changeValues)
});
    PeliculaVideo.forEach(element => {
    element.addEventListener('input', changeValues)
});


inputName_Serie_Pelicula.addEventListener('input', createPeliculaForm)
inputTipo_Serie_Pelicula.addEventListener('input', createPeliculaForm)
inputGenero_Serie_Pelicula.addEventListener('input', createPeliculaForm)
inputImg_Serie_Pelicula.addEventListener('input', createPeliculaForm)
inputDescripc_Serie_Pelicula.addEventListener('input', createPeliculaForm)
inputActors_Serie_Pelicula.addEventListener('input', createPeliculaForm)
inputVideo_Serie_Pelicula.addEventListener('input', createPeliculaForm)

