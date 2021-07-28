import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EntrarComponent } from '../entrar/entrar.component';
import { RegistrarComponent } from '../registrar/registrar.component';

const routes: Routes = [

  {path:'',
  redirectTo: 'sobre',
  pathMatch:'full'
},


  {path:'entrar',
  component: EntrarComponent
  },

  {path:'registrar',
  component: RegistrarComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }