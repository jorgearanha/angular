import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { PaisDisplayComponent } from './pais-display/pais-display.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaisesListComponent, PaisDisplayComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [PaisesListComponent]
})
export class PaisesModule { }
