const peliculasLs = JSON.parse(localStorage.getItem('Peliculas')) || []

if (peliculasLs.length === 0){
    const peliculasObj = [
    {
        id: 1,
        name: 'Mision Imposible',
        Tipo: 'Pelicula',
        Genero: 'Accion',
        img: '/img/Mision Imposible.avif',
        descripc: 'Ethan Hunt y su equipo del FMI, se embarcan en su misión más peligrosa hasta la fecha: localizar, antes de que caiga en las manos equivocadas, una nueva y terrorífica arma que amenaza a toda la humanidad. En esta tesitura, y con unas fuerzas oscuras del pasado de Ethan acechando, comienza una carrera mortal alrededor del mundo en la que está en juego el control del futuro y el destino del planeta.',
        actors: 'Josh Hutcherson, Elizabeth Lail, Piper Rubio, Mary Stuart Masterson, Matthew Lillard, Lucas Grant, Kevin Foster, Jade Kindar-Martin, Jess Weiss, Kat Conner Sterling, Grant Feely, Jessica Blackmore, Bailey Winston, Michael Sullivan, Christian Stokes',
        video: "https://www.youtube.com/embed/HlF72YxIWWo"
    },
    {
        id: 2,
        name: 'Saw X',
        Tipo: 'Pelicula',
        Genero: 'Terror ',
        img: '/img/Saw X.avif',
        descripc: 'Entre los acontecimientos de Saw y Saw II, un enfermo y desesperado John Kramer viaja a México para someterse a un procedimiento médico arriesgado y experimental con la esperanza de encontrar una cura milagrosa para su cáncer, sólo para descubrir que toda la operación es una estafa para defraudar. los más vulnerables. Armado con un nuevo propósito, el infame asesino en serie regresa a su trabajo, dándole la vuelta a los estafadores en su forma visceral característica a través de trampas tortuosas, trastornadas e ingeniosas.',
        actors: 'Tobin Bell, Shawnee Smith, Synnøve Macody Lund, Steven Brand, Renata Vaca, Joshua Okamoto, Octavio Hinojosa Martínez, Paulette Hernández, Jorge Briseño, Costas Mandylor, Michael Beach, Isan Beomhyun Lee, David Alfano, Katie Barberi, Lucía Gómez-Robledo',
        video: "https://www.youtube.com/embed/vEn_IB95oRg" 
    },
    {
        id: 3,
        name: 'Five Nights at Freddy°s',
        Tipo: 'Pelicula',
        Genero: 'Terror, Misterio',
        img: "/img/Five Nights at Freddy's.avif",
        descripc: 'Un guardia de seguridad con problemas comienza a trabajar en Freddy Fazbears Pizza. Mientras pasa su primera noche en el trabajo, se da cuenta de que el turno de noche en Freddys no será tan fácil de superar.',
        actors: 'Josh Hutcherson, Elizabeth Lail, Piper Rubio, Mary Stuart Masterson, Matthew Lillard, Lucas Grant, Kevin Foster, Jade Kindar-Martin, Jess Weiss, Kat Conner Sterling, Grant Feely, Jessica Blackmore, Bailey Winston, Michael Sullivan, Christian Stokes',
        video: "https://www.youtube.com/embed/sld2-fE_Wng"
    },
    {
        id: 4,
        name: 'Lego Batman: la película',
        Tipo: 'Pelicula',
        Genero: 'Animacion, Comedia, Accion',
        img: '/img/Lego Batman.avif',
        descripc: 'Con el irreverente espíritu de diversión que convirtió a "The Lego Movie" en un fenómeno mundial, el autodenominado protagonista de ese conjunto, Lego Batman, protagoniza su propia aventura en la gran pantalla. Pero se están gestando grandes cambios en Ciudad Gótica, y si quiere salvar a la ciudad de la invasión hostil de The Joker, Batman puede tener que dejar a un lado al vigilante, tratar de trabajar con otros y tal vez, solo tal vez, aprender a alegrarse.',
        actors: 'Will Arnett, Zach Galifianakis, Michael Cera, Rosario Dawson, Ralph Fiennes, Jenny Slate, Mariah Carey, Channing Tatum, Billy Dee Williams, Hector Elizondo, Conan Brien, Jason Mantzoukas, Doug Benson, Zoë Kravitz, Kate Micucci',
        video: "https://www.youtube.com/embed/h6DOpfJzmo0"
    },
    {
        id: 5,
        name: 'One Piece: Episodio de las Islas del Cielo Skypiea',
        Tipo: 'Pelicula',
        Genero: 'Animacion, Aventura, Comedia,',
        img: '/img/One Piece Episodio de las Islas del Cielo Skypiea.avif',
        descripc: 'Es un recuento completo de la saga de Sky Island, particularmente el arco de Skypiea.',
        actors: 'Mayumi Tanaka, Kazuya Nakai, Akemi Okamura, Kappei Yamaguchi, Hiroaki Hirata, Ikue Otani, Yuriko Yamaguchi, Rieko Takahashi, Masami Suzuki, Hidekatsu Shibata, Toshiyuki Morikawa, Masaya Takatsuka, Ennosuke Ichikawa, Naoya Uchida, Hochu Otsuka',
        video: "https://www.youtube.com/embed/CEIQxmDkrAM"
    },
    {
        id: 6,
        name: 'Batman: El caballero de la noche asciende',
        Tipo: 'Pelicula',
        Genero: 'Crimen, Accion, Misterio',
        img: '/img/Batman El caballero de la noche asciende.avif',
        descripc: 'Ocho años después del reinado de anarquía del Joker, Batman, con la ayuda de la enigmática Gatúbela, se ve obligado a salir de su exilio para salvar a Ciudad Gótica del brutal terrorista guerrillero Bane.',
        actors: 'Christian Bale, Michael Caine, Gary Oldman, Anne Hathaway, Tom Hardy, Marion Cotillard, Joseph Gordon-Levitt, Morgan Freeman, Matthew Modine, Juno Temple, Ben Mendelsohn, Burn Gorman, Daniel Sunjata, Cillian Murphy, Alon Abutbul',
        video: "https://www.youtube.com/embed/GPl-N0KYMog"
    },
    {
        id: 7,
        name: 'Mortal Kombat Legends: Cage Match',
        Tipo: 'Pelicula',
        Genero: 'Animacion, Comedia, Accion',
        img: '/img/Mortal Kombat Legends Cage Match.avif',
        descripc: 'En el Hollywood de la década de 1980, el actor de artes marciales Johnny Cage busca a su coprotagonista desaparecido en medio de un Los Ángeles lleno de luchadores sedientos de sangre.',
        actors: 'Joel McHale, Jennifer Grey, Dusan Brown, Grey DeLisle, Robin Atkin Downes, Zehra Fazal, Gilbert Gottfried, Kelly Hu, Matthew Yang King, Phil LaMarr, Matthew Mercer, Dave B. Mitchell, Armen Taylor',
        video: "https://www.youtube.com/embed/m1ISBDJm0yM"
    },
    {
        id: 8,
        name: 'El resplandor',
        Tipo: 'Pelicula',
        Genero: 'Terror',
        img: '/img/El resplandor.avif',
        descripc: 'Una familia se dirige a un hotel aislado durante el invierno donde una presencia siniestra influye en la violencia del padre, mientras que su hijo psíquico ve horribles presentimientos tanto del pasado como del futuro.',
        actors: 'Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers, Philip Stone, Joe Turkel, David Baxt, Barry Nelson, Barry Dennen, Tony Burton, Lia Beldam, Billie Gibson, Lisa Burns, Louise Burns, Manning Redwood',
        video: "https://www.youtube.com/embed/IiSjPcRWjYA"
    },
    {
        id: 9,
        name: 'Metegol',
        Tipo: 'Pelicula',
        Genero: 'Animacion, Aventura',
        img: '/img/Metegol.avif',
        descripc: 'Amadeo es un fenómeno jugando al futbolín y está enamorado de Laura, su mejor amiga, aunque nunca se ha atrevido a decírselo. Desde pequeño se ha pasado la vida jugando al futbolín en el bar que su padre regenta en un pueblo pequeño, donde el tiempo pasa sin sobresaltos. Su vida tranquila se termina el día en el que "el Crack", un joven del pueblo convertido en el mejor futbolista del mundo, vuelve dispuesto a vengarse de la única derrota de su vida: la que sufrió frente a Amadeo jugando al futbolín siendo niños. Con el futbolín, el bar y su corazón hechos pedazos, Amadeo descubre algo mágico: los jugadores de su querido futbolín hablan ¡y mucho! Guiados por su líder, el carismático Capi, los jugadores del futbolín y Amadeo se embarcarán en una fantástica aventura para salvar a Laura y al pueblo. En este camino se convertirán en un verdadero equipo y conocerán el amor, el respeto, la amistad y la pasión. Pero, ¿hay en el mundo y en el fútbol lugar para los milagros?',
        actors: 'David Masajnik, Diego Ramos, Pablo Rago, Gabriel Almirón, Diego Mesaglío, Lucía Maciel, Marcos Mundstock, Ernesto Claudio, Miguel Ángel Rodríguez, Fernando Gustavo Sily, Fabián Gianola, Sebastián Mogordoy, Federico Cecere, Ezequiel Cipols, Luciana Falcón',
        video: "https://www.youtube.com/embed/QVhf5ucMhNc"
    },
    {
        id: 10,
        name: 'La Vaca y el Pollito',
        Tipo: 'Series',
        Genero: 'Animacion, Comedia',
        img: '/img/La Vaca y el Pollito.avif',
        descripc: 'La Vaca y el Pollito trata sobre las aventuras de dos hermanos, una vaca y un pollo. Sus padres son un par de piernas cada uno sin torso y casi siempre los hermanos son atormentados por el Hombre Rojo (Trasero Rojo), una versión patética del diablo que interpreta diferentes personajes en numerosos episodios, y que casi nunca lleva pantalones.',
        actors: 'Charlie Adler, Candi Milo, Dee Bradley Baker',
        video: "https://www.youtube.com/embed/Pl9x2DqBRdU"
    },
    {
        id: 11,
        name: 'Anatomía según Grey',
        Tipo: 'Series',
        Genero: 'Drama',
        img: '/img/Anatomía según Grey.avif',
        descripc: 'La vida de Meredith Grey no es nada fácil. Intenta tomar las riendas de su vida, aunque su trabajo sea de esos que te hacen la vida imposible. Meredith es una cirujana interna de primer año en el Hospital Grace de Seattle, el programa de prácticas más duro de la Facultad de Medicina de Harvard. Y ella lo va a comprobar. Pero no estará sola. Un elenco de compañeros de promoción tendrán que superar la misma prueba. Ahora están en el mundo real, son doctores del hospital. Y en un mundo donde la experiencia en el trabajo puede ser un factor de vida o muerte, todos ellos tendrán que lidiar con los altibajos de sus vidas personales.',
        actors: 'Ellen Pompeo, James Pickens Jr., Chandra Wilson, Kevin McKidd, Camilla Luddington, Kim Raver, Chris Carmack, Jake Borelli, Anthony Hill, Caterina Scorsone, Kelly McCreary, Harry Shum Jr., Adelaide Kane, Alexis Floyd, Niko Terho',
        video: "https://www.youtube.com/embed/VftMccvBNkE"
    },
    {
        id: 12,
        name: 'El Mantequilla: Maestro de la estafa',
        Tipo: 'Series',
        Genero: 'Comedia, Drama',
        img: '/img/El Mantequilla Maestro de la estafa.avif',
        descripc: 'Sobre un estafador que asume múltiples personalidades para llevar a cabo un elaborado plan de reivindicación de una antigua injusticia de la que fue víctima su madre.',
        actors: 'Alberto Guerra, Mayra Batalla, Rafael Sánchez Navarro, Iván Aragón, Enrique Arreola, Abril Schreiber',
        video: "https://www.youtube.com/embed/2AaM_16WoCg"
    }
    ]
    localStorage.setItem('Peliculas', JSON.stringify(peliculasObj))
}
