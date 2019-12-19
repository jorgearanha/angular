import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CasaComponent } from './casa/casa.component';

@NgModule({
  declarations: [
    AppComponent,
    TabuleiroComponent,
    CabecalhoComponent,
    CasaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
