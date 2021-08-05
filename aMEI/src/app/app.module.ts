import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatoComponent } from './contato/contato.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    MenuComponent,
    EntrarComponent,
    RegistrarComponent,
    SobreNosComponent,
    ContatoComponent,
    InicioComponent,
    TemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
