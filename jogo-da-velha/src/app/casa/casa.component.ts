import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Casa } from '../casa';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss']
})
export class CasaComponent implements OnInit {

  @Input() ttone: string;
  @Input() casa: Casa;
  @Output() notificacao = new EventEmitter();

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
    if (!this.casa.clicado) {
      this.imprimeTtone();
      this.notificacao.emit();
    }
  }

  imprimeTtone() {
    //modifica a instância de casa referente a casa;
    this.casa.clicado = true;
    this.casa.ttone = this.ttone;

    //imprime o ttone de acordo com o ttone do input
    this.classe = this.classes[this.ttone];
    this.src = this.srcs[this.ttone];
  }
}
