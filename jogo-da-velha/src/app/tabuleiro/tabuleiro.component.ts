import { Component, OnInit } from '@angular/core';
import { Casa } from '../casa';
import Swal, { } from "sweetalert2";

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss']
})
export class TabuleiroComponent implements OnInit {

  public tabuleiro: Casa[][] = [];
  public arrayVencedores = [];

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

    this.arrayVencedores = [
      [this.tabuleiro[0][0], this.tabuleiro[0][1], this.tabuleiro[0][2]],
      [this.tabuleiro[1][0], this.tabuleiro[1][1], this.tabuleiro[1][2]],
      [this.tabuleiro[2][0], this.tabuleiro[2][1], this.tabuleiro[2][2]],
      [this.tabuleiro[0][0], this.tabuleiro[1][0], this.tabuleiro[2][0]],
      [this.tabuleiro[0][1], this.tabuleiro[1][1], this.tabuleiro[2][1]],
      [this.tabuleiro[0][2], this.tabuleiro[1][2], this.tabuleiro[2][2]],
      [this.tabuleiro[0][0], this.tabuleiro[1][1], this.tabuleiro[2][2]],
      [this.tabuleiro[0][2], this.tabuleiro[1][1], this.tabuleiro[2][0]]
    ]

    this.panettone = "panettone";
    this.chocottone = "chocottone";

    this.ttone = this.panettone;
  }

  eventoFilho() {
    this.alteraTtone();
    this.verificaVencedor();
  }

  alteraTtone() {
    if (this.ttone == this.panettone) this.ttone = this.chocottone
    else this.ttone = this.panettone;
    //console.log(this.ttone);
  }

  verificaVencedor(): void {
    let casas: Casa[] = [];

    for (let i = 0; i < this.arrayVencedores.length; i++) {
      if (this.comparaTres(this.arrayVencedores[i][0].ttone, this.arrayVencedores[i][1].ttone, this.arrayVencedores[i][2].ttone)) casas = this.arrayVencedores[i];
    }

    console.log(casas);
    

    if (casas.length != 0) {
      setTimeout(() => {
        Swal.fire({
          imageUrl: '../../assets/images/' + casas[0].ttone + '.png',
          imageWidth: 200,
          imageHeight: 200,
          title: "Parabéns!",
          text: "O vencedor foi: " + casas[0].ttone,
          background: '#F0F8FF url(../../assets/background/alert.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("../../assets/images/xmas.gif")
            left top
            no-repeat`
        }).then((result) => {
          if (result.value) {
            setTimeout(() => {
              this.tabuleiro = [
                [new Casa(0, 0), new Casa(0, 1), new Casa(0, 2)],
                [new Casa(1, 0), new Casa(1, 1), new Casa(1, 2)],
                [new Casa(2, 0), new Casa(2, 1), new Casa(2, 2)]
              ];
            }, 500);
          }
        });
      }, 300);
    } else {
      //VERIFICA VELHA
      //Começa como true e verifica campo por campo com a negação de ativo
      // ou seja, se a div já foi clicada ativo é false, e sua negação true.
      //Se alguma opção não foi clicada ela está como true e sua negação é false
      // logo true & false = false.
      let deuVelha: boolean = true;
      for (let i = 0; i < this.tabuleiro.length; i++) {
        for (let j = 0; j < this.tabuleiro[i].length; j++) {
          deuVelha = deuVelha && !this.tabuleiro[i][j].ativo;
        }
      }
      if(deuVelha) {
        setTimeout(() => {
          Swal.fire({
            title: "Opa!!",
            text: "Deu velha",
            icon: "warning",
            background: '#F0F8FF url(../../assets/background/alert.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("../../assets/images/wtf.gif")
              left top
              no-repeat`
          });
        }, 300);
      }
    }
  }

  verificaVelha(): boolean {
    //Começa como true e verifica campo por campo com a negação de ativo
    // ou seja, se a div já foi clicada ativo é false, e sua negação true.
    //Se alguma opção não foi clicada ela está como true e sua negação é false
    // logo true & false = false.
    let deuVelha: boolean = true;
    for (let i = 0; i < this.tabuleiro.length; i++) {
      for (let j = 0; j < this.tabuleiro[i].length; j++) {
        deuVelha = deuVelha && !this.tabuleiro[i][j].ativo;
      }
    }
    return deuVelha;
  }

  comparaTres(a: string, b: string, c: string) {
    return ((a == b) && (a == c) && (a != ''));
  }
}
