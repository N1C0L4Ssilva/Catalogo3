import { CommonModule } from "@angular/common";
import {ConectDBService} from "../conect-db.service"
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo-client.component.html',
  styleUrl: './catalogo-client.component.css'
})
export class CATALOGOCLIENTComponent {
  public valorRecebido:string | null=""
  public ITENS:any[]=[]
  private Service:ConectDBService=new ConectDBService()
  constructor(private route: ActivatedRoute) {}
  async ngOnInit(){
    this.valorRecebido = this.route.snapshot.paramMap.get('MARKER');
    console.log("GET ITEM BY MARKER ziggy")
    if(this.valorRecebido){
      this.Service.GET(`Produto/?${
        new URLSearchParams({
          TYPEFIND:"ITEM_BY_MARKER",
          ITEM_BY_MARKER:"ZIGGY"
        }).toString()
      }`).then((v)=>{this.ITENS=v; console.log(v)})
    }
    console.log(this.ITENS)
  }
}
