import { Injectable, OnInit } from '@angular/core';
import { Casa } from "./casa";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TabuleiroService {

  public tabuleiro: Casa[][] = [];
  public arrayVencedores = [];

  public ttone: string;

  panettone: string;
  chocottone: string;

  constructor() {
    this.panettone = "panettone";
    this.chocottone = "chocottone";

    this.inicializaTab();
  }

  public getCasas(): Casa[][] {
    return this.tabuleiro;
  }

  public getTtone() {
    return this.ttone;
  }

  public jogada(i, j): {} {
    this.tabuleiro[i][j].clicado = true
    this.tabuleiro[i][j].ttone = this.ttone;
    this.alteraTtone();
    return this.verificaVencedor();
  }

  public inicializaTab() {
    this.tabuleiro = [
      [new Casa(), new Casa(), new Casa()],
      [new Casa(), new Casa(), new Casa()],
      [new Casa(), new Casa(), new Casa()]
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
    ];
    this.ttone = this.panettone;
  }

  private alteraTtone() {
    if (this.ttone == this.panettone) this.ttone = this.chocottone;
    else this.ttone = this.panettone;
  }

  private verificaVencedor() {

    let resultado: { 'vencedor': Casa[], 'velha': boolean } = { 'vencedor': [], 'velha': true }

    // Verifica no array de vencedores se o tabueleiro bate com alguma das combinações.
    for (let i = 0; i < this.arrayVencedores.length; i++) {
      if (this.comparaTres(this.arrayVencedores[i][0].ttone, this.arrayVencedores[i][1].ttone, this.arrayVencedores[i][2].ttone))
        resultado['vencedor'] = this.arrayVencedores[i];
    }

    //VERIFICA VELHA
    //Começa como true e verifica campo por campo com && 
    //se algum campo for false velha vai ser == false;
    for (let i = 0; i < this.tabuleiro.length; i++) {
      for (let j = 0; j < this.tabuleiro[i].length; j++) {
        resultado['velha'] = resultado['velha'] && this.tabuleiro[i][j].clicado;
      }
    }

    return resultado;

  }

  private comparaTres(a: string, b: string, c: string) {
    return ((a == b) && (a == c) && (a != ''));
  }
}
