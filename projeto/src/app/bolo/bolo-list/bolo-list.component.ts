import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolo-list',
  templateUrl: './bolo-list.component.html',
  styleUrls: ['./bolo-list.component.css']
})
export class BoloListComponent implements OnInit {

  lista: string[];
  novo: string;
  showOne: boolean;

  constructor() {
    this.showOne = false;
  }

  ngOnInit() {
    this.lista = ['Cenoura', 'Leite Ninho', 'Chocolate'];
  }

  clickNovo() {
    if (this.novo !== undefined && this.novo.trim().length > 0) {
      this.lista.push(this.novo);
      this.novo = '';
    }
  }

}
