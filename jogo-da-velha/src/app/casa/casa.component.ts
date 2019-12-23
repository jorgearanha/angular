import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Casa } from '../casa';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss']
})
export class CasaComponent implements OnInit {

  @Input() ttone: string;
  @Input() pos: number[];
  @Output() notificacao = new EventEmitter<number[]>();


  public classe: string;
  public src: string;

  public srcs = {
    "chocottone": "../../assets/images/chocottone.png",
    "panettone": "../../assets/images/panettone.png"
  }

  public classes = {
    "chocottone": "choco",
    "panettone": "pane"
  }

  ngOnInit() {
    this.classe = "";
    this.src = "";
  }

  onClick() {
    this.imprimeTtone();
    this.notificacao.emit(this.pos);
  }

  imprimeTtone() {
    //imprime o ttone de acordo com o ttone do input
    if (!this.src) {
      this.classe = this.classes[this.ttone];
      this.src = this.srcs[this.ttone];
    }
  }
}
