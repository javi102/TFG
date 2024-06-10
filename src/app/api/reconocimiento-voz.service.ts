import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AutomatizacionVozService } from './automatizacion-voz.service';

@Injectable({
  providedIn: 'root'
})
export class ReconocimientoVozService {
  //variables
  recognition: any;
  IsListen: boolean = false;
  pauseTimeout: any;

  //constructor
  constructor(
    private ngZone: NgZone,
    private router: Router,
    private automatizacionvoz: AutomatizacionVozService
  ) {
    const webkitSpeechRecognition = (window as any).webkitSpeechRecognition; // Inicializamos el reconocimiento de voz
    this.recognition = new webkitSpeechRecognition(); // creamos un constructor del reconocimiento de voz
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.lang = 'es-ES'; // Establecemos el idioma

    this.recognition.onresult = (event: any) => { // Cuando hay un resultado
      const transcript = event.results[event.results.length - 1][0].transcript; // Obtenemos la transcripción
      this.ngZone.run(() => { // Ejecutamos la transcripción en la zona de Angular
        this.handleCommand(transcript); // Manejamos el comando
      });
    };

    this.recognition.onend = () => {// Cuando termina de hablar
      if (this.IsListen) { // Si está escuchando
        this.startListening(); // Empezamos a escuchar
      }
    };
  }

  startListening() { // Metodo de Escuchar
    if (!this.IsListen) { // Si no está escuchando
      this.recognition.start(); // Empezamos a escuchar
      this.IsListen = true; // Está escuchando
    }
  }

  stopListening() { // Metodo de Parar
    if (this.IsListen) { // Si está escuchando
      this.recognition.stop(); // Paramos de escuchar
      this.IsListen = false; // No está escuchando
    }
  }

  private handleCommand(command: string) { //command de tipo de string
    if (command.includes('navegar a inteligencia artificial')) { // Si el comando incluye 'navegar a inteligencia artificial'
      this.navigateAndRead('/ia', 'Noticias sobre la Inteligencia Artificial. Titular:Google Glass revive gracias a la inteligencia artificial de Gemini, Google no ha tirado la toalla con sus gafas de realidad aumentada. Pese a anunciar que dejaría de producir las Google Glass a comienzos de 2023, la tecnológica mantiene vivo el desarrollo..Titular:Cómo probar GPT-4o, la nueva inteligencia artificial de OpenAI.OpenAI revolucionó Internet y el sector de la inteligencia artificial. Su evento prometía ser interesante y consiguió dejar a todos con la boca abierta gracias a la llegada de GPT-4o. Esta nueva IA no solo es más capaz cuando interactúa con el texto..Titular:La innovadora técnica de Apple para proteger tus datos cuando utilices su inteligencia artificial.Apple está puliendo los últimos detalles de conferencia de desarrolladores, WWDC 2024, una de las más importantes en mucho tiempo. La llegada de la inteligencia artificial y su integración en el iPhone ha generado una expectativa que no se veía en años..Titular:NVIDIA integrará sus GPU en los ordenadores Copilot+ PC de inteligencia artificial..La presentación de Copilot+ PC dejó a muchos pensando en cuál sería la respuesta de NVIDIA ante los ordenadores de Microsoft. La compañía no ha tardado en reaccionar y anunció hoy que ofrecerá sus GPU para potenciar la nueva categoría de portátiles..Titular:Tiembla, Qualcomm: NVIDIA prepara un chip ARM para los PC con inteligencia artificial.NVIDIA ya trabaja en un chip para PC que competirá de frente con el Snapdragon X Elite de Qualcomm. Los rumores más recientes apuntan a que se asociará con MediaTek para fabricar un SoC enfocado a los ordenadores portátiles..Titular:NVIDIA anuncia Rubin AI, la plataforma que va a revolucionar la inteligencia artificial.En una conferencia previa al Computex 2024 NVIDIA ha dejado claro en qué están trabajando de cara al futuro. La actual tercera empresa más valiosa del planeta ha conseguido este hito gracias a la inteligencia artificial..Titular:Google se apoyará en la inteligencia artificial para resolver el problema más grande de Android.Google anunció que usará la inteligencia artificial para resolver uno de los problemas más añejos de Android: el malware. El gigante tecnológico anunció en I/O 2024 que lanzará una versión mejorada de Google Play Protect que detectará aplicaciones fraudulenta..Titular:Así funciona la inteligencia artificial de Google que predice catástrofes climáticas: «Revolucionará la meteorología».El auge de los modelos generativos es de amplio espectro y sus beneficios —junto con sus riesgos— irradian en múltiples sectores. Un proyecto recientemente presentado por Google es una muestra adicional de ese alcance amplio. Se trata de SEEDS'); // Navegamos a la ruta '/ia' y leemos 'Noticias Recientes sobre IA...'
    } else if (command.includes('navegar a euro')) {
      this.navigateAndRead('/eurovision', 'Noticias sobre Eurovisión..Titular:CASI CHANELAZO. ESPAÑA CERCA DE GANAR EUROVISION 2022.Chanel no tuvo mucho apoyo de su pais representante, España debido a que la gente quería mandar otro artista y llegaron incluso amenazarla de muerte entre otras cosas.Se podría decir que nos dejó a todos boqui abiertos despues de su pedazo de actuación y de su merecida o injusticia para muchos posicion TOP 3 con 459puntos.. Titular:EUROVISION 2023, CON BLANCA PALOMA VOLAMOS HACIA ABAJO. Blanca paloma tenia que defender el papelón de channel en Eurovisión 2022 que nos dejó a las puertas de un top 2. Sin embargo la cancion "EAEA": "la canción presenta la celebración del poder y la fuerza de los ancestros femeninos." No pareció gustarles a los espectadores y jurados y quedamos en el top 17 con 100puntos..Titular:EUROVISION 2024, BATACAZO AL PUESTO 22 con 30 puntos.Nebulossa no consiguió con su canción polemica "Zorra" convencer a los eurofans y mucho menos al jurado y espectadores. Volvemos a quedar entre los ultimos tras un fiasco muy gordo, España SOLO a ganado 1 vez. Segun las declaraciones de la artista se esperaban un resultado mas positivo y no uno tan negativo.');
    } else if (command.includes('navegar a videojuegos')) {
      this.navigateAndRead('/videojuegos', 'Noticias sobre VideoJuegos..Titular:Vuelve el Split de verano de Superliga.La Superliga de League of Legends es la competición de videojuegos más importante de España, donde los mejores equipos del país se enfrentan entre ellos. Este año nos representaran 6 equipos españoles en el EMEA master ("liga europea"). La superliga siempre viene cargada de sorpresas que no te dejaran indiferente y este split no será menos. La superliga empezó el 22 de Abril y esto son los resultados actuales..Titular:Vuelve la LEC, la maxima competicion europea de League Of Legends..La LEC, es la maxima competicion europea en la que todos los equipos desearian competir en sus respectivas regiones en nuestro caso es la LEC en Norte America es la LCS. La LEC es una competicion muy importante ya que los equipos que compiten en ella tienen la oportunidad de clasificarse para el mundial de League Of Legends donde lo ven millones de personas en todo el mundo. Los equipos tendran que sumar puntos para el LEC SUMMER FINALS que es la clasificacion para el mundial, tan solo 3 equipos de nuestra region podran luchar por la ansiada copa mundial y convertirte en leyenda. La fiesta empezará el 8 de Junio.');
    } else if (command.includes('navegar a internacional')) {
      this.navigateAndRead('/guerra', 'Contenido sobre internacional...');
    } else if (command.includes('navegar a política')) {
      this.navigateAndRead('/politica', 'Contenido sobre política...');
    } else if (command.includes('navegar a elecciones')) {
      this.navigateAndRead('/elecciones', 'Contenido sobre elecciones...');
    } else if (command.includes('navegar a estudios')) {
      this.navigateAndRead('/educacion', 'Contenido sobre estudios...');
    } else if (command.includes('volver')) {
      this.navigateAndRead('/inicio', 'Titular:PSOE y Vox rechazan la cuestión de confianza de José Luis Sanz: 30 días para presentar una moción de censura en Sevilla..El gobierno de Jose Luis Sanz alcalde de Sevilla ha perdido hoy la cuestion de confianza debido a que no tenia mayoria para aprobar unos presupuestos para la ciudad, los grupos de la oposicion tienen 1 mes para presentar una mocion de censura..Titular:Tomares (Sevilla) inaugura este sábado la Plaza Hermanos Costaleros con motivo del 450 aniversario de la Hermandad.El alcalde de Tomares (Sevilla), José María Soriano, inaugura este sábado, 8 de junio, la Plaza Hermanos Costaleros con motivo del 450 Aniversario de la Hermandad Sacramental.el colectivo Hermanos Costaleros cumple en 2024 44 años de historia, "casi medio siglo de trabajo, fe y devoción" bajo los titulares de la Hermandad Sacramental, según apunta el Consistorio..Titular:Lluvia para rato: una vaguada y entrada de norte prolongarán las tormentas en España.El lunes 10 la previsión marca que podrían darse en Extremadura, Madrid, Castilla-La Mancha, Andalucía y en el interior de la C. Valenciana, Murcia y norte de Aragón y Cataluña. El martes, podrían formarse en las mismas regiones pero aumentando la inestabilidad en el este peninsular..Titular:La Fiscalía Europea ve indicios de malversación, tráfico de influencias y prevaricación en el caso Begoña Gómez.El procedimiento abierto por la Fiscalía Europea permanece bajo secreto, pero afecta por completo a Begoña Gómez, ya que cuenta con la condición de «denunciada» en la causa.La esposa del presidente ya tiene la condición procesal de imputada y la han llamado a declarar el próximo 5 de julio por los delitos de tráfico de influencias y corrupción en el sector privado..Titular:Armengol acusa al PP de montar un "bulo" con el caso Koldo y pide votar en masa para descalificar "esa forma de hacer política".Francina Armengol en su tercera comparecencia ante una comisión de investigación sobre el caso Koldo, en esta ocasión en el Senado, ha reprochado a los partidos de la oposición -PP, Vox y UPN- de tratar de "montar un bulo" con el caso Koldo con la intención de "inhabilitarla" como presidenta del Congreso..Titular:Qué dicen las encuestas de las elecciones europeas 2024 en España..La ultima encuesta fue publicada por el CIS y para sorpresa de nadie el PSOE ganaría las elecciones europeas.que sería la fuerza política que ganaría en España, con unos votos que irían entre el 31,6% y el 33,2%.Le seguirían el PP (28,3% - 30,5%), Vox (9,9% - 11%), Sumar (5,4% - 7,1%), Se acabó la fiesta (4,9% - 5,7%), Ahora Repúblicas (3,7% - 4,1%) y Podemos (3,6% - 3,9%)..Titular:Unanimidad entre progresistas y conservadores del CGPJ para responder a los ataques de Pedro Sánchez.La Comisión Permanente del CGPJ celebrará una reunión extraordinaria el próximo lunes 10 para respaldar a la carrera judicial tras los señalamientos del presidente del Gobierno, Pedro Sánchez. La decisión de salir en defensa del juez que acaba de imputar a Begoña Gómez se acordó de forma unánime entre los siete vocales progresistas y conservadores que integran esta comisión..Titular:Von der Leyen recalibra su acercamiento a la derecha y vuelve a mirar a Los Verdes.La candidata principal del PP europeo, que lleva meses coqueteando con Meloni y su grupo ultra, confía en que los resultados de ecologistas y liberales sean mejores de lo esperado y permitan reeditar una gran coalición moderada en la UE..Titular:Th3Antonio y un soñado debut en LEC: "Cada día soy mejor, si me preguntas mañana, te diré que soy mejor que hoy".Tras nueve años compitiendo en la élite nacional y una gran riestra de títulos a su espalda, el toplaner español por fin gozará de su oportunidad en LEC, y no podía ser con otro equipo que no fuese GiantX.');
    } else if (command.includes('parar de hablar')) {
      this.automatizacionvoz.stop(); // Paramos de hablar si decimos parar de hablar
    }
  }

  private navigateAndRead(route: string, text: string) { // Metodo de Navegar y Leer
    this.router.navigate([route]).then(() => { // Navegamos a la ruta
      this.pauseListening(); // Pausamos la escucha
      this.automatizacionvoz.speak(text).then(() => { // Hablamos el texto
        this.resumeListening(); // Continuamos la escucha
      });
    });
  }

  private pauseListening() { // Metodo de Pausar la Escucha
    this.stopListening(); // Paramos de escuchar
    clearTimeout(this.pauseTimeout); // Limpiamos el tiempo de espera
    this.pauseTimeout = setTimeout(() => { // Esperamos un tiempo
      this.startListening(); // Empezamos a escuchar
    }, 2222); // 2.222 segundos
  }

  private resumeListening() { // Metodo de Continuar la Escucha
    this.startListening(); // Empezamos a escuchar
  }
}
