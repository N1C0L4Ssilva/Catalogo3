import { Component, Input } from '@angular/core';
import {ConectDBService} from "../../conect-db.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './card-catalogo.component.html',
  styleUrl: './card-catalogo.component.css'
})
export class CardCatalogoComponent {
  @Input() Nom:string="";
  @Input() Dec:string="";
  @Input() Val:string="";
  @Input() Tag:string="";
  @Input() ID:string="";

  private Service:ConectDBService=new ConectDBService()
  private storage: Storage;

  constructor(){
    this.storage=window.localStorage;
  }
  AdicionarCarrinho(ID:string){
    const ID_USER=this.storage.getItem("skmyrshPHaqT")
    if(ID_USER!="" && ID_USER!=undefined && ID!=null){
      console.log(ID)
      this.Service.POST(`Carrinho/?${
        new URLSearchParams({
          ID_USUARIO:ID_USER,
          ID_PRODUTO:ID
        }).toString()}`)
    }
  }
  ArrumaValor(Val:string){
    if(!Val.includes(",")){
      Val+=",00"
    }else{
      const Splt=Val.split(",")
      if(Splt[2].length==1){
        Val+="0"
      }else{
        console.log("JÁ TEM ','")
      }
    }
    return Val
  }
}
