import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { PaisDisplayComponent } from './pais-display/pais-display.component';



@NgModule({
  declarations: [PaisesListComponent, PaisDisplayComponent],
  imports: [
    CommonModule
  ]
})
export class PaisesModule { }
