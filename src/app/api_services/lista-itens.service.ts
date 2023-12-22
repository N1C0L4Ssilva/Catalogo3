import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaItensService {
  constructor(){}
  public PRODUTO=[];
  public CARRINHO=[];
  public ENDERECO=[];
  public MOVIMENTACAO=[];
}
