import { Component, OnInit } from '@angular/core';
import { Casa } from '../casa';
import Swal, { } from "sweetalert2";
import { TabuleiroService } from "../tabuleiro.service";

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss']
})
export class TabuleiroComponent implements OnInit {

  public tabuleiro: Casa[][] = [];
  public ttone: string;

  constructor(private tabuleiroSevice: TabuleiroService) { }

  ngOnInit() {
    this.getTtone();
    this.getCasas();
  }

  eventoFilho(casa: Casa) {
    let jogada = this.tabuleiroSevice.jogada();
    console.log(jogada['vencedor']);

    if (jogada['vencedor'].length != 0) {

      Swal.fire({
        imageUrl: '../../assets/images/' + jogada['vencedor'][0].ttone + '.png',
        imageWidth: 200,
        imageHeight: 200,
        showConfirmButton: true,
        confirmButtonColor: '#8B0000',
        title: "Parabéns!",
        text: "O vencedor foi: " + jogada['vencedor'][0].ttone,
        background: '#F0F8FF url(../../assets/background/alert.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("../../assets/images/xmas.gif")
          left top
          no-repeat`,
        html:
          'Compre, ' +
          '<a href="//sweetalert2.github.io">aqui</a>',
      })

      this.getCasas();
    } else if (jogada['velha']) {

      Swal.fire({
        title: "Opa!!",
        text: "Deu velha",
        icon: "warning",
        showConfirmButton: true,
        confirmButtonColor: '#d20000',
        background: '#F0F8FF url(../../assets/background/alert.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("../../assets/images/wtf.gif")
          left top
          no-repeat`
      });

      this.getCasas();
    }

    this.getTtone();
  }

  getCasas(): void {
    //Recebe o tabuleiro usando Service -- Observable
    this.tabuleiroSevice.getCasas()
      .subscribe(tabuleiro => this.tabuleiro = tabuleiro);
  }

  getTtone(): void {
    //Recebe a posicao atual de Ttone usando Service -- Observable
    this.tabuleiroSevice.getTtone()
      .subscribe(ttone => this.ttone = ttone);
  }

  setCasa(casa: Casa): void{
    let i: number;
    let j: number;

    for (let a = 0; a < this.tabuleiro.length; a++) {
      for (let b = 0; b < this.tabuleiro[i].length; b++) {
        if (this.tabuleiro[i][j] = casa) {
          i = a;
          j = b;
        }
      }
    }
    this.tabuleiroSevice.setCasa(casa, i, j);
  }

}
