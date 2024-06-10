import { Component } from '@angular/core';

@Component({
  selector: 'app-clasificacion-lec',
  templateUrl: './clasificacion-lec.component.html',
  styleUrls: ['./clasificacion-lec.component.css']
})
export class ClasificacionLecComponent {
  teams = [
    { name: 'GIANTX', logo: '../../assets/juegos/giantx.jpg', victories: 0, defeats: 0, winRate: 0 },
    { name: 'SK GAMING', logo: '../../assets/juegos/sk gaming.jpg', victories: 0, defeats: 0, winRate: 0 },
    { name: 'ROGUE', logo: '../../assets/juegos/rogue.jpg', victories: 0, defeats: 0, winRate: 0 },
    { name: 'MAD LIONS KOI', logo: '../../assets/juegos/MadLions.jpg', victories: 0, defeats: 0, winRate: 0 },
    { name: 'TEAM BDS', logo: '../../assets/juegos/teamBDS.jpg', victories: 0, defeats: 0, winRate: 0 },
    { name: 'TEAM HERETICS', logo: '../../assets/juegos/heretics.jpg', victories: 0, defeats: 0, winRate: 0 },
    { name: 'KARMINE CORP', logo: '../../assets/juegos/karmine.jpg', victories: 0, defeats: 0, winRate: 0 },
    { name: 'FNATIC', logo: '../../assets/juegos/fnatic.jpg', victories: 0, defeats: 0, winRate: 0 },
    { name: 'G2 ESPORTS', logo: '../../assets/juegos/g2.jpg', victories: 0, defeats: 0, winRate: 0 },
    { name: 'TEAM VITALITY', logo: '../../assets/juegos/vitality.jpg', victories: 0, defeats: 0, winRate: 0 }
  ];
}
