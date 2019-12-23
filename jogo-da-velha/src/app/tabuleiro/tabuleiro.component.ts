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

  eventoFilho(pos: number[]) {

    //index do componente filho casa que recebeu um clique
    let i = pos[0];
    let j = pos[1];

    if (!this.tabuleiro[i][j].clicado) {

      let jogada = this.tabuleiroSevice.jogada(i, j);

      if (jogada['vencedor'].length != 0) {
        this.mensagemVencedor(jogada['vencedor']);
      } else if (jogada['velha']) {
        this.mensagemVelha();
      }

      this.getTtone();

    }

  }
  getCasas(): void {
    //Recebe o tabuleiro usando Service -- Observable
    this.tabuleiro = this.tabuleiroSevice.getCasas()
  }

  getTtone(): void {
    //Recebe a posicao atual de Ttone usando Service -- Observable
    this.ttone = this.tabuleiroSevice.getTtone();
  }

  mensagemVencedor(vencedor): void {
    Swal.fire({
      imageUrl: '../../assets/images/' + vencedor[0].ttone + '.png',
      imageWidth: 200,
      imageHeight: 200,
      showConfirmButton: true,
      confirmButtonColor: '#8B0000',
      title: "Parabéns!",
      text: "O vencedor foi: " + vencedor[0].ttone,
      background: '#F0F8FF url(../../assets/background/alert.png)',
      backdrop: `
      rgba(0,0,123,0.4)
      url("../../assets/images/xmas.gif")
      left top
      no-repeat`,
    }).finally(() => {
      this.tabuleiroSevice.inicializaTab();
      this.getCasas();
      this.getTtone();
    });
  }

  mensagemVelha() {
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
    }).then(() => {
      this.tabuleiroSevice.inicializaTab();
      this.getCasas();
      this.getTtone();
    })
  }

}
