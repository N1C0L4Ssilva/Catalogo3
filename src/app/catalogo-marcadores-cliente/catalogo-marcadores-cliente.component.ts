import { CommonModule } from "@angular/common";
import {ConectDBService} from "../conect-db.service"
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { CardMarcadoresComponent } from "../Templates/card-marcadores/card-marcadores.component"

@Component({
  selector: 'app-catalogo-marcadores-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo-marcadores-cliente.component.html',
  styleUrls: ['./catalogo-marcadores-cliente.component.css']
})
export class CATALOGOMARCADORESCLIENTEComponent {
  private router:Router=new Router()
  public TESTEE="BATATAPALHAFRITA"
  public MARCADORES:any[]=[]
  private Service:ConectDBService=new ConectDBService()
  async ngOnInit(){
    console.log("GET ALL MARKERS")
    this.Service.GET(`Produto/?${
      new URLSearchParams({
        TYPEFIND:"MARKER"
      }).toString()
    }`).then((v:any)=>{this.MARCADORES=v})
    // console.log("=====_=====_=====")

    // console.log("GET ITEM BY MARKER ziggy")
    // this.Service.GET(`Produto/?${
    //   new URLSearchParams({
    //     TYPEFIND:"ITEM_BY_MARKER",
    //     ITEM_BY_MARKER:"ZIGGY"
    //   }).toString()
    // }`).then((v)=>console.log(v))
    // console.log("=====_=====_=====")

    // console.log("GET ITEM BY SEARCH Uv")
    // this.Service.GET(`Produto/?${
    //   new URLSearchParams({
    //     TYPEFIND:"ITEM_BY_SEARCH",
    //     ITEM_BY_SEARCH:"a",
    //   }).toString()
    // }`).then((v)=>console.log(v))
    // console.log("=====_=====_=====")

    // console.log(this.MARCADORES)
  }
  Encaminhar(I:string){
    this.router.navigate(['/Catalogo',{MARKER:I}]);
  }
}