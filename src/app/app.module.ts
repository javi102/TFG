import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { registerLocaleData } from '@angular/common';
import localeEsEs from '@angular/common/locales/es';
import { EleccionesComponent } from './elecciones/elecciones.component';
import { EurovisionComponent } from './eurovision/eurovision.component';
import { IaComponent } from './ia/ia.component';
import { BotNoticiaService } from './api/bot-noticia.service'; 
import { HttpClientModule } from '@angular/common/http';
import { EducacionComponent } from './educacion/educacion.component';
import { PoliticaComponent } from './politica/politica.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { ClasificacionLecComponent } from './clasificacion-lec/clasificacion-lec.component';
registerLocaleData(localeEsEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    EurovisionComponent,
    HomeComponent,
    InicioComponent,
    EleccionesComponent,
    IaComponent,
    EducacionComponent,
    PoliticaComponent,
    VideojuegosComponent,
    ClasificacionComponent,
    ClasificacionLecComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'},
    BotNoticiaService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
