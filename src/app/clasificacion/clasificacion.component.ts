import { Component } from '@angular/core';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent {
  teams = [
    { name: 'RAMBOOT CLUB', logo: '../../assets/juegos/Ramboot.jpg', victories: 5, defeats: 0, winRate: 100.0 },
    { name: 'BARÇA ESPORTS', logo: '../../assets/juegos/barca.jpg', victories: 4, defeats: 1, winRate: 80.0 },
    { name: 'UCAM ESPORTS', logo: '../../assets/juegos/Ucam.jpg', victories: 3, defeats: 2, winRate: 60.0 },
    { name: 'MOVISTAR KOI', logo: '../../assets/juegos/koi.jpg', victories: 3, defeats: 2, winRate: 60.0 },
    { name: 'LOS HERETICS', logo: '../../assets/juegos/heretics.jpg', victories: 3, defeats: 2, winRate: 60.0 },
    { name: 'GIANTX PRIDE', logo: '../../assets/juegos/giantx.jpg', victories: 2, defeats: 3, winRate: 40.0 },
    { name: 'LUA GAMING', logo: '../../assets/juegos/lua.jpg', victories: 2, defeats: 3, winRate: 40.0 },
    { name: 'REBELS GAMING', logo: '../../assets/juegos/rebels.jpg', victories: 1, defeats: 4, winRate: 20.0 },
    { name: 'GUASONES', logo: '../../assets/juegos/guasones.jpg', victories: 1, defeats: 4, winRate: 20.0 },
    { name: 'ZETA', logo: '../../assets/juegos/zeta.jpg', victories: 1, defeats: 4, winRate: 20.0 }
  ];
}
