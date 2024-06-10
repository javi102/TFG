import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { EleccionesComponent } from './elecciones/elecciones.component';
import { EurovisionComponent } from './eurovision/eurovision.component';
import { IaComponent } from './ia/ia.component';
import { GuerraComponent } from './guerra/guerra.component';
import { EducacionComponent } from './educacion/educacion.component';
import { PoliticaComponent } from './politica/politica.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'inicio',
    component: InicioComponent
  },

  {
    path: 'elecciones',
    component:EleccionesComponent
  },
  
 
  {
    path: 'eurovision',
    component:EurovisionComponent
  },

  {
    path:'ia',
    component:IaComponent
  },

  {
    path:'guerra',
    component: GuerraComponent
  },

  {
    path:'educacion',
    component: EducacionComponent
  },

  

  {
    path:'politica',
    component:PoliticaComponent
  
  },

  {
    path: 'videojuegos',
    component:VideojuegosComponent
  },

  
  
  
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
