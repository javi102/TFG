import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReconocimientoVozService } from '../api/reconocimiento-voz.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {
  date = new Date();
  transcript: string = '';
  speechSubscription!: Subscription;

  constructor(private reconocimientoVozService: ReconocimientoVozService) { }

  imagenes = [
    '../../assets/fotosgenerales/foto2.jpg',
    '../../assets/fotosgenerales/foto3.jpg',
    '../../assets/fotosgenerales/foto4.jpg'
  ];

  currentImageIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startImageRotation();
    this.Start(); // Iniciamos el reconocimiento de voz al cargar el componente
  }

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imagenes.length;
    }, 5000);
  }

  Start() {
    this.reconocimientoVozService.startListening();
  }

  Stop() {
    this.reconocimientoVozService.stopListening();
  }

  ngOnDestroy() {
    if (this.speechSubscription) {
      this.speechSubscription.unsubscribe();
    }
    this.Stop(); // Paramos el reconocimiento de voz al destruir el componente
  }
}
