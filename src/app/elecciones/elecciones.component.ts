import { Component, OnInit } from '@angular/core';
// Necesitamos importar Chart desde chart.js/auto
import Chart, { ChartType } from 'chart.js/auto';
@Component({
  selector: 'app-elecciones',
  templateUrl: './elecciones.component.html',
  styleUrls: ['./elecciones.component.css']
})
export class EleccionesComponent implements OnInit {

  // Atributos que almacenan los datos de las gráficas
  public pieChart: Chart | undefined;
  public barChart: Chart | undefined;

  ngOnInit(): void {

    const pieData = {
      labels: [
        'PP',
        'PSOE',
        'VOX',
        'PODEMOS',
        'SUMAR',
        'CEUS',
        'JUNTS',
        'AHORA REPÚBLICAS',
        'SALF'
      ],
      datasets: [{
        label: 'Resultados de las Elecciones Europeas',
        data: [22, 20, 6, 3, 3, 3, 2, 1, 1], 
        backgroundColor: [
          'rgb(54, 162, 235)', // PP
          'red', // PSOE
          'green', // VOX
          'purple', // PODEMOS
          'pink', // SUMAR
          'yellow', // CEUS
          'aqua', // JUNTS
          'rgb(255, 99, 132)', // AHORA REPÚBLICAS
          'rgb(00, 000, 000)'  // SALF
        ],
      }]
    };

    const barData = {
      labels: [
        'PP',
        'PSOE',
        'VOX',
        'PODEMOS',
        'SUMAR',
        'CEUS',
        'JUNTS',
        'AHORA REPÚBLICAS',
        'SALF'
      ],
      datasets: [{
        label: 'Votos por partido',
        data: [3000, 2500, 1500, 1000, 500,500 ,100, 500, 300, 1200], // Ajusta estos valores según tus datos
        backgroundColor: [
          'rgb(54, 162, 235)', // PP
          'red', // PSOE
          'green', // VOX
          'purple', // PODEMOS
          'pink', // SUMAR
          'yellow', // CEUS
          'aqua', // JUNTS
          'rgb(255, 99, 132)', // AHORA REPÚBLICAS
          'rgb(00, 000, 000)'  // SALF
             
        ],
       
      }]
    };

    // Creación de la gráfica
    this.pieChart = new Chart("pieChart", {
      type: 'pie' as ChartType, // Tipo de la gráfica 
      data: pieData // Datos 
    });

    // Creación de la gráfica de barras
    this.barChart = new Chart("barChart", {
      type: 'bar' as ChartType, // Tipo de la gráfica 
      data: barData // Datos 
    });
  }
}