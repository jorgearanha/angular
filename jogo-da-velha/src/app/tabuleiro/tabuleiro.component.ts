import { Component, OnInit } from '@angular/core';
import { Casa } from '../casa';
import Swal, {  } from "sweetalert2";

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss']
})
export class TabuleiroComponent implements OnInit {

  public tabuleiro: Casa[][] = [];

  public ttone: string;

  panettone: string;
  chocottone: string;

  constructor() { }

  ngOnInit() {
    this.tabuleiro = [
      [new Casa(0, 0), new Casa(0, 1), new Casa(0, 2)],
      [new Casa(1, 0), new Casa(1, 1), new Casa(1, 2)],
      [new Casa(2, 0), new Casa(2, 1), new Casa(2, 2)]
    ];

    this.panettone = "panettone";
    this.chocottone = "chocottone";

    this.ttone = this.panettone;
  }

  eventoFilho() {
    this.alteraTtone();
    let vencedor = this.verificaVencedor()
    if (vencedor) {
      setTimeout(() => {
        Swal.fire("Parabéns!", "O vencedor foi: " + vencedor.ttone, "success")
      }, 300);
    }
  }

  alteraTtone() {
    if (this.ttone == this.panettone) this.ttone = this.chocottone
    else this.ttone = this.panettone;
    //console.log(this.ttone);
  }

  verificaVencedor() {
    let flag: boolean = false;
    for (let i = 0; i < this.tabuleiro.length; i++) {
      if (this.comparaTres(this.tabuleiro[i][0].ttone, this.tabuleiro[i][1].ttone, this.tabuleiro[i][2].ttone)) {
        return this.tabuleiro[i][1];
      } else if (this.comparaTres(this.tabuleiro[0][i].ttone, this.tabuleiro[1][i].ttone, this.tabuleiro[2][i].ttone)) {
        return this.tabuleiro[1][i];
      } else if (this.comparaTres(this.tabuleiro[0][0].ttone, this.tabuleiro[1][1].ttone, this.tabuleiro[2][2].ttone) ||
        this.comparaTres(this.tabuleiro[0][2].ttone, this.tabuleiro[1][1].ttone, this.tabuleiro[2][0].ttone)) {
        return this.tabuleiro[1][1];
      }
    }
  }

  comparaTres(a: string, b: string, c: string) {
    return ((a == b) && (a == c) && (a != ''));
  }
}
