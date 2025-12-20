import type { Article } from "../types/article";
import cochesHidrogeno from "../assets/images/auto-electrico.webp";
import arteIa from "../assets/images/arte-ia.webp";
import dineroIa from "../assets/images/dinero-ia .webp";
import ferAlonzo from "../assets/images/fernando-alonso.webp";
import barsaImg from "../assets/images/barcelona-bascke.webp";
import farmacoVhi from "../assets/images/farmaco-vhi.webp";
import vacaMuerta from "../assets/images/vaca-muerta.webp";

export const articles: Article[] = [
  {
    title: "Hidrógeno VS Coches Eléctricos",
    slug: "hidrogeno-vs-coches-electricos",
    description:
      "¿Los coches de hidrógeno alguna vez alcanzarán a los vehículos eléctricos?",
    content:
      'Los coches eléctricos de batería son actualmente más eficientes, económicos y prácticos que los de hidrógeno en la mayoría de escenarios reales. Un estudio comparativo reciente muestra que los vehículos eléctricos pierden solo entre un 10 % y un 30 % de energía almacenada en comparación con el 65 %-75 % de los coches de hidrógeno, lo que significa que los eléctricos aprovechan mejor la energía que consumen. Además, la infraestructura de recarga eléctrica es muchísimo mayor (cientos de miles de puntos de carga) frente a unas pocas centenas de estaciones de hidrógeno, lo que facilita mucho el uso diario de coches eléctricos. También, desde el punto de vista económico, cargar un coche eléctrico suele costar menos por kilómetro recorrido que repostar hidrógeno incluso si este es "verde".\nEuropa Press\n+1\n\nLos coches de hidrógeno ofrecen aún ventajas interesantes como repostaje muy rápido (3-5 min) y alta autonomía (que en modelos específicos puede superar la de algunos eléctricos), pero enfrentan limitaciones de infraestructura, costes más altos y procesos de producción de hidrógeno que no siempre son limpios o eficientes.\nArval\n+1\n\nEn resumen, aunque ambos tipos no emiten gases contaminantes al usarse y tienen su papel en la movilidad sostenible, los eléctricos dominan hoy en eficiencia, red de recarga y coste de uso, mientras que el hidrógeno sigue estando en una fase más experimental con retos a superar para uso masivo.',
    image: cochesHidrogeno,
  },
  {
    title: "Inconvenientes del Arte con IA",
    slug: "inconvenientes-del-arte-con-ia",
    description:
      "¿Cuáles son los posibles efectos adversos de la generación de imágenes con IA bajo demanda?",
    content:
      'La generación de arte con inteligencia artificial ha crecido muchísimo, pero ha levantado debates significativos sobre derechos de autor, apropiación de estilos y valor creativo. Generadores de imágenes pueden estar utilizando obras con copyright sin compensar a los creadores originales, lo que plantea preguntas sobre si esto constituye apropiación indebida o una forma injusta de entrenamiento de modelos.\nUOC\n\nAdemás, el uso masivo de IA para crear piezas visuales con poco esfuerzo puede bajar la percepción del valor artístico humano y generar conflictos sobre qué se considera realmente "arte", ya que la IA no tiene intención, contexto ni experiencia creativa real detrás de sus resultados. Este debate va desde temas éticos hasta legales y culturales, con expertos argumentando que la autenticidad y propósito en el arte no son replicables por máquinas.\nDiario AS\n\nEl tema también está en el centro de discusiones legales y políticas sobre cómo regular el uso de obras protegidas en el entrenamiento de modelos y cómo garantizar que los artistas originales puedan recibir reconocimiento o compensación cuando su estilo o trabajo influye en los resultados generados por IA ',
    image: arteIa,
  },
  {
    title: "¿Se está agotando la financiación de capital de riesgo?",
    slug: "se-esta-agotando-la-financiacion-de-capital-de-riesgo",
    description:
      "La financiación privada por parte de firmas de capital de riesgo ha bajado un 50% interanual. Analizamos qué significa esto.",
    content:
      "La idea de que el capital de riesgo (VC) se está agotando simplifica demasiado lo que realmente está pasando: el mercado está cambiando y madurando, no desapareciendo. En 2025, los datos muestran que el valor total de la financiación de VC ha subido significativamente respecto a años anteriores, impulsado especialmente por megadeals en sectores como inteligencia artificial y tecnología avanzada, incluso mientras el número de acuerdos individuales (cantidad de deals) ha disminuido.\nKPMG\n+1\n\nPor ejemplo, globalmente en el segundo trimestre de 2025 el valor de inversión de VC fue sólido (más de 100 000 millones USD), con fuerte concentración en AI, mientras en regiones como América las inversiones alcanzaron cifras altas aunque en otras áreas como Asia la actividad fue más moderada.\nKPMG\n\nOtra lectura indica que el valor de los fondos de VC en Estados Unidos creció de forma notable, con un aumento de más del 60 % en valor total de acuerdos año tras año, aunque con menos transacciones, lo que indica un flujo de capital hacia proyectos grandes y maduros más que hacia muchos proyectos pequeños.\nGlobalData\n\nEn resumen, el VC no se está agotando, sino que se ha vuelto más selectivo: hay menos acuerdos pequeños y más capital concentrado en rondas grandes, especialmente en áreas tecnológicas punteras como IA y deep tech, lo que refleja una evolución del mercado hacia inversiones de mayor escala y potencial de retorno.",
    image: dineroIa,
  },
  {
    title:
      "Fernando Alonso y su 'no' retiro: La pasión puede más que la promesa",
    slug: "fernando-alonso-no-retiro-dakar",
    description:
      "A solo nueve días de prometer no correr hasta 2026, el piloto español ya está de vuelta al volante, esta vez disfrutando de la adrenalina del Dakar en sus vacaciones.",
    content:
      "Fernando Alonso, el icónico piloto español, demostró una vez más que la pasión por la velocidad corre por sus venas. Tras anunciar que no competiría hasta la temporada 2026, su promesa duró apenas nueve días. El asturiano fue visto disfrutando de sus vacaciones al máximo, pilotando en las dunas como preparación para el Dakar. Este hecho reaviva la admiración de sus seguidores, quienes celebran su inagotable espíritu competitivo y su amor por el motor, demostrando que para una leyenda como Alonso, el retiro es solo una palabra, no una realidad.",
    image: ferAlonzo,
  },
  {
    title: "Noche histórica para el Barça en la Euroliga: ¡Récord de puntos!",
    slug: "barca-record-euroliga-baloncesto",
    description:
      "El equipo de baloncesto del FC Barcelona hace historia al anotar 134 puntos en un partido memorable contra el Baskonia, rompiendo récords en la competición.",
    content:
      "El FC Barcelona ha escrito una nueva página dorada en su historia del baloncesto europeo. En una noche mágica, el equipo blaugrana destrozó las defensas del Baskonia para establecer un nuevo récord de anotación en la Euroliga con 134 puntos. La increíble actuación ofensiva fue un espectáculo para los aficionados y una demostración del poderío del equipo en la actual temporada. Este hito no solo les da una victoria crucial, sino que también envía un mensaje contundente al resto de los contendientes por el título.",
    image: barsaImg,
  },
  {
    title: "Nuevo Fármaco Logra 100% de Eficacia en la Prevención del VIH",
    slug: "nuevo-farmaco-prevencion-vih",
    description:
      "Un inyectable llamado Lenacapavir ha demostrado ser completamente efectivo para prevenir la infección por VIH en un ensayo clínico a gran escala, marcando un hito en la lucha contra el virus.",
    content:
      "La comunidad científica celebra un avance sin precedentes en la lucha contra el VIH. El fármaco inyectable Lenacapavir ha alcanzado una tasa de eficacia del 100% en la prevención de nuevas infecciones durante un ensayo clínico de gran escala. Este resultado histórico ofrece una nueva y poderosa herramienta para la profilaxis preexposición (PrEP), especialmente para comunidades vulnerables. A diferencia de las píldoras diarias, Lenacapavir se administra con menos frecuencia, lo que podría mejorar drásticamente la adherencia al tratamiento preventivo y cambiar el paradigma de la prevención del VIH a nivel mundial.",
    image: farmacoVhi,
  },
  {
    title:
      "Vaca Muerta: Argentina Proyecta Exportaciones Récord de Petróleo y Gas",
    slug: "vaca-muerta-exportaciones-record-2026",
    description:
      "El gobierno argentino anticipa que las exportaciones energéticas desde el yacimiento de Vaca Muerta alcanzarán los 17.000 millones de dólares para 2026, consolidando al país como un jugador clave en el mercado energético global.",
    content:
      "El yacimiento de Vaca Muerta se perfila como el motor del futuro energético de Argentina. Según proyecciones oficiales, se espera que las exportaciones de petróleo y gas provenientes de esta formación no convencional alcancen la cifra de 17.000 millones de dólares para el año 2026. Este crecimiento exponencial no solo representa una entrada masiva de divisas para la economía del país, sino que también posiciona a Argentina como un proveedor de energía cada vez más relevante a nivel mundial. El desarrollo continuo de Vaca Muerta es una pieza central de la estrategia económica del gobierno, buscando atraer inversiones y expandir la infraestructura para maximizar su potencial.",
    image: vacaMuerta,
  },
];
