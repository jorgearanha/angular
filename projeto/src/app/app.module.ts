import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoloListComponent } from './bolo/bolo-list/bolo-list.component';
import { PaisesModule } from './paises/paises.module';
import { PagLayoutComponent } from './pag-layout/pag-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    BoloListComponent,
    PagLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PaisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
