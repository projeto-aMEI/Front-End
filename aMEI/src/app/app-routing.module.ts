import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'sobre-nos',
    pathMatch: 'full'
  },

  {
    path: 'sobre-nos',
    component: SobreNosComponent
  },
  {
    path: 'entrar',
    component: EntrarComponent
  },

  {
    path: 'registrar',
    component: RegistrarComponent
  },

  {
    path: 'inicio',
    component: InicioComponent
  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
