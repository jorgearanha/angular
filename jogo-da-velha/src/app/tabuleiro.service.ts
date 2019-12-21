import { Injectable, OnInit } from '@angular/core';
import { Casa } from "./casa";
import Swal from 'sweetalert2';
import { Observable, of } from 'rxjs';

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

  public getCasas(): Observable<Casa[][]> {
    return of(this.tabuleiro);
  }

  setCasa(casa: Casa, i:number, j:number){
    this.tabuleiro[i][j] = casa;  
  }

  public getTtone() {
    console.log(this.ttone);
    return of(this.ttone);
  }

  public jogada(): {} {
    this.alteraTtone();
    return this.verificaVencedor();
  }

  private reinicializaTab() {

    for (let i = 0; i < this.tabuleiro.length; i++) {
      for (let j = 0; j < this.tabuleiro[i].length; j++) {
        this.tabuleiro[i][j].clicado = false;
        this.tabuleiro[i][j].ttone = "";
      }
    }

    this.ttone = this.panettone;

  }

  private alteraTtone() {
    if (this.ttone == this.panettone) this.ttone = this.chocottone;
    else this.ttone = this.panettone;
  }

  private verificaVencedor() {

    let vencedor = false;
    let resultado:{'vencedor':Casa[], 'velha': boolean} = {'vencedor': [], 'velha': false}

    for (let i = 0; i < this.arrayVencedores.length; i++) {
      if (this.comparaTres(this.arrayVencedores[i][0].ttone, this.arrayVencedores[i][1].ttone, this.arrayVencedores[i][2].ttone))
        resultado['vencedor'] = this.arrayVencedores[i];
    }

    if (resultado['vencedor'].length != 0) {
      this.reinicializaTab();
    } else {
      //VERIFICA VELHA
      //Começa como true e verifica campo por campo com a negação de ativo
      // ou seja, se a div já foi clicada ativo é false, e sua negação true.
      //Se alguma opção não foi clicada ela está como true e sua negação é false
      // logo true & false = false.
      for (let i = 0; i < this.tabuleiro.length; i++) {
        for (let j = 0; j < this.tabuleiro[i].length; j++) {
          resultado['velha'] = resultado['velha'] && this.tabuleiro[i][j].clicado;
        }
      }

      if (resultado['velha']) {
        this.reinicializaTab();
      }

    }
    return resultado;

  }

  private comparaTres(a: string, b: string, c: string) {
    return ((a == b) && (a == c) && (a != ''));
  }
}
