import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-display',
  templateUrl: './pais-display.component.html',
  styleUrls: ['./pais-display.component.css']
})
export class PaisDisplayComponent implements OnInit {

  @Input() pais: Pais;
  @Output() notificacao = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('Display Paises Click');
    this.notificacao.emit(this.pais);
  }

}