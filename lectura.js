/* Lectura crítica · UdeA de Bolsillo
   EXAMENES: claves y explicaciones hechas por Claude (no son la clave oficial).
   Los textos reales NO se copian aquí: se leen en el PDF oficial.
   "d": true marca preguntas donde la clave es discutible.
   PRACTICA: textos originales escritos para practicar, con el estilo de la UdeA. */

const EXAMENES = [
{
  id: "2026-1", nombre: "Examen 2026-1", pdf: "examenes/Examen-UdeA-2026-1.pdf",
  bloques: [
    { titulo: "Texto Uno", tema: "Artículo sobre cómo la IA (ChatGPT, Midjourney) llega al trabajo de los profesionales y qué riesgos trae.", pagina: 2, desde: 1, hasta: 21 },
    { titulo: "Texto Dos", tema: "Artículo sobre cómo la IA cambia la manera de aprender y el sistema educativo.", pagina: 4, desde: 22, hasta: 34 },
    { titulo: "Textos Uno y Dos", tema: "Preguntas que comparan los dos textos.", pagina: 5, desde: 35, hasta: 40 }
  ],
  q: {
    1:  ["D", "Los nuevos roles del párrafo 1 nacen de trabajar con máquinas y algoritmos. El especialista en mercadeo hace análisis de mercados, que no depende de robots ni computadores.", "Las otras tres mencionan algoritmos o programación, por eso parecen raras pero sí encajan."],
    2:  ["D", "Acuña nombra textualmente ideas superficiales, analogías incorrectas y código ineficiente. Los efectos sobre los usuarios no son una deficiencia de la IA: es lo que pasa si el usuario no revisa.", "En las de EXCEPTO, tres opciones salen tal cual del texto; la que sobra es la que no está nombrada como defecto."],
    3:  ["D", "El bloqueo de la página en blanco es cuando alguien que escribe no sabe por dónde empezar. Dar ideas para superarlo ayuda a quien escribe.", "La B mezcla palabras del texto (ideas, página en blanco) pero cambia de quién se habla."],
    4:  ["C", "Al principio Parker describe la IA de forma positiva (hace en minutos trabajo de nivel experto). Eso va en la línea de quienes premiaron la obra hecha con IA en Colorado.", "La D suena bien, pero Parker después también se preocupa por la propiedad intelectual, igual que los artistas.", true],
    5:  ["A", "El párrafo 2 dice que esos profesionales se sentían seguros porque su trabajo es pensar y producir conocimiento.", "La D contradice el texto: habla de carreras universitarias y posgrados, no técnicas."],
    6:  ["C", "El párrafo 6 habla de un sesgo: asociar algo a un grupo por estereotipo. La mujer en la cocina, el hombre en la oficina y usar «hombre» para todos son sesgos de género. «Personas con discapacidad» no tiene que ver con género.", "Pregunta de EXCEPTO: buscá la opción que se sale del tema (género)."],
    7:  ["B", "Lo que se viene describiendo es que las máquinas reemplazan trabajos mecánicos, o sea la automatización de trabajos manuales.", "La C está al revés: son máquinas reemplazando personas, no personas reemplazando máquinas.", true],
    8:  ["C", "El párrafo 3 cuenta un examen casi aprobado por IA, un premio de arte ganado con IA y una demanda de artistas. Todo apunta a riesgos.", "La B y la D son predicciones que el texto no hace."],
    9:  ["D", "«La primera» retoma la primera herramienta de la lista del párrafo 2, que es Chat GPT. Además lo que hace (redactar artículos y ensayos) es de un programa de texto.", "La A es Midjourney, que se nombra después en el mismo párrafo."],
    10: ["C", "El párrafo 1 dice que contratar personas para empacar es más costoso y menos eficiente: la máquina da más eficiencia y menos costo.", "La A dice lo contrario (costo adicional). La B es una consecuencia, no la ventaja que se nombra."],
    11: ["B", "Si las máquinas reemplazan los puestos mecánicos, hay menos oportunidades para trabajos manuales.", "La A y la D son generalizaciones que el texto no dice."],
    12: ["D", "La IA redactó textos (artículos y ensayos), presentó un examen y creó una obra de arte.", "La A dice «aprobar exámenes», pero el texto dice que CASI lo aprueba. Ojo con esas palabritas."],
    13: ["D", "«Dibuja» aquí no es trazar con lápiz: significa describir o caracterizar algo.", "La B (traza) es el significado literal; la UdeA casi siempre pregunta el sentido en contexto."],
    14: ["D", "Empacar es el ejemplo de un trabajo mecánico que las máquinas reemplazaron.", ""],
    15: ["C", "Ocasio-Cortez se preocupa porque los algoritmos reconocen mejor a personas blancas: es un sesgo, el mismo problema que señala Acuña.", "La D también nombra a Acuña, pero habla de imprecisiones, no de sesgos."],
    16: ["B", "Un reloj digital reemplaza a otro reloj, no a una persona. Alexa, el dispensador de tiquetes y el chatbot sí hacen trabajos que hacía una persona.", ""],
    17: ["C", "Se oponen los artistas que demandaron, y los profesores y directivos quedaron preocupados. Los organizadores del concurso le dieron el premio a la obra hecha con IA, así que no se oponen.", "La A tampoco aparece en el texto; esta pregunta tiene dos opciones flojas. La C es la más clara porque el texto muestra lo contrario.", true],
    18: ["C", "El texto nombra problemas de aprendizaje, de propiedad intelectual y de saber qué es humano y qué no. De rentabilidad no habla.", ""],
    19: ["A", "Dall-E crea imágenes. Los afectados son los que trabajan con imágenes: publicistas, fotógrafos, ilustradores. Los escritores trabajan con palabras.", "La A trae una razón inventada (crear contenido a partir de imágenes) para que suene lógica."],
    20: ["D", "Parker dice que la IA podría acelerar la pérdida de importantes habilidades humanas, y pone como ejemplo la escritura.", "Competencia (C) suena parecido, pero el texto usa la palabra habilidad."],
    21: ["D", "Acuña dice que estas herramientas son dañinas si los usuarios no critican lo que producen. O sea, sirven si el usuario revisa con criterio.", "La A suena bien, pero el texto no dice que la IA tenga que ser más precisa: pone la responsabilidad en el usuario."],
    22: ["C", "El párrafo 4 dice que el sistema tradicional se centró en memorizar.", "La B describe lo que pasa HOY con los chatbots, no el sistema tradicional."],
    23: ["D", "La frase solo dice que la IA también cambia la forma de aprender. Decir que antes se aprendía mejor es un juicio que el texto no hace.", "La B también es floja, pero se puede deducir que antes de los buscadores había que ir a la biblioteca.", true],
    24: ["A", "El párrafo 1 habla de industrias, salud y tareas del hogar. Lo educativo empieza en el párrafo 2.", "Pregunta de EXCEPTO sobre un párrafo: revisá qué temas trata ese párrafo y nada más."],
    25: ["C", "El nuevo paradigma es la nueva forma de informarse y aprender con IA, que obliga a la educación a cambiar. Hablar de una «revolución científica» se pasa de lo que dice el texto.", "", true],
    26: ["C", "La pregunta final invita al lector a pensar cómo usar la IA para aprender. No se responde en el texto.", "La B dice que ya fue respondida; no es así."],
    27: ["D", "El párrafo 3 dice que los usuarios consumen información de forma personalizada, interactiva y amigable. «Educativo» no está en la lista.", ""],
    28: ["A", "El debate viejo es cómo la educación se adapta a los cambios de la tecnología. Adaptarse al contexto es lo que siempre ha hecho cambiar la educación.", "", true],
    29: ["B", "Si memorizar ya no parece tener sentido porque el chatbot responde, el riesgo es usar cada vez menos la memoria.", "La C es una idea más grande que el párrafo no plantea.", true],
    30: ["D", "El párrafo 6 nombra propuestas interactivas y personalizadas, apropiarse del conocimiento y enfocarse en el objetivo. Nunca dice que la IA supere al docente.", ""],
    31: ["C", "El párrafo 5 explica la alfabetización de datos como entender cómo funciona la IA y usarla bien: formación para usar la IA.", "La A y la D hablan de leer y escribir; el texto no usa «alfabetización» en ese sentido."],
    32: ["C", "Facebook, Instagram y Netflix sugiriendo cosas según lo que hacés son sistemas de recomendación con IA. Los likes los ponen personas, no la IA.", ""],
    33: ["D", "«Cuestión de tiempo» quiere decir que va a pasar sí o sí, tarde o temprano.", "La B es parecida, pero habla de algo que ya llegó; la frase habla de algo que todavía va a pasar."],
    34: ["C", "El texto pide entender si la respuesta de la IA es correcta, si tiene sesgos y usarla de forma ética: eso es evaluar información de forma crítica en entornos digitales.", "La B también es razonable; esta es de las discutibles.", true],
    35: ["D", "El Texto Uno plantea desafíos y riesgos (retador); el Texto Dos es optimista sobre lo que la IA puede hacer por el aprendizaje (esperanzador).", "La C dice desesperanzador para el Dos, que es lo contrario.", true],
    36: ["B", "El Texto Dos se enfoca en la educación; el Texto Uno en los riesgos para profesionales como artistas, periodistas y abogados.", ""],
    37: ["A", "Turnitin habla del riesgo de que estudiantes presenten textos de IA como propios: es una preocupación, como las del Texto Uno.", "La D dice que Acuña está en el Texto Dos; está en el Uno. Trampa de datos cruzados."],
    38: ["D", "En el Texto Uno el trabajo cognitivo es el de los profesionales del pensamiento crítico; en el Dos se nombra la atención médica.", "", true],
    39: ["A", "Solo el Texto Uno habla de que la IA reemplace profesionales. El Dos habla de aprender.", ""],
    40: ["A", "El miedo al capitalismo tiene que ver con empresas que reemplazan personas para ahorrar plata, tema que el Texto Uno toca sin nombrarlo.", "", true]
  }
},
{
  id: "2025-1", nombre: "Examen 2025-1", pdf: "examenes/Examen-UdeA-2025-1.pdf",
  bloques: [
    { titulo: "Texto Uno", tema: "Testimonio de un joven: la crisis en su salón de décimo, el servicio militar y el racismo que vivió en el Ejército.", pagina: 1, desde: 1, hasta: 25 },
    { titulo: "Texto Dos", tema: "Testimonio de una madre con dos hijos en el Ejército y la noche del ataque a Santa María.", pagina: 4, desde: 26, hasta: 37 },
    { titulo: "Textos Uno y Dos", tema: "Preguntas que comparan los dos testimonios.", pagina: 6, desde: 38, hasta: 40 }
  ],
  q: {
    1:  ["B", "El párrafo pone frente a frente los sueños bonitos (médica, militar, ingeniero) y la realidad de no tener plata para estudiar.", "La D: soñadora y esperanzadora son casi lo mismo, no se contraponen."],
    2:  ["C", "Habla del maltrato a los afro en primera persona («yo lo viví», «te maltratan a ti»): se deduce que es afro.", "La B: no está investigando nada, está contando lo que vivió."],
    3:  ["B", "«Dizque» marca duda, ironía o inconformidad con lo que se dice, pero no afirma que sea falso.", "Pregunta de EXCEPTO: las otras tres sí son usos de «dizque»."],
    4:  ["D", "En el párrafo 4, «negro» aparece como insulto de los mandos. No se habla de historia ni de cultura africana.", "La C usa lo que dice la cita, pero el narrador nunca habla de la cultura africana."],
    5:  ["B", "La «crisis en el escenario» pasa cuando la profe hace la pregunta en clase: el escenario es el salón.", "La C, el colegio, es demasiado general."],
    6:  ["C", "Para él, entrar a la Policía reemplaza la idea de ir a la universidad: es su otro camino para salir adelante.", "La D choca con el párrafo 3, donde busca un título técnico para entrar.", true],
    7:  ["B", "Hizo el bachillerato, estaba estudiando criminalística y ahí lo reclutó el Ejército.", "La C dice que ingresó a la Policía: nunca entró."],
    8:  ["D", "Él sí podía estudiar porque sus papás tenían cómo pagarle la carrera.", ""],
    9:  ["A", "Deja de querer estudiar porque le parece injusto estudiar él si sus compañeros no pueden: es solidaridad.", "La D: a él sí le alcanzaba la plata."],
    10: ["D", "El compañero deja de estudiar porque no podría pagar la carrera; el profesor deja el doctorado porque no lo puede pagar. Misma causa: la plata.", "La C se parece, pero el aspirante se rinde por miedo a perder, no por plata."],
    11: ["A", "Lo grave es no tener plata, y lo que se pone en peligro es poder seguir estudiando.", "La D usa palabras rebuscadas (paupérrima, ubérrima) para parecer correcta."],
    12: ["D", "Sus papás sí podían pagarle la universidad; lo que él quería era ganar plata y hacerle una casa a su mamá. La limitación es no tener casa propia.", "La C es la trampa grande: en el párrafo dice justo que SÍ tenían cómo costearle el estudio."],
    13: ["D", "Le dicen que no puede quedarse en el pueblo porque lo ven como del bando contrario: es una amenaza.", "La C: un plazo es solo tiempo; aquí hay intimidación."],
    14: ["C", "Lo que hizo que cinco dejaran de ir fue lo que dijo el compañero, no la pregunta de la profe.", "La D: la pregunta solo encendió la discusión."],
    15: ["A", "Se mencionan médica, militar e ingeniero. Abogado no aparece.", ""],
    16: ["A", "«Como pudieron» habla de esfuerzo, constancia y carencias. No de casualidad.", ""],
    17: ["A", "El trato es racista: reduce a la persona, la pone por debajo y la aparta. No es una sanción disciplinaria.", ""],
    18: ["B", "El párrafo solo habla del Ejército y de lo que él vivió ahí.", "La D generaliza a todas las instituciones del Estado; el texto no dice eso."],
    19: ["B", "Estudiaba para tener un título técnico y así entrar «fácilmente»: el título facilita, no es obligatorio.", "La C: «fácilmente» no quiere decir que sin título sea imposible."],
    20: ["B", "«Los míos» son los compañeros que no iban a poder estudiar, de los que venía hablando.", "La A: su familia sí podía pagarle.", true],
    21: ["B", "En el texto, la reflexión «hizo hincapié» en los compañeros: les llegó y se les quedó (caló y cuajó).", "La D es el significado de diccionario; la pregunta pide el sentido que toma en el texto.", true],
    22: ["D", "Sienten que pierden el tiempo porque sus papás no van a poder pagarles la universidad.", "La B suena parecida, pero el problema es la plata, no el título."],
    23: ["A", "Igual que con la libreta: si no tenés cómo comprar algo, te toca otra salida a la fuerza (pagar arriendo).", "La C y la D dicen «puede», o sea es opcional; en el texto es obligatorio."],
    24: ["A", "Usa «afro» para hablar de sí mismo y «negro» cuando repite el insulto de los mandos: distingue los sentidos.", "La C: si fueran sinónimos para él, no los usaría en situaciones distintas."],
    25: ["B", "Las presenta como del mismo campo (ambas lo acercan a la Policía).", "La D: cercanas no es lo mismo que iguales."],
    26: ["C", "En el contexto de la guerra, el asalto a Santa María es un ataque armado, un combate.", "La B: atraco es un robo.", true],
    27: ["C", "«Esa» retoma a la sobrina, que es la persona nombrada justo antes.", ""],
    28: ["B", "Salió del colegio a los 16 y «entonces» se lo llevaron: antes de los 18 que pide la ley.", "La D se agarra de que no dice la edad exacta, pero el «entonces» lo deja claro."],
    29: ["A", "Es la más defendible: la frase exagera el papel de la sobrina, que no lo bajó ella misma sino que movió influencias.", "Ninguna opción encaja perfecto; esta es de las discutibles.", true],
    30: ["D", "El párrafo 3 habla de aguantar hambre (privaciones) y de los traslados.", "La C: patrullar sale en el párrafo 4, no en el 3."],
    31: ["A", "La madre dice que no pudieron costearles la carrera.", ""],
    32: ["A", "Las comillas marcan ironía: eran noticias de ataques, o sea malas.", ""],
    33: ["B", "Siente el dolor antes de saber del ataque: es una premonición.", "La A y la C: no está enferma."],
    34: ["C", "«Cada nadita» es a cada rato, con frecuencia.", "La A y la D significan «en ese mismo momento», que es otra cosa."],
    35: ["C", "La frase habla de que no hay manera de comunicarse desde allá, no del tamaño del territorio.", "", true],
    36: ["D", "«Ir de la Ceca a la Meca» es moverse por todas partes haciendo gestiones, igual que «mover cielo y tierra».", "La A (la fe que mueve montañas) usa una imagen parecida pero habla de fe, no de gestiones."],
    37: ["C", "«A qué santo se le prendió» = a qué santo se encomendó.", "La D (encendió) es el sentido literal."],
    38: ["B", "Las privaciones salen en el Texto Dos y el maltrato en el Uno, pero ninguno de los dos habla de ambas cosas.", "", true],
    39: ["B", "Zuleta deja el colegio por una razón intelectual; los protagonistas lo dejan por plata y por la guerra.", ""],
    40: ["A", "Son testimonios reales recogidos para guardar la memoria del conflicto.", "La D da una definición de novela corta, que no aplica."]
  }
}
];

const PRACTICA = [
{
  id: "quebradas", titulo: "Las quebradas tapadas", tipo: "Texto argumentativo",
  parrafos: [
    "Quien camina por el centro de Medellín difícilmente sospecha que bajo sus pies corren decenas de quebradas. Durante buena parte del siglo XX, la ciudad decidió que sus aguas eran un estorbo: olían mal, se desbordaban en invierno y ocupaban terrenos que podían convertirse en calles. La solución fue cubrirlas con concreto. Así, quebradas que durante siglos habían marcado los límites de los barrios desaparecieron de la vista y, con el tiempo, también de la memoria.",
    "Hoy esa decisión suele presentarse como un error de urbanistas sin visión. Sin embargo, juzgarla así es injusto. En aquella época las quebradas recibían las aguas negras de miles de casas sin alcantarillado, y las enfermedades que se propagaban por ellas mataban a muchos niños cada año. Para los habitantes de entonces, tapar una quebrada no era destruir la naturaleza: era protegerse de ella.",
    "El problema es que la solución creó nuevas dificultades. Un río encerrado no deja de ser río. Cuando llueve con fuerza, el agua busca su antiguo cauce, y los tubos, diseñados para las lluvias de otro siglo, no dan abasto. Las inundaciones que cada temporada afectan a ciertos sectores no son, en muchos casos, un capricho del clima, sino la respuesta de un agua que nunca se fue.",
    "Algunas ciudades del mundo han empezado a destapar sus ríos. Seúl, por ejemplo, demolió una autopista elevada para devolverle la luz a un arroyo, y la zona, antes ruidosa y gris, se convirtió en un parque que bajó la temperatura de los alrededores. Pero sería ingenuo creer que basta con levantar el concreto. Destapar una quebrada exige primero limpiar sus aguas, reubicar redes y, sobre todo, convencer a los vecinos de que un cauce abierto puede ser un vecino amable y no una amenaza.",
    "Quizás lo más valioso de estas discusiones no sea decidir si se destapa o no una quebrada, sino reconocer que la ciudad no está construida sobre un terreno vacío. Debajo de cada calle hay una historia que alguien prefirió olvidar. Recordarla no obliga a deshacer todo lo hecho; obliga, al menos, a dejar de sorprenderse cada vez que el agua regresa."
  ],
  preguntas: [
    { e: "El propósito principal del texto es:", o: ["Denunciar a los urbanistas del siglo XX por haber canalizado las quebradas.", "Mostrar que tapar las quebradas tuvo razones válidas, pero trajo consecuencias que hoy obligan a recordar su existencia.", "Proponer que Medellín destape todas sus quebradas como lo hizo Seúl.", "Explicar por qué hoy en Medellín llueve más fuerte que en el siglo pasado."], c: 1, x: "El texto explica por qué se taparon, qué problemas trajo eso y cierra pidiendo recordar. La B recoge las tres partes.", tr: "La A es justo la idea que el autor tumba con el «sin embargo» del párrafo 2." },
    { e: "En el párrafo 2, el autor:", o: ["Defiende en parte la decisión de cubrir las quebradas al ubicarla en su época.", "Afirma que cubrir las quebradas fue la mejor decisión posible.", "Culpa a los habitantes de entonces por contaminar las quebradas.", "Demuestra que las enfermedades desaparecieron gracias al concreto."], c: 0, x: "Dice que juzgar la decisión como error es injusto, porque en esa época las quebradas enfermaban a la gente: la entiende según su época.", tr: "La B exagera: entenderla no es decir que fue la mejor." },
    { e: "La frase «un río encerrado no deja de ser río» (párrafo 3) sugiere que:", o: ["Los tubos aumentan la cantidad de agua de las quebradas.", "El agua conserva su comportamiento natural aunque esté oculta.", "Las quebradas canalizadas dejaron de ser peligrosas.", "Todos los ríos deben estar siempre a la vista."], c: 1, x: "Aunque esté tapada, cuando llueve el agua vuelve a buscar su cauce: sigue comportándose como río.", tr: "La D convierte la idea en una orden que el texto no da." },
    { e: "Según el párrafo 3, las inundaciones se explican principalmente por:", o: ["El cambio del clima en las últimas décadas.", "La falta de mantenimiento de las calles.", "Tubos sin capacidad suficiente para el agua que vuelve a su cauce.", "La decisión de los vecinos de construir encima de las quebradas."], c: 2, x: "El texto dice que los tubos fueron hechos para otras lluvias y no dan abasto cuando el agua vuelve.", tr: "La A: el texto dice justo que NO es un capricho del clima." },
    { e: "Según el párrafo 4, para destapar una quebrada se requiere, EXCEPTO:", o: ["Limpiar sus aguas.", "Reubicar redes.", "Demoler una autopista.", "Ganarse el apoyo de los vecinos."], c: 2, x: "Lo de la autopista es lo que hizo Seúl en su caso, no un requisito para cualquier quebrada.", tr: "Es un dato que sí está en el párrafo, pero en otro papel: como ejemplo, no como requisito." },
    { e: "En el párrafo 3, la expresión «no dan abasto» significa que los tubos:", o: ["No alcanzan a evacuar toda el agua.", "Se rompen con facilidad.", "Nunca fueron instalados.", "Dejan pasar agua sucia."], c: 0, x: "«No dar abasto» es no alcanzar a cubrir todo lo que se necesita.", tr: "" },
    { e: "Una situación análoga a la de las quebradas tapadas es la de:", o: ["Una persona que toma pastillas para el dolor sin tratar la enfermedad, y el dolor vuelve.", "Un estudiante que olvida la fecha del examen y lo pierde.", "Una familia que se muda a un barrio nuevo y conoce a sus vecinos.", "Un jardinero que corta un árbol enfermo y siembra otro en su lugar."], c: 0, x: "En las dos se esconde el problema en vez de resolverlo, y el problema regresa.", tr: "La D parece, pero ahí el problema sí se resuelve: el árbol enfermo ya no está." },
    { e: "Frente a la idea de destapar quebradas, el autor:", o: ["Está totalmente a favor y cree que es sencillo.", "Se opone porque representa una amenaza para los vecinos.", "La ve con buenos ojos, pero advierte que exige condiciones y que lo más importante es recordar.", "Considera que es un tema sin importancia para la ciudad."], c: 2, x: "Pone el ejemplo de Seúl como algo bueno, pero dice que sería ingenuo creer que es fácil, y cierra diciendo que lo valioso es recordar.", tr: "La A olvida el «sería ingenuo»; la B toma la palabra «amenaza» fuera de contexto." }
  ]
},
{
  id: "sirena", titulo: "La última sirena", tipo: "Testimonio",
  parrafos: [
    "Yo entré a la fábrica de dieciocho años, cuando todavía sonaba la sirena a las seis de la mañana y uno la oía desde la casa. Mi papá había trabajado ahí, y mi tío, y medio barrio. Uno no pedía trabajo en la textilera: uno heredaba el puesto, como quien hereda una finca.",
    "Los primeros años fueron duros. Las máquinas hacían un ruido que se le metía a uno en los huesos, y salíamos con el pelo lleno de motas de algodón. Pero había orgullo. Cuando uno veía en una vitrina del centro una camisa hecha con nuestra tela, sentía que algo de uno estaba ahí colgado.",
    "Después vinieron las «modernizaciones», como les decían los gerentes. Cada máquina nueva hacía el trabajo de cuatro de nosotros. A los muchachos nuevos ya no los contrataban; a los viejos nos ofrecían plata para que nos fuéramos. Muchos la recibieron. Yo no, por terco o por miedo, todavía no sé.",
    "El día que cerraron, no hubo sirena. Eso fue lo que más me dolió. Llegamos a las seis, como siempre, y la reja estaba con candado y un papel pegado que nadie quiso leer en voz alta. Nos quedamos ahí parados hasta las ocho, como esperando que alguien saliera a decirnos que era un error.",
    "Hoy en ese lote hay un centro comercial. Mis nietos van a cine ahí y me invitan, pero yo no entro. No es rabia. Es que cuando paso por la entrada todavía me parece oír la sirena, y no quiero que se me olvide."
  ],
  preguntas: [
    { e: "La expresión «uno heredaba el puesto, como quien hereda una finca» (párrafo 1) indica que:", o: ["Trabajar en la fábrica era una tradición de las familias del barrio.", "La fábrica les pertenecía a las familias del barrio.", "Los trabajadores recibían tierras como pago.", "El narrador compró su puesto en la fábrica."], c: 0, x: "Antes de esa frase dice que trabajaron su papá, su tío y medio barrio: el puesto pasaba de generación en generación.", tr: "La B toma «heredar» al pie de la letra, como si fueran dueños." },
    { e: "Las comillas en «modernizaciones» (párrafo 3) sugieren que el narrador:", o: ["Está de acuerdo con los cambios de los gerentes.", "Toma distancia de esa palabra, porque para él significó perder empleos.", "Cita un documento oficial de la empresa.", "No conoce el significado de la palabra."], c: 1, x: "Pone la palabra entre comillas y aclara que así le decían los gerentes: es la palabra de ellos, no la de él.", tr: "La C: las comillas sí indican que la dijo otro, pero el sentido aquí es de ironía." },
    { e: "Del párrafo 3 se infiere que el narrador:", o: ["Recibió la plata para irse.", "Siguió trabajando en la fábrica hasta el cierre.", "Fue despedido antes que sus compañeros.", "Llegó a ser gerente."], c: 1, x: "Dice que él no recibió la plata, y en el párrafo 4 cuenta que estaba ahí el día que cerraron.", tr: "" },
    { e: "Lo que más le dolió al narrador el día del cierre fue:", o: ["El candado de la reja.", "El papel pegado en la reja.", "Que ese día no sonara la sirena.", "Que sus compañeros no hablaran."], c: 2, x: "El texto lo dice tal cual justo después de «no hubo sirena».", tr: "La A y la B son detalles de esa mañana, pero no lo que él señala como lo más doloroso." },
    { e: "Las razones por las que el narrador no entra al centro comercial son, EXCEPTO:", o: ["La rabia contra el centro comercial.", "El deseo de conservar el recuerdo.", "Que asocia la entrada con el sonido de la sirena.", "Que el lugar le trae la memoria de la fábrica."], c: 0, x: "Él mismo dice «no es rabia».", tr: "Es la razón que cualquiera supondría, pero el texto la niega." },
    { e: "Una situación análoga a la de los trabajadores parados frente a la reja hasta las ocho es la de:", o: ["Hinchas que se quedan en el estadio después de perder la final, como esperando que el marcador cambie.", "Un estudiante que llega tarde a clase.", "Una familia que se muda de barrio.", "Un empleado que renuncia a su trabajo."], c: 0, x: "En los dos casos la gente se queda esperando que algo que ya pasó no sea verdad.", tr: "" },
    { e: "La palabra «terco» (párrafo 3) se puede reemplazar por:", o: ["Obstinado", "Cobarde", "Rico", "Ingenuo"], c: 0, x: "Terco es el que se mantiene en lo suyo aunque le digan otra cosa: obstinado.", tr: "La B: en la misma frase dice «o por miedo», pero eso es otra razón, no lo que significa terco." },
    { e: "El propósito principal del texto es:", o: ["Denunciar a los gerentes de la fábrica.", "Contar cómo el narrador vivió el cierre de la fábrica y lo que significó perder esa forma de vida.", "Explicar cómo funcionan las fábricas textiles.", "Convencer al lector de no ir a centros comerciales."], c: 1, x: "Es un testimonio: cuenta su experiencia y lo que esa fábrica significaba para él.", tr: "La A: critica las «modernizaciones», pero el texto no es una denuncia." }
  ]
},
{
  id: "celular", titulo: "¿Celular en el colegio?", tipo: "Dos textos con posturas distintas",
  parrafos: [
    "<b>Texto A · Apaguen el celular.</b> Cada vez más colegios del mundo están prohibiendo el celular durante la jornada, y los resultados parecen darles la razón. Donde se ha aplicado la medida, los profesores reportan más atención en clase y más conversación en los descansos. No es extraño: una notificación tarda un segundo en llegar, pero recuperar la concentración después de mirarla puede tomar varios minutos.",
    "Quienes se oponen dicen que el celular es una herramienta de estudio. Puede serlo, pero en la práctica pocos estudiantes lo usan para eso durante la jornada. Pedirle a un adolescente que ignore un aparato diseñado para no ser ignorado es como pedirle a alguien que está a dieta que estudie dentro de una panadería.",
    "Prohibir no es castigar. Es reconocer que el colegio es uno de los pocos lugares donde todavía se puede aprender a prestar atención, y esa habilidad, hoy, vale más que cualquier aplicación.",
    "<b>Texto B · Enseñar en lugar de esconder.</b> Prohibir el celular en el colegio es tentador porque es fácil: se recogen los aparatos y el problema desaparece de la vista. Pero desaparece solo de la vista. A las tres de la tarde el estudiante sale con el celular en la mano y nadie le ha enseñado a usarlo.",
    "Los jóvenes van a vivir rodeados de pantallas. La pregunta no es si las usarán, sino cómo. Distinguir una noticia falsa de una verdadera, saber cuándo dejar de mirar, entender por qué una aplicación quiere que uno siga deslizando: eso también se aprende, y el colegio es el lugar natural para hacerlo.",
    "Eso no significa permitirlo todo. Un celular guardado durante una explicación es razonable. Lo que preocupa es convertir la prohibición en la única respuesta, como si cerrar los ojos ante un río enseñara a nadar."
  ],
  preguntas: [
    { e: "La tesis del Texto A es:", o: ["El celular no sirve para estudiar.", "Prohibir el celular en el colegio ayuda a que los estudiantes aprendan a concentrarse.", "Los profesores deben castigar a quien use el celular.", "Las notificaciones son peligrosas para la salud."], c: 1, x: "Todo el texto defiende la prohibición porque protege la atención; el último párrafo lo dice clarito.", tr: "La A exagera: el texto dice que PUEDE servir, pero que en la práctica casi no se usa para eso." },
    { e: "La comparación con la panadería (Texto A) busca mostrar que:", o: ["Los estudiantes pasan hambre en el colegio.", "Es muy difícil resistirse a algo hecho para atraer la atención cuando se tiene al frente.", "Los colegios deberían vender comida.", "Las dietas no funcionan."], c: 1, x: "El celular está diseñado para no ser ignorado, igual que el pan para el que está a dieta: tenerlo al frente hace casi imposible resistirse.", tr: "" },
    { e: "En el Texto B, la frase «desaparece solo de la vista» significa que:", o: ["El problema sigue existiendo aunque no se vea dentro del colegio.", "Los celulares se pierden en el colegio.", "Los estudiantes esconden el celular.", "El colegio logra resolver el problema."], c: 0, x: "Al salir, el estudiante tiene el celular otra vez y nadie le enseñó a usarlo: el problema no se resolvió, solo se escondió.", tr: "La D es lo contrario de lo que dice el autor." },
    { e: "El autor del Texto B, EXCEPTO:", o: ["Acepta que guardar el celular durante una explicación es razonable.", "Propone enseñar a usar las pantallas.", "Afirma que el colegio es el lugar natural para aprender esas habilidades.", "Considera que el celular debe estar permitido en todo momento."], c: 3, x: "El autor dice «eso no significa permitirlo todo».", tr: "Es la postura que uno le atribuye a quien critica la prohibición, pero él la descarta." },
    { e: "La frase «como si cerrar los ojos ante un río enseñara a nadar» (Texto B) es un argumento por:", o: ["Autoridad: cita a un experto.", "Analogía: compara la situación con otra parecida.", "Cifras: usa datos numéricos.", "Ejemplo histórico: cuenta algo que pasó."], c: 1, x: "Compara no dejar ver el celular con no dejar ver el río: ninguno de los dos enseña. Comparar dos situaciones parecidas es argumentar por analogía.", tr: "" },
    { e: "Los dos textos coinciden en que:", o: ["El celular debe prohibirse en el colegio.", "El celular puede afectar la atención en clase.", "Los padres son los responsables del problema.", "Las aplicaciones no sirven para nada."], c: 1, x: "El A lo dice directamente; el B lo acepta al decir que es razonable guardarlo durante una explicación.", tr: "La A solo la defiende el Texto A." },
    { e: "La diferencia principal entre los dos textos es que:", o: ["El A propone retirar el celular para proteger la atención; el B propone enseñar a usarlo.", "El A habla de colegios y el B de universidades.", "El A está a favor de la tecnología y el B en contra.", "El A usa datos y el B no usa ningún argumento."], c: 0, x: "Los dos ven el problema, pero proponen soluciones distintas: quitar o enseñar.", tr: "La C está al revés de lo que parece y además ninguno está «en contra» de la tecnología." },
    { e: "Un rector que prohíbe el celular durante las clases y además dicta un taller para reconocer noticias falsas estaría aplicando:", o: ["Solo las ideas del Texto A.", "Solo las ideas del Texto B.", "Ideas de los dos textos.", "Ninguna de las ideas de los textos."], c: 2, x: "Quitar el celular en clase es del A; enseñar a usar las pantallas es del B (que además acepta guardarlo durante las explicaciones).", tr: "" }
  ]
}
];
