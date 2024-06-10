import { Component } from '@angular/core';

interface Resultados {
  pais: string;
  puntos: number;
  bandera: string;
}

interface Resultados2{
  pais: string;
  puntos: number;
  bandera: string;

}

interface Resultados3 {
  pais: string;
  puntos: number;
  bandera: string;
}

@Component({
  selector: 'app-eurovision',
  templateUrl: './eurovision.component.html',
  styleUrls: ['./eurovision.component.css']
})
export class EurovisionComponent {
  resultados: Resultados[] = [
    { pais: 'Ucrania', puntos: 631, bandera: '../../assets/bandera_ucrania.jpg' },
    { pais: 'Reino Unido', puntos: 466, bandera: '../../assets/reino.jpg' },
    { pais: 'España', puntos: 459, bandera: '../../assets/bandera_españa.jpg' },
    { pais: 'Suecia', puntos: 438, bandera: '../../assets/suecia.jpg' },
    { pais: 'Serbia', puntos: 312, bandera: '../../assets/Serbia.jpg' },
    { pais: 'Italia', puntos: 268, bandera: '../../assets/italia.jpg' },
    { pais: 'Moldavia', puntos: 253, bandera: '../../assets/Moldavia.jpg' },
    { pais: 'Grecia', puntos: 215, bandera: '../../assets/Grecia.jpg' },
    { pais: 'Portugal', puntos: 207, bandera: '../../assets/Portugal.jpg' },
    { pais: 'Noruega', puntos: 182, bandera: '../../assets/Noruega.jpg' },
    { pais: 'Paises bajos', puntos: 171, bandera: '../../assets/Paises bajos.jpg' },
    { pais: 'Polonia', puntos: 151, bandera: '../../assets/Polonia.jpg' },
    { pais: 'Estonia', puntos: 141, bandera: '../../assets/Estonia.jpg' },
    { pais: 'Lituania', puntos: 128, bandera: '../../assets/Lituania.jpg' },
    { pais: 'Australia', puntos: 125, bandera: '../../assets/Australia.jpg' },
    { pais: 'Azerbaijan', puntos: 106, bandera: '../../assets/Azerbaijan.jpg' },
    { pais: 'Suiza', puntos: 78, bandera: '../../assets/Suiza.jpg' },
    { pais: 'Rumania', puntos: 65, bandera: '../../assets/Rumania.jpg' },
    { pais: 'Belgica', puntos: 64, bandera: '../../assets/Belgica.jpg' },
    { pais: 'Armenia', puntos: 61, bandera: '../../assets/Armenia.jpg' },
    { pais: 'Finlandia', puntos: 38, bandera: '../../assets/Finlandia.jpg' },
    { pais: 'Islandia', puntos: 20, bandera: '../../assets/islandia.jpg' },
    { pais: 'Francia', puntos: 17, bandera: '../../assets/Francia.jpg' },
    { pais: 'Alemania', puntos: 6, bandera: '../../assets//Alemania.jpg' },
  ];


  resultados2: Resultados2[] = [
    { pais: 'Suecia', puntos: 583, bandera: '../../assets/suecia.jpg' },
  { pais: 'Finlandia', puntos: 526, bandera: '../../assets/Finlandia.jpg' },
  { pais: 'Israel', puntos: 362, bandera: '../../assets/israel.jpg' },
  { pais: 'Italia', puntos: 350, bandera: '../../assets/italia.jpg' },
  { pais: 'Noruega', puntos: 268, bandera: '../../assets/Noruega.jpg' },
  { pais: 'Ucrania', puntos: 243, bandera: '../../assets/bandera_ucrania.jpg' },
  { pais: 'Bélgica', puntos: 182, bandera: '../../assets/Belgica.jpg' },
  { pais: 'Estonia', puntos: 168, bandera: '../../assets/Estonia.jpg' },
  { pais: 'Australia', puntos: 151, bandera: '../../assets/Australia.jpg' },
  { pais: 'Chequia', puntos: 129, bandera: '../../assets/chequia.jpg' },
  { pais: 'Lituania', puntos: 127, bandera: '../../assets/Lituania.jpg' },
  { pais: 'Chipre', puntos: 126, bandera: '../../assets/chipre.jpg' },
  { pais: 'Croacia', puntos: 123, bandera: '../../assets/croacia.jpg' },
  { pais: 'Armenia', puntos: 122, bandera: '../../assets/Armenia.jpg' },
  { pais: 'Austria', puntos: 120, bandera: '../../assets/austria.jpg' },
  { pais: 'Francia', puntos: 104, bandera: '../../assets/Francia.jpg' },
  { pais: 'España', puntos: 100, bandera: '../../assets/bandera_españa.jpg' },
  { pais: 'Moldavia', puntos: 96, bandera: '../../assets/Moldavia.jpg' },
  { pais: 'Polonia', puntos: 93, bandera: '../../assets/Polonia.jpg' },
  { pais: 'Suiza', puntos: 92, bandera: '../../assets/Suiza.jpg' },
  { pais: 'Eslovenia', puntos: 78, bandera: '../../assets/eslovenia.jpg' },
  { pais: 'Albania', puntos: 76, bandera: '../../assets/albania.jpg' },
  { pais: 'Portugal', puntos: 59, bandera: '../../assets/Portugal.jpg' },
  { pais: 'Serbia', puntos: 30, bandera: '../../assets/Serbia.jpg' },
  { pais: 'Reino Unido', puntos: 24, bandera: '../../assets/reino.jpg' },
  { pais: 'Alemania', puntos: 18, bandera: '../../assets/Alemania.jpg' },


  ];



  resultados3: Resultados3[] = [
    { pais: 'Suiza', puntos: 591, bandera: '../../assets/Suiza.jpg' },
    { pais: 'Croacia', puntos: 547, bandera: '../../assets/croacia.jpg' },
    { pais: 'Ucrania', puntos: 453, bandera: '../../assets/bandera_ucrania.jpg' },
    { pais: 'Francia', puntos: 445, bandera: '../../assets/Francia.jpg' },
    { pais: 'Israel', puntos: 375, bandera: '../../assets/israel.jpg' },
    { pais: 'Irlanda', puntos: 278, bandera: '../../assets/irlanda.jpg' },
    { pais: 'Italia', puntos: 268, bandera: '../../assets/italia.jpg' },
    { pais: 'Armenia', puntos: 183, bandera: '../../assets/Armenia.jpg' },
    { pais: 'Suecia', puntos: 174, bandera: '../../assets/suecia.jpg' },
    { pais: 'Portugal', puntos: 152, bandera: '../../assets/Portugal.jpg' },
    { pais: 'Grecia', puntos: 126, bandera: '../../assets/Grecia.jpg' },
    { pais: 'Alemania', puntos: 117, bandera: '../../assets/Alemania.jpg' },
    { pais: 'Luxemburgo', puntos: 103, bandera: '../../assets/luxemburgo.jpg' },
    { pais: 'Lituania', puntos: 90, bandera: '../../assets/Lituania.jpg' },
    { pais: 'Chipre', puntos: 78, bandera: '../../assets/chipre.jpg' },
    { pais: 'Letonia', puntos: 64, bandera: '../../assets/letonia.jpg' },
    { pais: 'Serbia', puntos: 54, bandera: '../../assets/Serbia.jpg' },
    { pais: 'Reino Unido', puntos: 46, bandera: '../../assets/reino.jpg' },
    { pais: 'Finlandia', puntos: 38, bandera: '../../assets/Finlandia.jpg' },
    { pais: 'Estonia', puntos: 37, bandera: '../../assets/Estonia.jpg' },
    { pais: 'Georgia', puntos: 34, bandera: '../../assets/georgia.jpg' },
    { pais: 'España', puntos: 30, bandera: '../../assets/bandera_españa.jpg' },
    { pais: 'Eslovenia', puntos: 27, bandera: '../../assets/eslovenia.jpg' },
    { pais: 'Austria', puntos: 24, bandera: '../../assets/austria.jpg' },
    { pais: 'Noruega', puntos: 16, bandera: '../../assets/Noruega.jpg' },

  ];

 
}
