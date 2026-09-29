import type { Place } from './types'

/** Briefing de cada parada que aparece en el cronograma. */
export const places: Place[] = [
  // ======================= BOSTON =======================
  {
    id: 'bos-freedom-trail', name: 'Freedom Trail', cityId: 'boston', category: 'histórico',
    mapsQuery: 'Freedom Trail Boston', coords: { lat: 42.3576, lng: -71.0633 },
    briefing: {
      summary: 'Una línea de ladrillo rojo de 4 km en el piso que une 16 sitios de la independencia de Estados Unidos. Gran parte de lo que caminamos en Boston va sobre esta ruta, aunque el logbook no la nombre.',
      timeline: [
        { year: '1770', text: 'Masacre de Boston: soldados británicos disparan contra una multitud frente al Old State House y matan a cinco personas. Uno de los muertos, Crispus Attucks, era negro y se convirtió en símbolo.' },
        { year: '1773', text: 'Boston Tea Party: colonos disfrazados lanzan al mar 342 cajas de té británico en protesta por los impuestos.' },
        { year: '1775', text: 'Paul Revere cabalga de noche a avisar que los británicos avanzan. Empieza la guerra de independencia.' },
        { year: '1776', text: 'Se firma la Declaración de Independencia y se lee públicamente desde el balcón del Old State House.' },
      ],
      dontMiss: ['La línea roja del piso: es literal, se sigue caminando', 'El circulo de adoquines que marca donde cayeron los muertos de la Masacre'],
      funFact: 'La ruta se inventó en 1951 por un periodista local que se quejaba de que los turistas no encontraban nada.',
    },
  },
  {
    id: 'bos-common', name: 'Boston Common y Parkman Plaza', cityId: 'boston', category: 'parque',
    mapsQuery: 'Parkman Plaza Boston Common', coords: { lat: 42.3551, lng: -71.0657 },
    briefing: {
      summary: 'Creado en 1634, es el parque público más antiguo de Estados Unidos. Empezó como potrero comunal donde los vecinos pastaban vacas, después fue campamento de las tropas británicas y sitio de ahorcamientos públicos.',
      dontMiss: ['El Public Garden al lado, con los botes de cisne', 'El monumento al 54 Regimiento de Massachusetts, el primer regimiento negro del ejercito de la Union'],
      funFact: 'Hasta 1830 todavia se podía llevar ganado a pastar ahi por ley.',
    },
  },
  {
    id: 'bos-hult', name: 'Hult International Business School', cityId: 'boston', category: 'universidad',
    address: '1 Education Street, Cambridge, MA 02141', mapsQuery: 'Hult International Business School Cambridge',
    briefing: {
      summary: 'Escuela de negocios con sedes en Boston, Londres, Dubai, San Francisco y Shanghai. Su modelo es que los estudiantes roten entre campus, y su campus de Boston queda en Cambridge, al lado del MIT.',
      dontMiss: ['Preguntar como funciona la rotacion entre campus y que se necesita para aplicar desde Colombia'],
    },
  },
  {
    id: 'bos-faneuil', name: 'Faneuil Hall y Quincy Market', cityId: 'boston', category: 'histórico',
    address: '206 S Market St, Boston, MA 02109', mapsQuery: 'Faneuil Hall Boston', coords: { lat: 42.3600, lng: -71.0555 },
    briefing: {
      summary: 'Faneuil Hall se conoce como "la cuna de la libertad": lo donó en 1742 el comerciante Peter Faneuil y en su salón de arriba Samuel Adams y otros encendieron la revuelta contra los impuestos británicos. Quincy Market, al lado, se construyó en 1826 como mercado de abastos.',
      dontMiss: ['El salón de asambleas del segundo piso de Faneuil Hall', 'La veleta con forma de saltamontes en el techo'],
      funFact: 'Peter Faneuil hizo parte de su fortuna con el comercio de esclavos: el edificio que se llama "cuna de la libertad" fue pagado con ese dinero, y la ciudad todavia discute que hacer con esa contradicción.',
    },
  },
  {
    id: 'bos-granary', name: 'Granary Burying Ground', cityId: 'boston', category: 'histórico',
    mapsQuery: 'Granary Burying Ground Boston', coords: { lat: 42.3573, lng: -71.0618 },
    briefing: {
      summary: 'Cementerio de 1660, el tercero más antiguo de la ciudad. Ahi están enterrados Samuel Adams, John Hancock, Paul Revere, Robert Treat Paine, James Otis, los padres de Benjamin Franklin y las cinco victimas de la Masacre de Boston.',
      dontMiss: ['El obelisco central a la familia Franklin', 'Las lapidas con calaveras aladas: símbolo puritano del alma que sale del cuerpo'],
      funFact: 'Hay unas 2.300 lapidas pero se calcula que hay más de 5.000 personas enterradas: muchas tumbas se movieron para que las filas quedaran derechas y las lapidas ya no corresponden a los cuerpos.',
    },
  },
  {
    id: 'bos-beacon-hill', name: 'Beacon Hill (Acorn St)', cityId: 'boston', category: 'barrio',
    mapsQuery: 'Acorn Street Boston', coords: { lat: 42.3576, lng: -71.0694 },
    briefing: {
      summary: 'El barrio de casas de ladrillo rojo con faroles de gas y calles empedradas. Acorn Street, de los años 1820, es probablemente la calle más fotografiada de Estados Unidos.',
      dontMiss: ['Los vidrios morados de algunas ventanas', 'Los faroles de gas que siguen encendidos de día'],
      funFact: 'Los vidrios morados fueron un error: un lote de vidrio inglés de 1820 traia manganeso y se volvio violeta con el sol. Hoy son un símbolo de estatus y no se pueden cambiar.',
    },
  },
  {
    id: 'bos-park-street-church', name: 'Park Street Church', cityId: 'boston', category: 'histórico',
    mapsQuery: 'Park Street Church Boston', coords: { lat: 42.3566, lng: -71.0624 },
    briefing: {
      summary: 'Iglesia de 1809 en la esquina del Boston Common. Desde su púlpito William Lloyd Garrison dio en 1829 su primer discurso público contra la esclavitud, y ahi se canto por primera vez el himno "America" en 1831.',
      dontMiss: ['La torre de 66 metros, que fue el edificio más alto de EE.UU. cuando se construyó'],
      questions: ['Que hizo que las colonias pasaran de pedir menos impuestos a pedir independencia?', 'Por que se dice que la revolución americana fue "conservadora" comparada con la francesa?'],
    },
  },
  {
    id: 'bos-harvard', name: 'Harvard University', cityId: 'boston', category: 'universidad',
    mapsQuery: 'Harvard Yard Cambridge MA', coords: { lat: 42.3744, lng: -71.1169 },
    briefing: {
      summary: 'Fundada en 1636, es la universidad más antigua de Estados Unidos: existe desde 140 años antes que el pais. El nucleo del campus es Harvard Yard y la puerta de entrada clásica es Johnston Gate.',
      dontMiss: ['La estatua de John Harvard', 'Widener Library', 'Harvard Square'],
      funFact: 'A la estatua de John Harvard le dicen "la estatua de las tres mentiras": no es el (posaron un estudiante), la fecha que dice esta mal, y el no fundo la universidad sino que fue su primer gran donante.',
    },
  },
  {
    id: 'bos-broad', name: 'Broad Institute (MIT-Harvard)', cityId: 'boston', category: 'institución',
    mapsQuery: 'Broad Institute of MIT and Harvard Cambridge',
    briefing: {
      summary: 'Instituto de investigación genomica fundado en 2004 por el MIT y Harvard. Ahi se hizo buena parte del trabajo del Proyecto Genoma Humano y es uno de los centros donde se desarrollo la edición genetica CRISPR.',
      dontMiss: ['Preguntar como se financia un instituto así y que carreras trabajan adentro'],
    },
  },
  {
    id: 'bos-mit', name: 'MIT — Massachusetts Institute of Technology', cityId: 'boston', category: 'universidad',
    mapsQuery: 'MIT Great Dome Cambridge', coords: { lat: 42.3601, lng: -71.0942 },
    briefing: {
      summary: 'Fundado en 1861 con la idea de enseñar ciencia aplicada, no solo teoria. Su lema es "mens et manus" (mente y mano). El Great Dome es la cúpula que se ve desde el rio Charles.',
      dontMiss: ['El Great Dome', 'El Stata Center, diseñado por Frank Gehry, que parece derretido a propósito', 'El Infinite Corridor, de 251 metros'],
      funFact: 'Los estudiantes del MIT tienen tradición de "hacks": una vez pusieron un carro de policia completo encima del Great Dome.',
    },
  },
  {
    id: 'bos-bpl', name: 'Boston Public Library', cityId: 'boston', category: 'histórico',
    mapsQuery: 'Boston Public Library Copley Square', coords: { lat: 42.3494, lng: -71.0780 },
    briefing: {
      summary: 'Fundada en 1848, fue la primera biblioteca pública grande y gratuita de Estados Unidos y la primera en dejar que la gente se llevara los libros a la casa.',
      dontMiss: ['Bates Hall, el salón de lectura con techo de baúveda', 'El patio interior estilo italiano', 'Los murales de John Singer Sargent'],
    },
  },
  {
    id: 'bos-state-house', name: 'Massachusetts State House', cityId: 'boston', category: 'histórico',
    mapsQuery: 'Massachusetts State House Boston', coords: { lat: 42.3588, lng: -71.0638 },
    briefing: {
      summary: 'Sede del gobierno de Massachusetts desde 1798, en terreno que era el potrero de John Hancock. La cúpula dorada original era de madera; Paul Revere la recubrió de cobre en 1802 y después se cubrio con lamina de oro.',
      funFact: 'Durante la Segunda Guerra Mundial pintaron la cúpula de gris para que no brillara y no sirviera de referencia a un posible bombardeo.',
    },
  },
  {
    id: 'bos-old-north', name: 'Old North Church', cityId: 'boston', category: 'histórico',
    mapsQuery: 'Old North Church Boston', coords: { lat: 42.3663, lng: -71.0544 },
    briefing: {
      summary: 'La iglesia más antigua que sigue en pie en Boston (1723). La noche del 18 de abril de 1775 colgaron dos faroles en su campanario para avisar que los británicos venian por mar: "one if by land, two if by sea". Esa señal lanzo la cabalgata de Paul Revere.',
      dontMiss: ['El campanario donde estuvieron los faroles', 'Los bancos de familia cerrados con puertita'],
    },
  },
  {
    id: 'bos-old-state-house', name: 'Old State House', cityId: 'boston', category: 'histórico',
    mapsQuery: 'Old State House Boston', coords: { lat: 42.3588, lng: -71.0576 },
    briefing: {
      summary: 'Construido en 1713, es el edificio público más antiguo de Boston. Abajo, en la calle, ocurrió la Masacre de Boston en 1770. Desde su balcón se leyó por primera vez en Boston la Declaración de Independencia, el 18 de julio de 1776.',
      dontMiss: ['El leon y el unicornio británicos en la fachada: los originales se quemaron en 1776', 'El circulo de adoquines en la calle que marca la Masacre'],
    },
  },

  // ======================= NEW YORK =======================
  {
    id: 'nyc-bryant-park', name: 'Bryant Park', cityId: 'nyc', category: 'parque',
    mapsQuery: 'Bryant Park New York', coords: { lat: 40.7536, lng: -73.9832 },
    briefing: {
      summary: 'Parque detras de la Biblioteca Publica de Nueva York. En los años 70 y 80 era una zona tomada por el narcotrafico; se rehizo en 1992 y hoy es el caso de estudio clásico de como recuperar un espacio público.',
      dontMiss: ['La fachada de la New York Public Library con los dos leones, Patience y Fortitude'],
    },
  },
  {
    id: 'nyc-shabazz', name: 'The Shabazz Center', cityId: 'nyc', category: 'histórico',
    address: '3940 Broadway, New York, NY', mapsQuery: 'Shabazz Center 3940 Broadway New York',
    briefing: {
      summary: 'Es el antiguo Audubon Ballroom, el salón donde Malcolm X fue asesinado el 21 de febrero de 1965 mientras daba un discurso. Hoy es un centro educativo dirigido por la familia de su viuda, la Dra. Betty Shabazz.',
      timeline: [
        { year: '1925', text: 'Nace Malcolm Little en Omaha, Nebraska.' },
        { year: '1952', text: 'Sale de prision convertido al islam y adopta el nombre Malcolm X.' },
        { year: '1964', text: 'Rompe con la Nacion del Islam, viaja a La Meca y cambia su posicion sobre la lucha racial.' },
        { year: '1965', text: 'Lo asesinan en este salón, a los 39 años.' },
      ],
      dontMiss: ['El escenario reconstruido en el sitio exacto', 'El mural y la línea de tiempo de su vida'],
      questions: ['En que se diferenciaba la propuesta de Malcolm X de la de Martin Luther King Jr.?', 'Que cambió en su pensamiento después del viaje a La Meca?'],
    },
  },
  {
    id: 'nyc-morris-jumel', name: 'Morris-Jumel Mansion y Sylvan Terrace', cityId: 'nyc', category: 'histórico',
    mapsQuery: 'Morris-Jumel Mansion New York', coords: { lat: 40.8345, lng: -73.9385 },
    briefing: {
      summary: 'Construida en 1765, es la casa más antigua que queda en pie en Manhattan. George Washington la uso como cuartel general en 1776 durante la batalla de Harlem Heights. Al frente, Sylvan Terrace es una calle de casas de madera de 1882 que parece de otro siglo.',
      funFact: 'Lin-Manuel Miranda escribió parte de "Hamilton" en el escritorio de Aaron Burr dentro de esta casa. Burr vivió ahi después de casarse con Eliza Jumel.',
    },
  },
  {
    id: 'nyc-apollo', name: 'Apollo Theater', cityId: 'nyc', category: 'histórico',
    mapsQuery: 'Apollo Theater Harlem New York', coords: { lat: 40.8100, lng: -73.9500 },
    briefing: {
      summary: 'Abierto a público negro desde 1934, es el escenario donde arrancaron Ella Fitzgerald, James Brown, Aretha Franklin, Stevie Wonder, Michael Jackson y los Jackson 5. Su "Amateur Night" lleva casi 90 años funcionando.',
      funFact: 'Hay un tronco de árbol en el escenario que los artistas tocan para la buena suerte: es lo que queda del Arbol de la Esperanza, que estaba en la calle y bajo el cual los músicos negros esperaban trabajo.',
    },
  },
  {
    id: 'nyc-columbia', name: 'Columbia University', cityId: 'nyc', category: 'universidad',
    address: '2960 Broadway, New York, NY 10027', mapsQuery: 'Columbia University New York', coords: { lat: 40.8075, lng: -73.9626 },
    briefing: {
      summary: 'Fundada en 1754 como King’s College bajo licencia del rey Jorge II, es la universidad más antigua de Nueva York y parte de la Ivy League. Entrega los premios Pulitzer.',
      dontMiss: ['La escultura Alma Mater en las escaleras de Low Library: ahi es el punto de encuentro', 'La biblioteca Butler con los nombres de los clasicos grabados en la fachada'],
      funFact: 'Dicen que en los pliegues del manto de la Alma Mater hay un buho escondido, y que el estudiante que lo encuentre primero sera el mejor de su promocion.',
    },
  },
  {
    id: 'nyc-st-john', name: 'Cathedral of St. John the Divine', cityId: 'nyc', category: 'histórico',
    mapsQuery: 'Cathedral of St John the Divine New York', coords: { lat: 40.8038, lng: -73.9620 },
    briefing: {
      summary: 'Empezada en 1892 y todavia sin terminar: es una de las catedrales más grandes del mundo. Le dicen "St. John the Unfinished" porque lleva más de 130 años en obra.',
      dontMiss: ['El rosetón, uno de los vitrales más grandes del pais', 'Las tallas del portico con escenas apocalipticas de Nueva York destruida'],
    },
  },
  {
    id: 'nyc-times-square', name: 'Times Square', cityId: 'nyc', category: 'barrio',
    mapsQuery: 'Times Square New York', coords: { lat: 40.7580, lng: -73.9855 },
    briefing: {
      summary: 'Se llamaba Longacre Square hasta 1904, cuando el New York Times mudó ahi su sede y le puso su nombre. En los años 70 y 80 fue una de las zonas más peligrosas de la ciudad; se "limpio" en los 90 y hoy es lo contrario.',
      dontMiss: ['Las gradas rojas sobre la taquilla TKTS', 'La bola que baja cada 31 de diciembre'],
      funFact: 'Por norma de la ciudad, los edificios de Times Square están obligados a tener avisos luminosos: es el único lugar de Nueva York donde la publicidad es un requisito legal.',
    },
  },
  {
    id: 'nyc-moma', name: 'MoMA — Museum of Modern Art', cityId: 'nyc', category: 'museo',
    address: '11 W 53rd St, New York, NY 10019', mapsQuery: 'Museum of Modern Art New York', coords: { lat: 40.7614, lng: -73.9776 },
    briefing: {
      summary: 'Fundado en 1929, nueve días después del crack de la bolsa, por tres mujeres que querian un museo dedicado al arte de su epoca cuando ningún museo grande lo tomaba en serio. Hoy define lo que se entiende por arte moderno.',
      dontMiss: ['"La noche estrellada" de Van Gogh', '"Las señoritas de Aviñon" de Picasso', 'Los relojes derretidos de Dali', 'La sala de los Nenúfares de Monet'],
      questions: ['El arte contemporaneo se define como "el arte de hoy". Como reflejan los espacios y exposiciones del MoMA la influencia global, la diversidad cultural y los avances tecnologicos?'],
    },
  },
  {
    id: 'nyc-roosevelt', name: 'Roosevelt Island', cityId: 'nyc', category: 'barrio',
    mapsQuery: 'Roosevelt Island New York', coords: { lat: 40.7610, lng: -73.9500 },
    briefing: {
      summary: 'Isla angosta en el East River. Durante el siglo XIX se llamó Blackwell’s Island y concentraba lo que la ciudad queria esconder: una cárcel, un asilo psiquiatrico y un hospital de viruela. Hoy es un barrio residencial tranquilo con vista a Manhattan.',
      dontMiss: ['El teleferico: es transporte público, no atraccion turistica', 'Las ruinas del Smallpox Hospital', 'El Four Freedoms Park en la punta sur'],
      funFact: 'En 1887 la periodista Nellie Bly se hizo pasar por loca para que la internaran en el manicomio de esta isla y denunciar el maltrato. Su reportaje cambió la ley.',
    },
  },
  {
    id: 'nyc-dumbo', name: 'Dumbo, Brooklyn', cityId: 'nyc', category: 'barrio',
    mapsQuery: 'Dumbo Brooklyn New York', coords: { lat: 40.7033, lng: -73.9881 },
    briefing: {
      summary: 'Las siglas son "Down Under the Manhattan Bridge Overpass". Era zona de bodegas y fábricas; los artistas se metieron en los 70 buscando arriendo barato y hoy es de los barrios más caros de Brooklyn.',
      dontMiss: ['La foto de Washington St con el puente de Manhattan encuadrado entre los edificios', 'El carrusel Jane’s Carousel dentro de su caja de vidrio'],
    },
  },
  {
    id: 'nyc-brooklyn-bridge', name: 'Puente de Brooklyn', cityId: 'nyc', category: 'histórico',
    mapsQuery: 'Brooklyn Bridge New York', coords: { lat: 40.7061, lng: -73.9969 },
    briefing: {
      summary: 'Inaugurado en 1883 después de 14 años de obra. Fue el primer puente colgante de acero del mundo y durante decadas el más largo. Costó la vida de unas 27 personas.',
      timeline: [
        { year: '1869', text: 'John A. Roebling, el diseñador, muere de tétanos por un accidente en la obra antes de empezar.' },
        { year: '1872', text: 'Su hijo Washington Roebling queda paralizado por la enfermedad de los buzos al trabajar en las camaras submarinas.' },
        { year: '1883', text: 'Se inaugura. Emily Roebling, esposa de Washington, dirigio la obra durante 11 años desde la casa y fue la primera en cruzarlo.' },
      ],
      funFact: 'Seis días después de abrirlo corrio el rumor de que se iba a caer: la estampida mató a 12 personas. Para calmar a la gente, P.T. Barnum lo cruzo con 21 elefantes.',
    },
  },
  {
    id: 'nyc-little-italy', name: 'Chinatown y Little Italy', cityId: 'nyc', category: 'barrio',
    mapsQuery: 'Little Italy New York', coords: { lat: 40.7191, lng: -73.9973 },
    briefing: {
      summary: 'Dos barrios de inmigrantes pegados. Little Italy llegó a tener 10.000 italianos y hoy se redujo a unas pocas cuadras de Mulberry St, mientras el Chinatown de al lado crecio hasta ser uno de los más grandes de Occidente.',
      dontMiss: ['Mulberry Street', 'La vieja catedral de St. Patrick, la original antes de la de la Quinta Avenida'],
    },
  },
  {
    id: 'nyc-vessel', name: 'Vessel y Hudson Yards', cityId: 'nyc', category: 'mirador',
    mapsQuery: 'Vessel Hudson Yards New York', coords: { lat: 40.7538, lng: -74.0020 },
    briefing: {
      summary: 'Estructura de 2019 de Thomas Heatherwick: 154 tramos de escaleras que no llevan a ninguna parte. Es el centro de Hudson Yards, el desarrollo inmobiliario privado más caro de la historia de Estados Unidos, construido sobre los patios de trenes.',
      funFact: 'Se cerró al público después de varios suicidios y reabrió con mallas de seguridad. Es un caso de estudio sobre diseño y responsabilidad.',
    },
  },
  {
    id: 'nyc-high-line', name: 'High Line', cityId: 'nyc', category: 'parque',
    mapsQuery: 'High Line New York', coords: { lat: 40.7480, lng: -74.0048 },
    briefing: {
      summary: 'Una vía férrea elevada de carga de 1934 que quedó abandonada en 1980. En vez de demolerla, dos vecinos del barrio pelearon 10 años para convertirla en parque. Abrió en 2009 y desde entonces decenas de ciudades han copiado la idea.',
      dontMiss: ['Los rieles originales que dejaron embebidos entre las plantas', 'La ventana mirador sobre la 10th Avenue'],
    },
  },
  {
    id: 'nyc-little-island', name: 'Little Island y Pier 45', cityId: 'nyc', category: 'parque',
    mapsQuery: 'Little Island New York',
    briefing: {
      summary: 'Parque artificial de 2021 montado sobre 132 macetas de concreto en forma de tulipan clavadas en el Hudson. Esta donde estuvo el Pier 54, del que zarpaban los trasatlánticos y al que llegaron los sobrevivientes del Titanic en 1912.',
    },
  },
  {
    id: 'nyc-chelsea-market', name: 'Chelsea Market', cityId: 'nyc', category: 'histórico',
    mapsQuery: 'Chelsea Market New York', coords: { lat: 40.7424, lng: -74.0061 },
    briefing: {
      summary: 'Era la fábrica de galletas Nabisco. Aquí se inventó el Oreo, en 1912. La fábrica cerró y en los 90 la convirtieron en mercado, dejando a la vista el ladrillo y la tuberia originales.',
      dontMiss: ['La cascada hecha con un tubo de agua que encontraron en la obra'],
    },
  },
  {
    id: 'nyc-oculus', name: 'The Oculus', cityId: 'nyc', category: 'otro',
    mapsQuery: 'Oculus World Trade Center New York', coords: { lat: 40.7115, lng: -74.0109 },
    briefing: {
      summary: 'Estación de transporte diseñada por Santiago Calatrava, abierta en 2016. Costó cerca de 4.000 millones de dolares, casi el doble de lo presupuestado, lo que genero mucha critica.',
      dontMiss: ['El techo se abre cada 11 de septiembre a las 10:28 am, la hora exacta en que cayó la torre norte'],
      questions: ['Calatrava dice que su arquitectura es una propuesta estetica que genera comodidad y seguridad. Esta de acuerdo, viendo el efecto que genera en la zona?'],
    },
  },
  {
    id: 'nyc-911', name: '9/11 Memorial & Museum', cityId: 'nyc', category: 'histórico',
    address: '180 Greenwich St, New York, NY 10007', mapsQuery: '9/11 Memorial Museum New York', coords: { lat: 40.7115, lng: -74.0134 },
    briefing: {
      summary: 'Está en el sitio exacto de las Torres Gemelas. Las dos fuentes cuadradas ocupan las huellas de las torres y en el borde de bronce están grabados los nombres de las 2.977 victimas del 11 de septiembre de 2001 y las 6 del atentado de 1993.',
      timeline: [
        { year: '1973', text: 'Se inauguran las Torres Gemelas, los edificios más altos del mundo en ese momento.' },
        { year: '1993', text: 'Un carro bomba en el parqueadero mata a 6 personas. Primer atentado contra el complejo.' },
        { year: '2001', text: '11 de septiembre: cuatro aviones secuestrados. Dos contra las torres, uno contra el Pentagono y uno que cae en Pensilvania cuando los pasajeros se rebelan.' },
        { year: '2014', text: 'Abre el museo, siete pisos bajo tierra, hasta el nivel de los cimientos originales.' },
      ],
      dontMiss: ['El Survivor Tree: un peral que quedó carbonizado y sobrevivió', 'La Slurry Wall, el muro de contencion original que aguanto y evito que el rio Hudson inundara el bajo Manhattan', 'La escalera de los sobrevivientes'],
      questions: [
        'Que pasó el 11 de septiembre y que es el terrorismo?',
        'Quien fue Osama Bin Laden? Que es al-Qaeda?',
        'Como ocurrió todo y que se puede hacer para evitar que vuelva a pasar?',
        'Que es un héroe y como puede la gente agradecer a quienes actuan heroicamente en su propia comunidad?',
        'Hasta que punto se pueden violar los derechos humanos en nombre de la seguridad ciudadana?',
      ],
      funFact: 'No es un mirador: es un sitio de duelo y muchos familiares van seguido. Conviene entrar en silencio y no tomar fotos en las salas históricas.',
    },
  },
  {
    id: 'nyc-wall-street', name: 'Wall Street y la Bolsa de Nueva York', cityId: 'nyc', category: 'histórico',
    mapsQuery: 'New York Stock Exchange Wall Street', coords: { lat: 40.7069, lng: -74.0113 },
    briefing: {
      summary: 'El nombre viene de un muro de verdad: la muralla que los holandeses levantaron en 1653 para defender Nueva Amsterdam. La bolsa nació en 1792 cuando 24 corredores firmaron un acuerdo bajo un árbol de sicomoro en esa calle.',
      dontMiss: ['Federal Hall: ahi juro George Washington como primer presidente en 1789', 'La fachada de la NYSE'],
    },
  },
  {
    id: 'nyc-charging-bull', name: 'Charging Bull y Fearless Girl', cityId: 'nyc', category: 'monumento',
    mapsQuery: 'Charging Bull Bowling Green New York', coords: { lat: 40.7056, lng: -74.0134 },
    briefing: {
      summary: 'El toro lo hizo el escultor Arturo Di Modica en 1989, después del crack del 87, y lo dejó de noche frente a la bolsa sin permiso de nadie: fue arte ilegal que la ciudad terminó adoptando. La Fearless Girl se instalo en 2017 frente al toro, encargada por un fondo de inversion para promover mujeres en juntas directivas.',
      funFact: 'Di Modica demando por la niña: decia que ponerla al frente convertia su toro en el villano y cambiaba el sentido de su obra sin su permiso. La estatua se movio después frente a la bolsa.',
    },
  },
  {
    id: 'nyc-ferry', name: 'Staten Island Ferry', cityId: 'nyc', category: 'otro',
    address: '4 Whitehall St, New York, NY 10004', mapsQuery: 'Staten Island Ferry Whitehall Terminal',
    briefing: {
      summary: 'Es gratis y lleva serlo desde 1997. Mueve unas 70.000 personas al día entre Manhattan y Staten Island. El trayecto de 25 a 30 minutos pasa al lado de la Estatua de la Libertad y Ellis Island.',
      dontMiss: ['Pararse al lado derecho saliendo de Manhattan para ver la Estatua de la Libertad'],
    },
  },
  {
    id: 'nyc-liberty', name: 'Estatua de la Libertad', cityId: 'nyc', category: 'monumento',
    mapsQuery: 'Statue of Liberty National Monument', coords: { lat: 40.6892, lng: -74.0445 },
    briefing: {
      summary: 'Regalo de Francia a Estados Unidos, inaugurada el 28 de octubre de 1886. La escultura es de Frederic Auguste Bartholdi y la estructura interna de hierro la diseño Gustave Eiffel, tres años antes de su torre. Al lado esta Ellis Island, por donde entraron unos 12 millones de inmigrantes entre 1892 y 1954.',
      dontMiss: ['La tableta en su mano izquierda dice "4 de julio de 1776"', 'Las cadenas rotas a sus pies, que casi nadie ve'],
      funFact: 'El verde no es pintura: es la pátina del cobre oxidado. Cuando la inauguraron era del color de una moneda nueva y la gente se quejo cuando empezó a cambiar.',
    },
  },
  {
    id: 'nyc-washington-square', name: 'Washington Square Park', cityId: 'nyc', category: 'parque',
    mapsQuery: 'Washington Square Park New York', coords: { lat: 40.7308, lng: -73.9973 },
    briefing: {
      summary: 'El corazon de Greenwich Village y patio trasero de la Universidad de Nueva York. Antes de ser parque fue cementerio de indigentes: todavia hay unos 20.000 cuerpos enterrados debajo.',
      dontMiss: ['El arco de mármol, inspirado en el Arco del Triunfo', 'Los músicos y los jugadores de ajedrez'],
    },
  },
  {
    id: 'nyc-soho', name: 'Soho y Greene Street', cityId: 'nyc', category: 'barrio',
    mapsQuery: 'Greene Street Soho New York', coords: { lat: 40.7233, lng: -74.0030 },
    briefing: {
      summary: 'Soho es "South of Houston". Tiene la mayor concentracion de arquitectura de hierro fundido del mundo: fachadas prefabricadas de los años 1800 que permitian ventanales enormes. Eran fábricas textiles; en los 60 los artistas ocuparon los lofts ilegalmente y forzaron el cambió de zonificación.',
      dontMiss: ['Greene Street: la cuadra con más fachadas de hierro fundido que queda en pie'],
    },
  },

  // ======================= WASHINGTON =======================
  {
    id: 'dc-watergate', name: 'The Watergate', cityId: 'dc', category: 'histórico',
    mapsQuery: 'Watergate Complex Washington DC', coords: { lat: 38.8996, lng: -77.0554 },
    briefing: {
      summary: 'En junio de 1972 entraron a robar en la sede del Partido Democrata, que quedaba en este complejo. La investigación del robo llegó hasta la Casa Blanca y terminó con la renuncia del presidente Richard Nixon en 1974: la única renuncia presidencial de la historia de EE.UU.',
      funFact: 'Por ese escandalo, desde entonces en inglés se le pega el sufijo "-gate" a cualquier escandalo político del mundo.',
    },
  },
  {
    id: 'dc-georgetown-waterfront', name: 'Georgetown Waterfront y el Canal', cityId: 'dc', category: 'barrio',
    mapsQuery: 'Georgetown Waterfront Park Washington DC', coords: { lat: 38.9026, lng: -77.0637 },
    briefing: {
      summary: 'Georgetown es más antiguo que Washington: era puerto de tabaco desde 1751, cuarenta años antes de que existiera la capital. El canal C&O que corre por detras se construyó para mover carga hasta los Apalaches y quedó obsoleto por el ferrocarril.',
      dontMiss: ['Los Exorcist Steps, las escaleras empinadas de la pelicula El Exorcista', 'El camino de sirga del canal'],
    },
  },
  {
    id: 'dc-old-stone-house', name: 'Old Stone House', cityId: 'dc', category: 'histórico',
    mapsQuery: 'Old Stone House Georgetown Washington DC',
    briefing: {
      summary: 'Construida en 1765, es la estructura original más antigua que queda en pie en Washington D.C. Se salvo de la demolición por un rumor falso: se creia que George Washington había planeado la ciudad ahi adentro.',
    },
  },
  {
    id: 'dc-world-bank', name: 'Grupo Banco Mundial', cityId: 'dc', category: 'institución',
    address: '752 18th St NW, Washington, DC 20006', mapsQuery: 'World Bank Group Washington DC',
    briefing: {
      summary: 'Creado en 1944 en la conferencia de Bretton Woods, junto con el FMI, para reconstruir Europa después de la guerra. Hoy presta plata a paises en desarrollo para proyectos de infraestructura, educacion y salud. Colombia es cliente desde 1949.',
      dontMiss: ['Preguntar como se decide que un proyecto se financia y quien vigila esas decisiones'],
      questions: ['Como sostiene esta organización inversiones de largo plazo que ayuden a los paises a cubrir las necesidades de sus ciudadanos?', 'Quien elige al presidente del Banco Mundial y por que eso genera criticas?'],
    },
  },
  {
    id: 'dc-holocaust', name: 'United States Holocaust Memorial Museum', cityId: 'dc', category: 'museo',
    address: '100 Raoul Wallenberg Pl SW, Washington, DC 20024', mapsQuery: 'United States Holocaust Memorial Museum',
    briefing: {
      summary: 'Abierto en 1993. La exposición permanente se recorre de arriba hacia abajo, en tres pisos: el ascenso del nazismo, la "solucion final" y la liberacion. Al entrar a cada visitante le dan la tarjeta de identidad de una persona real que vivió el Holocausto.',
      timeline: [
        { year: '1933', text: 'Hitler llega al poder en Alemania. Empiezan las leyes que excluyen a los judíos de la vida pública.' },
        { year: '1938', text: 'Kristallnacht, la noche de los cristales rotos: del 9 al 10 de noviembre se queman sinagogas y se saquean negocios judíos en toda Alemania.' },
        { year: '1942', text: 'En la conferencia de Wannsee se organiza la "solucion final": el exterminio sistematico.' },
        { year: '1945', text: 'Los aliados liberan los campos. Seis millones de judíos fueron asesinados, más millones de gitanos, homosexuales, discapacitados y opositores.' },
      ],
      dontMiss: ['La Torre de los Rostros: fotos de un solo pueblo lituano donde el 90% de los judíos fue asesinado en dos días', 'El vagon de tren por el que se camina', 'El salón de los zapatos de las victimas'],
      questions: [
        'Las razas humanas tienen una base biologica o científica, o son interpretaciones sociales?',
        'Que es el antisemitismo y cual es su origen?',
        'Por que los judíos? Que fue la Kristallnacht (noche del 9 de noviembre de 1938)?',
        'Que condiciones, ideologias e ideas hicieron posible el Holocausto?',
        'Como se mantiene viva la memoria del Holocausto y por que es importante?',
      ],
    },
  },
  {
    id: 'dc-jefferson', name: 'Thomas Jefferson Memorial', cityId: 'dc', category: 'monumento',
    mapsQuery: 'Thomas Jefferson Memorial Washington DC', coords: { lat: 38.8814, lng: -77.0365 },
    briefing: {
      summary: 'Inaugurado en 1943, con forma de panteón romano porque Jefferson era arquitecto y admiraba ese estilo. Jefferson escribió la Declaración de Independencia y fue el tercer presidente.',
      dontMiss: ['La frase grabada: "Todos los hombres son creados iguales"'],
      funFact: 'Jefferson escribió esa frase siendo dueño de más de 600 esclavos. Esa contradicción es una de las discusiones históricas más fuertes de Estados Unidos y el memorial no la menciona.',
    },
  },
  {
    id: 'dc-wharf', name: 'The Wharf y el Municipal Fish Market', cityId: 'dc', category: 'barrio',
    mapsQuery: 'The Wharf Washington DC', coords: { lat: 38.8787, lng: -77.0230 },
    briefing: {
      summary: 'Frente al rio Potomac. El Municipal Fish Market que está ahi funciona desde 1805: es el mercado de pescado al aire libre en operación continua más antiguo de Estados Unidos, más viejo que el Fulton de Nueva York.',
      dontMiss: ['Ver como abren los cangrejos azules de Maryland en los puestos'],
    },
  },
  {
    id: 'dc-fdr', name: 'Franklin Delano Roosevelt Memorial', cityId: 'dc', category: 'monumento',
    mapsQuery: 'Franklin Delano Roosevelt Memorial Washington DC',
    briefing: {
      summary: 'Cuatro salas al aire libre, una por cada periodo presidencial de Roosevelt (1933-1945): la Gran Depresion, el New Deal, la Segunda Guerra Mundial y su muerte. Es el único presidente elegido cuatro veces.',
      dontMiss: ['La fila de hombres esperando el reparto de pan durante la Depresion', 'La estatua de Eleanor Roosevelt, la única primera dama con estatua en un memorial presidencial'],
      funFact: 'Roosevelt uso silla de ruedas por polio y lo escondio toda su vida pública. En 2001 añadieron una estatua que lo muestra sentado en su silla, después de que grupos de personas con discapacidad lo exigieran.',
    },
  },
  {
    id: 'dc-mlk', name: 'Martin Luther King Jr. Memorial', cityId: 'dc', category: 'monumento',
    mapsQuery: 'Martin Luther King Jr Memorial Washington DC', coords: { lat: 38.8861, lng: -77.0442 },
    briefing: {
      summary: 'Inaugurado en 2011. La figura de King sale de un bloque de piedra partido: la imagen viene de su propia frase, "de la montaña de la desesperacion, una piedra de esperanza". La montaña partida queda atras y la piedra adelante.',
      dontMiss: ['Caminar entre las dos mitades de la montaña para llegar a la estatua', 'El muro con 14 frases suyas'],
      funFact: 'Está ubicado en línea directa entre el Lincoln Memorial y el Jefferson Memorial, a propósito.',
    },
  },
  {
    id: 'dc-wwii', name: 'World War II Memorial', cityId: 'dc', category: 'monumento',
    mapsQuery: 'World War II Memorial Washington DC',
    briefing: {
      summary: 'Inaugurado apenas en 2004, casi 60 años después de la guerra. Tiene 56 columnas, una por cada estado y territorio de EE.UU. en ese momento, y un muro con 4.048 estrellas doradas: cada una representa 100 soldados estadounidenses muertos.',
      dontMiss: ['El Freedom Wall de estrellas doradas', 'El grafiti escondido "Kilroy was here", dos veces, en el memorial'],
    },
  },
  {
    id: 'dc-washington-monument', name: 'Washington Monument', cityId: 'dc', category: 'monumento',
    mapsQuery: 'Washington Monument', coords: { lat: 38.8895, lng: -77.0353 },
    briefing: {
      summary: 'Obelisco de 169 metros en honor a George Washington, terminado en 1884. Fue el edificio más alto del mundo hasta que la Torre Eiffel lo superó cinco años después.',
      funFact: 'A un tercio de la altura el mármol cambia de tono y se ve a simple vista: ahi se detuvo la obra en 1854 por falta de plata y por la Guerra Civil, y cuando la retomaron 25 años después la cantera original ya no existia.',
    },
  },
  {
    id: 'dc-georgetown-u', name: 'Georgetown University', cityId: 'dc', category: 'universidad',
    mapsQuery: 'Georgetown University Washington DC', coords: { lat: 38.9076, lng: -77.0723 },
    briefing: {
      summary: 'Fundada en 1789, el mismo año en que Washington fue elegido presidente. Es la universidad católica y jesuita más antigua del pais. Su Escuela de Servicio Exterior es la que forma diplomáticos: Bill Clinton estudio ahi.',
      dontMiss: ['Healy Hall, el edificio con la torre', 'Las escaleras del Exorcista, al borde del campus'],
      funFact: 'En 1838 la universidad vendió 272 personas esclavizadas para pagar sus deudas. En 2016 reconoció el hecho públicamente y hoy da preferencia de admisión a sus descendientes.',
    },
  },
  {
    id: 'dc-arlington', name: 'Arlington National Cemetery', cityId: 'dc', category: 'histórico',
    address: '1 Memorial Ave, Fort Myer, VA 22211', mapsQuery: 'Arlington National Cemetery', coords: { lat: 38.8783, lng: -77.0687 },
    briefing: {
      summary: 'Son 250 hectareas con más de 400.000 tumbas. El terreno era la finca de Robert E. Lee, el general del ejercito confederado: cuando se fue a pelear del lado del sur, la Union le confiscó la tierra y empezó a enterrar muertos en su jardín a propósito, para que nunca pudiera volver.',
      timeline: [
        { year: '1864', text: 'Se hacen los primeros entierros en el jardín de la casa de Lee.' },
        { year: '1921', text: 'Se inaugura la Tumba del Soldado Desconocido con un soldado sin identificar de la Primera Guerra Mundial.' },
        { year: '1963', text: 'Entierran a John F. Kennedy. Su viuda Jacqueline pide la llama eterna, inspirada en el Arco del Triunfo de Paris.' },
      ],
      dontMiss: ['El cambió de guardia en la Tumba del Soldado Desconocido: se hace cada hora, todos los días del año, sin excepcion por clima', 'La llama eterna en la tumba de JFK', 'La vista de Washington desde Arlington House'],
      questions: [
        'Por que es importante un cementerio especial para quienes se sacrificaron por la nacion?',
        'Que significa la tumba al soldado desconocido?',
        'Quien fue JFK?',
        'Seria apropiado pensar en un cementerio así para nuestros soldados y policias en Colombia? Comparar el contexto de este memorial con el contexto histórico y político de las fuerzas armadas colombianas.',
      ],
      funFact: 'El centinela de la Tumba del Soldado Desconocido da 21 pasos, espera 21 segundos y vuelve: el 21 es el máximo honor militar, el saludo de 21 cañonazos.',
    },
  },
  {
    id: 'dc-lincoln', name: 'Lincoln Memorial y Reflecting Pool', cityId: 'dc', category: 'monumento',
    address: '2 Lincoln Memorial Cir NW, Washington, DC', mapsQuery: 'Lincoln Memorial Washington DC', coords: { lat: 38.8893, lng: -77.0502 },
    briefing: {
      summary: 'Inaugurado en 1922 con forma de templo griego. Adentro esta Lincoln sentado, escultura de Daniel Chester French de casi 6 metros. En estos escalones Martin Luther King Jr. dijo "I Have a Dream" el 28 de agosto de 1963, frente a 250.000 personas.',
      timeline: [
        { year: '1863', text: 'Lincoln firma la Proclamación de Emancipación y da el discurso de Gettysburg.' },
        { year: '1865', text: 'Lo asesinan en el Ford’s Theatre, cinco días después del fin de la Guerra Civil.' },
        { year: '1939', text: 'La cantante negra Marian Anderson da un concierto en estos escalones después de que le prohibieran cantar en una sala de la ciudad por su raza.' },
        { year: '1963', text: 'Marcha sobre Washington y el discurso "I Have a Dream".' },
      ],
      dontMiss: ['Las 36 columnas: una por cada estado que existia cuando murió Lincoln', 'El discurso de Gettysburg grabado en el muro sur', 'La inscripcion en el escalon 18 que marca donde estaba King en 1963'],
      questions: ['Se cumplio el sueño de Martin Luther King? Que hace difícil cumplirlo?'],
    },
  },
  {
    id: 'dc-korean', name: 'Korean War Veterans Memorial', cityId: 'dc', category: 'monumento',
    mapsQuery: 'Korean War Veterans Memorial Washington DC',
    briefing: {
      summary: '19 estatuas de acero de soldados en patrulla, cruzando un campo. Con su reflejo en el muro de granito pulido suman 38: por el paralelo 38, la línea que sigue dividiendo las dos Coreas.',
      dontMiss: ['La frase grabada: "Freedom is not free"'],
      funFact: 'Colombia fue el único pais de America Latina que mando tropas a esa guerra: el Batallon Colombia.',
    },
  },
  {
    id: 'dc-spy', name: 'International Spy Museum', cityId: 'dc', category: 'museo',
    mapsQuery: 'International Spy Museum Washington DC',
    briefing: {
      summary: 'Museo privado sobre la historia del espionaje, con la colección de artefactos de inteligencia más grande abierta al público: camaras escondidas, aparatos de la KGB y de la CIA, y material de la Guerra Fria.',
    },
  },
  {
    id: 'dc-embajada', name: 'Embajada de Colombia en Washington', cityId: 'dc', category: 'institución',
    address: '1724 Massachusetts Ave NW, Washington, DC 20036', mapsQuery: 'Embassy of Colombia Washington DC',
    briefing: {
      summary: 'Queda sobre Massachusetts Avenue, la calle que llaman Embassy Row porque concentra más de 175 embajadas. La relacion diplomatica entre Colombia y Estados Unidos es de 1822: Colombia fue el primer pais de Suramerica que Estados Unidos reconoció como nacion independiente.',
      dontMiss: ['Preguntar que carreras trabajan dentro de una embajada, no solo relaciones internacionales'],
      questions: ['Cual es la importancia política y económica de una embajada en otro pais?', 'Que hay que estudiar para poder trabajar en una embajada?'],
    },
  },
  {
    id: 'dc-gwu', name: 'George Washington University', cityId: 'dc', category: 'universidad',
    mapsQuery: 'George Washington University Washington DC',
    briefing: {
      summary: 'Fundada en 1821 siguiendo un deseo que George Washington dejó en su testamento: queria una universidad nacional en la capital. Su campus está en Foggy Bottom, a cuadras de la Casa Blanca, el Banco Mundial y el Departamento de Estado.',
      dontMiss: ['Preguntar por las prácticas: muchos estudiantes trabajan medio tiempo en instituciones del gobierno'],
    },
  },
  {
    id: 'dc-smithsonian', name: 'Museos Smithsonian', cityId: 'dc', category: 'museo',
    address: '10th St. & Constitution Ave. NW, Washington, DC 20560', mapsQuery: 'Smithsonian National Museum of Natural History',
    briefing: {
      summary: 'Son 21 museos y todos son gratis. Existen por una herencia rara: James Smithson, un científico inglés que nunca piso Estados Unidos, le dejó toda su fortuna al pais en 1829 para crear una institución "para el aumento y la difusion del conocimiento".',
      dontMiss: ['Natural History: el diamante Hope y el elefante del vestíbulo', 'Air and Space: el Flyer de los hermanos Wright y el modulo del Apollo 11', 'American History: la bandera original que inspiro el himno'],
      questions: [
        'Por que cree que los museos son importantes?',
        'Quien fue James Smithson?',
        'Que profesiones trabajan dentro de un museo? Que carreras convienen más?',
        'Cual es la diferencia entre arte y ciencia?',
        'Que es y que hace un curador en un museo?',
      ],
      funFact: 'Smithson era hijo no reconocido de un duque inglés. Hay quien dice que dejó su plata a Estados Unidos como venganza contra una sociedad británica que nunca lo acepto.',
    },
  },
  {
    id: 'dc-capitol', name: 'United States Capitol', cityId: 'dc', category: 'histórico',
    mapsQuery: 'United States Capitol', coords: { lat: 38.8899, lng: -77.0091 },
    briefing: {
      summary: 'Sede del Congreso: Camara de Representantes al sur, Senado al norte. George Washington puso la primera piedra en 1793. Los británicos lo incendiaron en 1814 y la cúpula de hierro actual se terminó en 1866, en plena Guerra Civil.',
      dontMiss: ['La Rotonda y el fresco del techo', 'El National Statuary Hall: cada estado manda dos estatuas'],
      funFact: 'Lincoln ordenó seguir construyendo la cúpula durante la guerra, gastando hierro que hacia falta. Dijo que si la gente veia la cúpula avanzando, entenderia que la Union iba a seguir en pie.',
    },
  },
  {
    id: 'dc-library-congress', name: 'Library of Congress', cityId: 'dc', category: 'histórico',
    mapsQuery: 'Library of Congress Washington DC',
    briefing: {
      summary: 'La biblioteca más grande del mundo: más de 170 millones de piezas. Los británicos quemaron la original en 1814 y Thomas Jefferson vendió su biblioteca personal de 6.487 libros para reponerla.',
      dontMiss: ['El Main Reading Room del edificio Jefferson', 'La Biblia de Gutenberg'],
    },
  },
  {
    id: 'dc-supreme-court', name: 'Corte Suprema de Estados Unidos', cityId: 'dc', category: 'institución',
    mapsQuery: 'Supreme Court of the United States',
    briefing: {
      summary: 'Nueve jueces nombrados de por vida. Durante 146 años no tuvo edificio propio: sesionaba en un salón prestado del Capitolio hasta que se inauguro este en 1935.',
      dontMiss: ['La frase en la fachada: "Equal Justice Under Law"'],
    },
  },
  {
    id: 'dc-fords-theatre', name: "Ford's Theatre", cityId: 'dc', category: 'histórico',
    mapsQuery: "Ford's Theatre Washington DC",
    briefing: {
      summary: 'El 14 de abril de 1865, el actor John Wilkes Booth entró al palco presidencial y le disparó a Abraham Lincoln durante una funcion. Lincoln murió al día siguiente en la casa de enfrente, la Petersen House. Fue el primer magnicidio presidencial de Estados Unidos.',
      dontMiss: ['El palco, que se mantiene decorado igual que esa noche'],
    },
  },
  {
    id: 'dc-francis-scott-key', name: 'Francis Scott Key Memorial', cityId: 'dc', category: 'monumento',
    mapsQuery: 'Francis Scott Key Memorial Park Georgetown',
    briefing: {
      summary: 'Francis Scott Key escribió en 1814 el poema que se convirtió en el himno de Estados Unidos, después de ver que la bandera seguia izada tras una noche entera de bombardeo británico sobre Fort McHenry. Vivió en Georgetown.',
      funFact: 'La melodia del himno no es original: viene de una cancion de un club social londinense sobre beber vino.',
    },
  },
]
