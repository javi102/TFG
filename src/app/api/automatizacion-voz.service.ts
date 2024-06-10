import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutomatizacionVozService {

  private synthSpeech: SpeechSynthesis;
  private speechUtterance!: SpeechSynthesisUtterance; // Inicializamos la variable speechUtterance
  //SpeechSynthesisUtterance es una clase que representa un mensaje de voz que se va a leer en el sistema de síntesis de voz.
  constructor() {
    this.synthSpeech = window.speechSynthesis; // Inicializamos la síntesis de voz
  }

  speak(text: string): Promise<void> { // Metodo de Hablar
    return new Promise((resolve, reject) => {  // Creamos una promesa que la promesa es como si te prometiese si algo va a tener exito o no
      if (this.synthSpeech.speaking) { // Si está hablando
        reject('SpeechSynthesis is already speaking.'); // Rechazamos la promesa
        return; // Salimos de la función
      }

      this.speechUtterance = new SpeechSynthesisUtterance(text); // Creamos un nuevo objeto SpeechSynthesisUtterance
      this.speechUtterance.onend = () => { // Cuando termina de hablar
        resolve(); // Resolvemos la promesa
      };
      this.speechUtterance.onerror = (event) => { // Si hay un error
        reject(event); // Rechazamos la promesa
      };
      this.synthSpeech.speak(this.speechUtterance); // Hablamos el texto
    });
  }

  stop() { //Metodo de Parar
    if (this.synthSpeech.speaking) { // Si está hablando
      this.synthSpeech.cancel(); // Paramos el habla
    }
  }
}