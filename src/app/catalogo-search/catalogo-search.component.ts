import { Component, ElementRef, ViewChildren } from '@angular/core';
import { ConectDBService } from '../conect-db.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo-search.component.html',
  styleUrl: './catalogo-search.component.css'
})
export class CATALOGOSEARCHComponent {
  @ViewChildren('InputSearch') InputSearch: ElementRef;
  private router:Router=new Router()

  public valorRecebido:string | null=""
  public ITENS:any[]=[]
  private Service:ConectDBService=new ConectDBService()
  constructor(private route: ActivatedRoute,InputSearch:ElementRef){this.InputSearch=InputSearch}
  async ngOnInit(){
    this.ITENS=[]
    this.valorRecebido = this.route.snapshot.paramMap.get('Search');
    if(this.valorRecebido){
      this.Service.GET(`Produto/?${
        new URLSearchParams({
          TYPEFIND:"ITEM_BY_SEARCH",
          ITEM_BY_SEARCH:this.valorRecebido,
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
  Pesquisar(){
    console.log(this.InputSearch.nativeElement)

  }
}
