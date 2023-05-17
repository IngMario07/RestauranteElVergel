import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DesayunosComponent } from './pages/desayunos/desayunos.component';
import { BreacfastComponent } from './pages/breacfast/breacfast.component';
import { ComidaComponent } from './pages/comida/comida.component';
import { LunchComponent } from './pages/lunch/lunch.component';
import { PostresComponent } from './pages/postres/postres.component';
import { PostresIngComponent } from './pages/postres-ing/postres-ing.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { VinosComponent } from './pages/vinos/vinos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DesayunosComponent,
    BreacfastComponent,
    ComidaComponent,
    LunchComponent,
    PostresComponent,
    PostresIngComponent,
    BebidasComponent,
    VinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
