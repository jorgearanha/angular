import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PesquisaPaisesService } from '../pesquisa-paises.service';
import { FormControl } from '@angular/forms';
import {
  debounceTime, distinctUntilChanged, filter,
  catchError, switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  /* Propriedades listagem por idioma */
  lista: string[];
  lang: string;

  /* Propriedades listagem por região*/
  term = new FormControl(); /*Reactive Forms */
  semResultado = false;
  paises: Array<Pais>;

  constructor(private apiRequest: PesquisaPaisesService) {
    this.lista = [];
    this.lang = 'pt';
  }

  ngOnInit() {
    this.atualizarListaPaisesPorIdioma();
    this.term.valueChanges
      .pipe(
        filter(term => term.trim().length > 3),
        debounceTime(400),
        distinctUntilChanged(),
        
        switchMap(
          (term) => {
            return this.apiRequest.ListarPaisesPorContinente(term)
              .pipe(
                catchError((e, c) => {
                  this.semResultado = true;
                  return [];
                })
              );
          }
        ),
      ).subscribe(paises => {
        if (paises != null) {
          this.semResultado = false;
          this.paises = [];
          for (const p of paises) {
            this.paises.push(new Pais(p.name, p.alpha3Code));
          }
        } else {
          this.semResultado = true;
        }
      });
  }

  public eventoCallback(dados: Pais) {
    alert('Click no pais: ' + dados.nome);
  }

  public atualizarListaPaisesPorIdioma() {
    this.lista = [];
    this.apiRequest.ListarPaises(this.lang).subscribe(
      (respostaAPI) => {
        for (const item of respostaAPI) {
          this.lista.push(item.name);
        }
      }
    );
  }

}