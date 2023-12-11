import { CommonModule } from "@angular/common";
import {ConectDBService} from "../conect-db.service"
import { Component, ElementRef, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CardCatalogoComponent } from "../Template/card-catalogo/card-catalogo.component"
import { SearchBarComponent } from "../Template/search-bar/search-bar.component"
@Component({
  selector: 'app-catalogo-client',
  standalone: true,
  imports: [CommonModule,SearchBarComponent,CardCatalogoComponent],
  templateUrl: './catalogo-client.component.html',
  styleUrl: './catalogo-client.component.css'
})
export class CATALOGOCLIENTComponent {
  private InputSearch: ElementRef;
  private router:Router=new Router()

  public valorRecebido:string | null=""
  public ITENS:any[]=[]
  private Service:ConectDBService=new ConectDBService()
  constructor(private route: ActivatedRoute,InputSearch:ElementRef){
    this.InputSearch=InputSearch
  }
  async ngOnInit(){
    this.ITENS=[]
    this.valorRecebido = this.route.snapshot.paramMap.get('MARKER');
    // console.log("GET ITEM BY MARKER",this.valorRecebido)
    if(this.valorRecebido){
      this.Service.GET(`Produto/?${
        new URLSearchParams({
          TYPEFIND:"ITEM_BY_MARKER",
          ITEM_BY_MARKER:this.valorRecebido
        }).toString()
      }`).then((v)=>{
        for(const i in v){
          if(!this.ITENS.find((Test)=>{return Test.ID==v[i].MARCA})){
            this.ITENS.push({
              ID:v[i].MARCA,
              ITENS:[]
            })
          }
          const LST=this.ITENS.find((Test)=>{return Test.ID==v[i].MARCA})
          LST.ITENS.push(v[i])
        }
      })
    }
  }
}
