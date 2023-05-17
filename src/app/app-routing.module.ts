import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { BreacfastComponent } from './pages/breacfast/breacfast.component';
import { ComidaComponent } from './pages/comida/comida.component';
import { LunchComponent } from './pages/lunch/lunch.component';
import { PostresComponent } from './pages/postres/postres.component';
import { PostresIngComponent } from './pages/postres-ing/postres-ing.component';
import { VinosComponent } from './pages/vinos/vinos.component';
import { DesayunosComponent } from './pages/desayunos/desayunos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'desayunos', component: DesayunosComponent},
      {path: 'inicio', component: InicioComponent},
      {path: 'bebidas', component:BebidasComponent},
      {path: 'breacfast', component:BreacfastComponent},
      {path: 'comida', component: ComidaComponent},
      {path: 'lunch', component: LunchComponent},
      {path: 'postres', component: PostresComponent},
      {path: 'postres-ing', component: PostresIngComponent},
      {path: 'vinos', component: VinosComponent},
      { path: '**', redirectTo: 'inicio' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
