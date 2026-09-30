import type { Task } from './types'

/**
 * Tareas del fieldwork BNYW26 que le tocan a Juan Diego Alomía Franco.
 * Tomadas de la tabla "Fieldwork_BNYW26" (las X de su fila) y del resumen
 * "Fieldwork BNY 2026: mis tres temas".
 */

export const me = {
  name: 'Juan Diego Alomía Franco',
  school: 'Colegio Colombo Británico, Cali',
  subjects: ['Biology / ESS', 'Economics', 'Business Management'],
}

export const tasks: Task[] = [
  // ---------------------------------------------------------------- BOSTON
  {
    id: 't-attucks',
    cityId: 'boston',
    date: '2026-10-01',
    eventIds: ['d2-06', 'd2-17'],
    title: 'Crispus Attucks',
    topic: 'Crispus Attucks, 5 de marzo de 1770',
    mode: 'exponer',
    partner: 'Isabella Ortega',
    where: 'Granary Burying Ground (9:45 am) o el círculo de adoquines frente al Old State House, en la caminata del Freedom Trail (10:00 pm)',
    intro:
      'Attucks fue el primero en caer en la Masacre de Boston, el 5 de marzo de 1770, y el único de los cinco muertos cuyo nombre quedó en la memoria popular. Era un hombre negro e indígena que había escapado de la esclavitud veinte años antes.',
    heads:
      'Tu columna es Crispus Attucks, no la Masacre de Boston. La Masacre es la columna de al lado y le tocó a Nicolás Osorio y a Juan Martín Gómez. Es el mismo suceso visto desde otro ángulo: el tuyo es la persona.',
    sections: [
      {
        title: 'Quién era',
        body: [
          'Nació hacia 1723 cerca de Framingham, Massachusetts. Su padre habría sido Prince Yonger, un africano esclavizado, y su madre Nancy Attucks, indígena de Natick. Algunas fuentes la describen como wampanoag. Ninguna de las dos cosas está probada del todo.',
          'Lo único realmente documentado de su vida es un aviso de periódico. El 2 de octubre de 1750, William Brown publicó en el Boston Gazette la búsqueda de un esclavo fugado llamado "Crispas", de 27 años y 6 pies 2 pulgadas de alto, y ofreció diez libras de recompensa. Nunca lo recuperaron.',
          'Durante los veinte años siguientes trabajó como marinero en barcos balleneros y como cordelero cuando estaba en tierra. Acababa de volver de las Bahamas cuando lo mataron.',
        ],
      },
      {
        title: 'Por qué Boston estaba a punto de estallar',
        body: [
          'Desde 1768 había tropas británicas acuarteladas en Boston para hacer cumplir los impuestos Townshend. El problema no era solo político: los soldados ganaban poco y buscaban trabajos ocasionales en el puerto, que era exactamente de lo que vivían hombres como Attucks. La competencia por el jornal fue una de las mechas.',
          'El 2 de marzo de 1770 hubo una pelea en la cordería de John Gray entre soldados y trabajadores. Empezó cuando un cordelero le ofreció a un soldado, en tono de burla, limpiar su letrina. El roce siguió durante varios días.',
        ],
      },
      {
        title: 'La noche del 5 de marzo',
        body: [
          'Todo arrancó con una cuenta impaga. Edward Garrick, aprendiz de peluquero de unos trece años, le reclamó en la calle al capitán teniente John Goldfinch. El centinela Hugh White intervino y le pegó al muchacho en la cabeza con el mosquete. Se juntó gente, sonaron las campanas y llegó más gente todavía.',
          'El capitán Thomas Preston apareció con refuerzos y los formó frente a la aduana. Había más de cincuenta bostonianos gritando y tirando objetos, con Attucks adelante. A Hugh Montgomery lo derribó algo que le lanzaron, se levantó y disparó sin que nadie diera la orden. Los demás dispararon detrás de él. Once personas fueron alcanzadas.',
          'Attucks murió en el sitio con dos balazos en el pecho, a los 47 años más o menos. Samuel Gray y James Caldwell también murieron en el acto; Samuel Maverick, de 17 años, a la mañana siguiente, y Patrick Carr el 14 de marzo.',
          'Su cuerpo fue velado en Faneuil Hall. El funeral del 8 de marzo juntó entre diez y doce mil personas en una ciudad de unos quince mil. A los cuatro primeros los enterraron juntos en el Granary Burying Ground y a Carr lo sumaron el 17 de marzo.',
        ],
      },
      {
        title: 'El juicio, y la parte incómoda',
        body: [
          'John Adams, futuro segundo presidente de Estados Unidos, defendió a los soldados. Preston fue absuelto en octubre de 1770 porque no se probó que diera la orden. En el juicio de los soldados (27 nov – 13 dic) seis fueron absueltos; Montgomery y Matthew Kilroy fueron condenados por homicidio involuntario y, en lugar de la horca, los marcaron con un hierro caliente en el pulgar.',
          'Para ganar, Adams describió a la multitud como "a motley rabble of saucy boys, negroes and molattoes, Irish teagues and outlandish jack tarrs", y a Attucks como "a stout mulatto fellow, whose very looks was enough to terrify any person". La defensa usó su raza como prueba de que los soldados tenían motivos para sentir miedo.',
          'El grabado de Paul Revere, "The Bloody Massacre in King Street", hizo lo contrario: lo pintó blanco. Era propaganda, y funcionó durante décadas.',
        ],
      },
      {
        title: 'Cómo lo convirtieron en símbolo',
        body: [
          'En 1851, William Cooper Nell y otros abolicionistas negros pidieron a la legislatura de Massachusetts un monumento para Attucks. Se lo negaron. En 1858 instituyeron el Crispus Attucks Day cada 5 de marzo y lo usaron como argumento: si un hombre negro fue el primero en morir por la independencia, la ciudadanía no se le podía negar a los demás.',
          'El monumento a la Masacre se levantó en el Boston Common en 1888, 37 años después de la primera petición. Lo esculpió Adolph Robert Kraus y lleva una placa con las cinco víctimas.',
        ],
      },
      {
        title: 'Lo que vas a ver',
        bullets: [
          'El círculo de adoquines en la isla de tráfico frente al Old State House, sobre el Freedom Trail: es el lugar exacto de la masacre. Si te dejan escoger dónde hablar, es el mejor sitio.',
          'La tumba común en el Granary Burying Ground, en Tremont Street (visita de las 9:45 am).',
          'El monumento en el Boston Common.',
        ],
      },
    ],
    script: [
      'Crispus Attucks nació hacia 1723 cerca de Framingham, hijo de un africano esclavizado y de una mujer indígena de Natick.',
      'Escapó de la esclavitud a los 27 años. Sabemos la fecha porque su dueño, William Brown, publicó un aviso en el Boston Gazette el 2 de octubre de 1750 ofreciendo diez libras por él.',
      'Pasó veinte años como marinero ballenero y cordelero. Volvía de las Bahamas la semana en que lo mataron.',
      'Boston tenía tropas británicas desde 1768 y los soldados competían por los mismos trabajos del puerto. La tensión era económica, no solo política.',
      'La noche del 5 de marzo de 1770 estaba al frente de una multitud de más de cincuenta personas frente a la aduana. El soldado Hugh Montgomery fue derribado, se levantó y disparó sin orden.',
      'Attucks recibió dos balazos en el pecho y fue el primero en morir. Tenía unos 47 años. En total murieron cinco personas.',
      'Su funeral juntó entre diez y doce mil personas en una ciudad de quince mil. Está enterrado en el Granary Burying Ground, a pocas cuadras de acá.',
      'John Adams defendió a los soldados y, para ganar, describió a Attucks como alguien cuyo aspecto bastaba para aterrorizar a cualquiera. Solo dos soldados fueron condenados, y por homicidio involuntario.',
      'Paul Revere lo dibujó blanco en su grabado. La primera víctima de la Revolución desapareció de su propia imagen.',
      'Los abolicionistas negros lo rescataron: Crispus Attucks Day desde 1858, y monumento en el Boston Common en 1888.',
    ],
    closing:
      'Un hombre que había huido de la esclavitud fue el primero en morir por la libertad de una colonia que seguía siendo esclavista. Esa contradicción es la historia.',
    caveats: [
      'La fecha del monumento aparece como 1888 en unas fuentes y como noviembre de 1889 en otras. Si te preguntan, di 1888 y aclara que las fuentes difieren.',
      'Los orígenes de sus padres no están probados del todo: dilo con "habría sido".',
    ],
    sources: [
      'Crispus Attucks, Britannica',
      '8 Things We Know About Crispus Attucks, History.com',
      'Boston Massacre, Wikipedia',
      'Crispus Attucks, World History Encyclopedia',
      'Crispus Attucks: First Martyr for Liberty, Friends of the Public Garden',
      'Boston Massacre Monument, Wikipedia',
    ],
  },

  // ---------------------------------------------------------------- NEW YORK
  {
    id: 't-911',
    cityId: 'nyc',
    date: '2026-10-04',
    eventIds: ['d5-05', 'd5-06'],
    title: 'El 11 de septiembre',
    topic: '¿Qué pasó el 11 de septiembre en Estados Unidos?',
    mode: 'exponer',
    partner: 'Juan Martín Gómez',
    where: '9/11 Memorial & Museum (10:00 am) o la reflexión en Ground Zero (12:00 m)',
    intro:
      'Diecinueve secuestradores de Al Qaeda tomaron cuatro aviones comerciales esa mañana y mataron a 2.977 personas en menos de dos horas. Es el atentado más letal de la historia de Estados Unidos y el que reordenó su política exterior durante veinte años.',
    heads:
      'La historia de Al Qaeda le tocó a Oriana Favarony y a Juan Esteban Lotero, y el Oculus a Emilia Aguirre y a Gregorio Vélez. Tu tema es el día y lo que vino después: no gastes tu turno contando quién era Bin Laden.',
    sections: [
      {
        title: 'Lo que ya había pasado',
        body: [
          'El 26 de febrero de 1993 estalló un coche bomba en el parqueadero de la Torre Norte y murieron seis personas. Después vinieron las embajadas de EE.UU. en Kenia y Tanzania (1998, más de 200 muertos) y el destructor USS Cole en Yemen (octubre de 2000, 17 marineros).',
          'El plan del 11-S lo diseñó Khalid Sheikh Mohammed. De los 19 secuestradores, 15 eran saudíes, 2 emiratíes, 1 egipcio y 1 libanés. Varios pilotos se conocieron en Hamburgo y aprendieron a volar en Florida.',
        ],
      },
      {
        title: 'Cronología del día (hora de la costa este)',
        table: {
          head: ['Hora', 'Qué pasó'],
          rows: [
            ['7:59', 'Despega American 11 desde Boston'],
            ['8:14', 'Despega United 175 desde Boston; se pierde contacto con American 11'],
            ['8:20', 'Despega American 77 desde Dulles, Washington'],
            ['8:42', 'Despega United 93 desde Newark; secuestran United 175'],
            ['8:46', 'American 11 impacta la Torre Norte (pisos 93–99)'],
            ['9:03', 'United 175 impacta la Torre Sur (pisos 77–85)'],
            ['9:37', 'American 77 impacta el Pentágono'],
            ['9:42', 'La FAA ordena aterrizar todos los aviones del país'],
            ['9:59', 'Colapsa la Torre Sur, 56 min después del impacto'],
            ['10:03', 'United 93 cae cerca de Shanksville, Pensilvania'],
            ['10:28', 'Colapsa la Torre Norte, 102 min después del impacto'],
            ['17:20', 'Colapsa el edificio 7 del WTC'],
            ['20:30', 'Bush habla al país desde la Casa Blanca'],
          ],
        },
      },
      {
        title: 'Las víctimas',
        body: [
          'Murieron 2.977 personas, sin contar a los 19 secuestradores: 2.753 en el World Trade Center y alrededores (incluidos 147 pasajeros y tripulantes de los dos aviones), 184 en el Pentágono (125 en el edificio y 59 en el avión) y las 40 personas del vuelo 93.',
          'Entre ellos, 343 bomberos del FDNY, 23 policías de Nueva York y 37 agentes de la Autoridad Portuaria. Había ciudadanos de más de noventa países.',
          'Se estima que más de cinco mil personas han muerto desde entonces por enfermedades ligadas al polvo y los tóxicos de la zona cero, sobre todo rescatistas.',
        ],
      },
      {
        title: 'Dos cosas que casi nadie cuenta',
        body: [
          'La evacuación por agua: con túneles y puentes cerrados, la Guardia Costera pidió ayuda a cualquier embarcación. Ferris, remolcadores, yates y barcos turísticos sacaron a unas 500.000 personas del bajo Manhattan en nueve horas. Es la mayor evacuación marítima de la historia, más grande que Dunkerque.',
          'El vuelo 93: los pasajeros supieron por teléfono lo que pasaba en Nueva York y asaltaron la cabina. Cayó a las 10:03. La Comisión del 11-S concluyó que iba probablemente al Capitolio o a la Casa Blanca. Fue el único avión que no llegó.',
        ],
      },
      {
        title: 'Lo que cambió después',
        table: {
          head: ['Fecha', 'Qué pasó'],
          rows: [
            ['7 oct 2001', 'EE.UU. invade Afganistán'],
            ['26 oct 2001', 'USA PATRIOT Act: más vigilancia interna'],
            ['Nov 2001', 'Se crea la TSA'],
            ['Ene 2002', 'Primeros detenidos en Guantánamo'],
            ['2002–2003', 'Departamento de Seguridad Nacional'],
            ['Mar 2003', 'Invasión de Irak (armas que nunca aparecieron)'],
            ['22 jul 2004', 'Informe de la Comisión del 11-S'],
            ['2 may 2011', 'Matan a Bin Laden en Abbottabad, Pakistán'],
            ['Ago 2021', 'EE.UU. sale de Afganistán tras veinte años'],
          ],
        },
        body: [
          'Para sonar IB y no solo recitar fechas, nombra la tensión: el país ganó seguridad y perdió privacidad. La vigilancia masiva, Guantánamo y el aumento de agresiones contra musulmanes y sijs son parte del mismo paquete que el detector de metales del aeropuerto.',
        ],
      },
      {
        title: 'El sitio que vas a pisar',
        bullets: [
          'El memorial se llama Reflecting Absence, de Michael Arad y Peter Walker. Abrió el 11 de septiembre de 2011.',
          'Las dos piscinas están sobre las huellas exactas de las torres. El agua cae nueve metros y luego seis más a un vacío central: son las cascadas artificiales más grandes de Norteamérica.',
          'Hay 2.983 nombres (los de 2001 y los seis de 1993), agrupados por "meaningful adjacencies": compañeros, amigos, tripulaciones y unidades de bomberos quedaron juntos. Una rosa blanca en un nombre marca su cumpleaños.',
          'Entre unos 400 robles está el Survivor Tree, un peral que sacaron quemado de los escombros y replantaron en 2010.',
          'One World Trade Center (2014) mide 1.776 pies, el año de la independencia.',
        ],
      },
    ],
    script: [
      'El 11 de septiembre de 2001, diecinueve secuestradores de Al Qaeda tomaron cuatro aviones comerciales. Quince eran saudíes. El plan lo diseñó Khalid Sheikh Mohammed.',
      'A las 8:46 el primer avión impactó la Torre Norte. A las 9:03, el segundo impactó la Torre Sur. Ahí el país entendió que no era un accidente.',
      'A las 9:37 el tercer avión golpeó el Pentágono. El cuarto cayó en Pensilvania a las 10:03, después de que los pasajeros asaltaran la cabina. Iba probablemente al Capitolio.',
      'La Torre Sur colapsó a las 9:59, 56 minutos después del impacto. La Torre Norte a las 10:28, 102 minutos después. Estamos parados sobre sus huellas.',
      'Murieron 2.977 personas de más de noventa países. En el World Trade Center, 2.753. En el Pentágono, 184. En el vuelo 93, 40.',
      'Entre ellas, 343 bomberos. Subían mientras todo el mundo bajaba.',
      'Ese mismo día, unas 500.000 personas salieron del bajo Manhattan en barcos particulares en nueve horas. Fue la mayor evacuación marítima de la historia.',
      'Después vinieron Afganistán, el PATRIOT Act, la TSA, Guantánamo e Irak. Bin Laden fue asesinado en 2011 y Estados Unidos salió de Afganistán en 2021, veinte años después.',
      'El memorial se llama Reflecting Absence. Los 2.983 nombres no están en orden alfabético sino agrupados por quienes estaban juntos ese día.',
      'El árbol distinto entre los robles es el Survivor Tree, un peral que sacaron quemado de los escombros y replantaron en 2010.',
    ],
    closing: 'La torre nueva mide 1.776 pies, el año de la independencia. Reconstruir el sitio también fue una manera de responder.',
    caveats: [
      'La cifra de muertes posteriores por enfermedades de la zona cero es una estimación, no un conteo oficial: dila con "se estima".',
    ],
    sources: [
      'Timeline of the September 11 Attacks, Britannica',
      'September 11 attacks, Britannica',
      'September 11 attacks, Wikipedia',
      'About the Memorial, National September 11 Memorial & Museum',
      'A Flotilla of Ferries, Yachts and Tugboats Evacuated 500,000 People, Smithsonian Magazine',
    ],
  },

  // ---------------------------------------------------------------- WASHINGTON
  {
    id: 't-world-bank',
    cityId: 'dc',
    date: '2026-10-06',
    eventIds: ['d7-04'],
    title: 'Preguntas para el Banco Mundial',
    topic: 'Preparar dos preguntas para el Banco Mundial',
    mode: 'preguntar',
    partner: 'Samuel Velásquez',
    where: 'World Bank Group, 1818 H Street NW, Washington (10:00 am – 12:00 m)',
    intro:
      'Aquí no expones: preguntas. Una buena pregunta se nota porque trae un dato adentro. Abajo está el contexto en español y las preguntas listas en inglés. Te asignaron esta visita por tus materias (Economics y Business Management).',
    heads:
      'La sede del Banco está en Washington (1818 H Street NW), no en New York. Si la pregunta menciona "la oficina", di "here in Washington".',
    sections: [
      {
        title: 'Qué es el Banco Mundial',
        body: [
          'Nació en Bretton Woods en julio de 1944, junto con el FMI. Su primer préstamo fue a Francia en 1947, para la reconstrucción. No es un banco comercial ni central: es un banco de desarrollo que pertenece a sus 189 países miembros.',
          'El FMI apaga crisis de balanza de pagos de corto plazo; el Banco Mundial financia proyectos de largo plazo. Por costumbre no escrita desde 1944, el presidente del Banco siempre ha sido estadounidense y el del FMI europeo.',
          'En 2023 cambió su misión: acabar con la pobreza extrema e impulsar la prosperidad compartida "en un planeta habitable".',
        ],
      },
      {
        title: 'Las cinco instituciones',
        table: {
          head: ['Sigla', 'Qué hace'],
          rows: [
            ['BIRF (IBRD)', 'Presta a países de ingreso medio. Es la ventanilla de Colombia'],
            ['AIF (IDA)', 'Créditos casi sin interés y donaciones a los países más pobres'],
            ['IFC', 'Presta e invierte en el sector privado'],
            ['MIGA', 'Garantías contra riesgo político'],
            ['CIADI (ICSID)', 'Arbitra disputas entre inversionistas y Estados'],
          ],
        },
      },
      {
        title: 'Pobreza en el mundo: las cifras para tu pregunta',
        bullets: [
          'En junio de 2025 el Banco subió la línea de pobreza extrema de US$2,15 a US$3,00 al día (PPA 2021).',
          'Con la nueva línea hay unos 800 millones de personas en pobreza extrema: más o menos 1 de cada 10 personas en el mundo. La actualización sumó 125 millones al conteo anterior.',
          'El Banco mismo reconoce que la reducción de la pobreza casi se detuvo desde 2020.',
          'En el año fiscal 2025 la AIF (IDA) comprometió US$33.800 millones, de los cuales 8.200 millones fueron donaciones.',
          'El Banco sí da plata directa al presupuesto de los países: se llama Development Policy Financing (apoyo presupuestal atado a reformas).',
          'Cerca del 45% del personal ya trabaja fuera de Washington, en oficinas de país (hay una en Bogotá).',
        ],
      },
      {
        title: 'La apuesta de Ajay Banga',
        body: [
          'Preside el Banco desde junio de 2023. Viene de ser CEO de Mastercard, no del mundo académico, y eso se nota en su agenda.',
          'Su bandera es el empleo: en la próxima década 1.200 millones de jóvenes llegarán a edad de trabajar en países en desarrollo y solo se crearían unos 420 millones de empleos. La brecha es de unos 780 millones.',
          'Tres pilares: infraestructura y servicios básicos, mejor ambiente de negocios, y movilizar capital privado vía IFC y MIGA.',
          'Hitos: reposición récord de la AIF por US$100.000 millones (diciembre 2024) y fin del veto a la energía nuclear después de unas seis décadas (11 de junio de 2025).',
        ],
      },
      {
        title: 'El Banco Mundial en Colombia',
        table: {
          head: ['Dato', 'Cifra'],
          rows: [
            ['Crecimiento del PIB 2025', '2,6% (1,5% en 2024)'],
            ['Proyección', '2,2% en 2026 y 2,4% en 2027'],
            ['Pobreza 2025', '35,5%'],
            ['Cartera activa', '9 proyectos del BIRF por US$1.525 millones'],
            ['Informalidad laboral', 'Más del 54% (DANE)'],
          ],
        },
        body: [
          'Colombia es cliente del BIRF (ingreso medio alto). El marco 2024–2027 tiene tres ejes: desarrollo territorial, transformación económica y resiliencia climática. Proyectos: catastro multipropósito, salud, vivienda, agua y el metro de Bogotá. Si nombras el metro de Bogotá, les muestras que miraste la cartera real.',
        ],
      },
      {
        title: 'Las críticas que le hacen',
        bullets: [
          'El Bretton Woods Project (julio 2025) dice que la estrategia de capital privado es la vieja idea de "pasar de miles de millones a billones" con otro nombre, y cita al propio economista jefe, Indermit Gill, llamándola "una fantasía".',
          'OCDE: entre 2018 y 2020, el 87% del financiamiento privado movilizado fue a países de ingreso medio, solo el 12% a los de ingreso bajo y el 7% a infraestructura social.',
          'Desde 2022 los acreedores privados le han cobrado a los países en desarrollo US$141.000 millones más de lo que les prestaron.',
          'Las garantías protegen al inversionista pero dejan deuda escondida (pasivos contingentes) en el gobierno anfitrión.',
        ],
      },
    ],
    questions: [
      {
        label: 'Pregunta 1 · Pobreza y eficiencia',
        en: "Good morning. My name is Juan Diego Alomía, from Colegio Colombo Británico in Cali, Colombia, and I study Economics and Business Management in the IB Diploma. According to the Bank's own June 2025 update, around 800 million people, roughly one in ten people in the world, still live on less than three dollars a day, and progress against extreme poverty has almost stalled since 2020. Last year IDA alone committed about 34 billion dollars. How can you assure us that the Bank's work is enough, and that it is really working? And wouldn't it be more efficient to send more of that money directly to national governments, instead of countries having to come to an office here in Washington to negotiate projects?",
        es: 'Con 800 millones de personas en pobreza extrema y el progreso estancado, ¿cómo nos aseguran que su trabajo es suficiente y bueno? ¿No sería más eficiente darle la plata directamente a los países en vez de que vengan a negociar a una oficina en Washington?',
        why: 'Trae dos cifras del propio Banco y cierra con una pregunta concreta de eficiencia. Es exigente pero respetuosa.',
        followUp: 'What share of your lending already goes directly to national budgets, and how do you make sure it reaches the poorest people?',
      },
      {
        label: 'Pregunta 2 · Empleo e informalidad',
        en: "The Bank estimates that over the next decade 1.2 billion young people in developing countries will reach working age, but only about 420 million jobs will be created. In Colombia, more than 54 percent of workers are informal, according to DANE. Which part of the Bank's jobs strategy works in a country where the main problem is not the lack of work, but the quality of the jobs that already exist?",
        es: '¿Qué parte de la estrategia de empleo del Banco sirve en un país como Colombia, donde el problema no es tanto que falte trabajo sino la calidad del que ya existe?',
        why: 'Es tu terreno (Economics) y usa el número que Banga repite en todos sus discursos.',
        followUp: 'Could you give us a concrete example in Latin America?',
      },
      {
        label: 'Pregunta 3 · Capital privado',
        en: 'The Bank is betting heavily on mobilizing private capital to finance development. But OECD data show that between 2018 and 2020, 87 percent of that private finance went to middle-income countries and only 12 percent to low-income countries. How do you prevent this strategy from concentrating the money in countries that already have access to markets?',
        es: 'Si el 87% del capital privado movilizado fue a países de ingreso medio y solo el 12% a los pobres, ¿cómo evitan que la estrategia concentre la plata donde ya hay acceso a mercados?',
        why: 'Tiene filo pero no es grosera: es exactamente el debate que tienen adentro.',
      },
    ],
    backups: [
      {
        label: 'Respaldo · Energía nuclear',
        en: 'In June 2025 the Bank lifted a ban of about six decades on financing nuclear energy. For a country like Colombia, where electricity depends heavily on hydropower and El Niño puts supply at risk, does this open a real door, or is it designed for other regions?',
        es: '¿El fin del veto nuclear le sirve de verdad a Colombia, que depende de hidroeléctricas y sufre con El Niño?',
      },
      {
        label: 'Respaldo · Brecha entre regiones',
        en: 'Your portfolio in Colombia is about 1.5 billion dollars, including the Bogotá metro, and the first pillar of your 2024–2027 partnership is territorial development. With poverty at 35.5 percent, how do you measure whether a project really closes the gap between regions, and not just improves the national average?',
        es: '¿Cómo miden si un proyecto cierra la brecha entre regiones y no solo mejora el promedio nacional?',
      },
      {
        label: 'Respaldo · Quién preside el Banco',
        en: 'Since 1944, the president of the World Bank has always been an American, by an unwritten custom. Does that cost the Bank legitimacy with the countries that are its clients?',
        es: '¿Que el presidente siempre sea estadounidense le quita legitimidad frente a sus países clientes?',
      },
      {
        label: 'Respaldo · Para el final',
        en: 'What does the Bank look for in a young economist from Latin America? What should someone who wants to work here in ten years be doing differently today?',
        es: '¿Qué buscan en un economista joven latinoamericano? Es la más fácil de responder y siempre cae bien: guárdala si la conversación se apaga.',
      },
    ],
    script: [
      'El Banco Mundial nació en Bretton Woods en julio de 1944, junto con el FMI. Tiene 189 países miembros y la sede en 1818 H Street.',
      'Son cinco instituciones. Colombia trabaja con el BIRF, la ventanilla de los países de ingreso medio.',
      'El FMI apaga incendios macroeconómicos; el Banco Mundial financia proyectos de largo plazo.',
      'Lo preside Ajay Banga desde junio de 2023. Venía de Mastercard.',
      'Su bandera es el empleo: 1.200 millones de jóvenes llegando a edad de trabajar y solo 420 millones de empleos previstos.',
      'Unos 800 millones de personas siguen en pobreza extrema con la nueva línea de US$3 al día.',
      'En Colombia tiene nueve proyectos activos por US$1.525 millones, incluido el metro de Bogotá. La pobreza estaba en 35,5% en 2025.',
    ],
    tips: [
      'Preséntate primero: "Hi, I\'m Juan Diego Alomía from Colegio Colombo Británico in Cali, Colombia. I study Economics and Business Management in the IB." Así te responden al nivel de tu pregunta y no al de un turista.',
      'Máximo dos frases de contexto y después la pregunta. Una sola pregunta por turno: si metes tres, te responden la más fácil.',
      'Si la respuesta queda vaga, una repregunta corta vale más que otra pregunta nueva: "Could you give us a concrete example in Latin America?"',
      'Si alguien se te adelanta con tu pregunta, usa una de respaldo.',
      'Anota lo que te respondan: es lo que el profesor te va a pedir después.',
      'Lo que probablemente te respondan a la pregunta 1: que ya dan apoyo presupuestal directo (Development Policy Financing), que casi la mitad del personal trabaja en los países y que las condiciones y la supervisión existen para que la plata no se pierda. Tu repregunta está lista para eso.',
    ],
    sources: [
      'June 2025 Update to Global Poverty Lines, Banco Mundial',
      '$3 a day: A new poverty line has shifted the World Bank’s data, Our World in Data',
      'IDA Financing, Banco Mundial',
      'Creating Jobs for a Better Future, Banco Mundial',
      'Colombia, Banco Mundial',
      'World Bank Group Announces Record $100 Billion IDA Replenishment',
      'The World Bank Goes Nuclear, Center for Global Development',
      'From billions to nowhere: Ajay Banga’s development mirage, Bretton Woods Project',
      'La informalidad llegó al 54,6%, según el DANE, Infobae',
    ],
  },
]

export const taskById = new Map(tasks.map((t) => [t.id, t]))

/** Tarea asociada a un evento del cronograma, si la hay. */
export const taskByEventId = new Map(tasks.flatMap((t) => t.eventIds.map((id) => [id, t] as const)))
