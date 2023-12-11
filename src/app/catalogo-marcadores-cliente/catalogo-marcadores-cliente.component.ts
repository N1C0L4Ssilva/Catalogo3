import { CommonModule } from "@angular/common";
import {ConectDBService} from "../conect-db.service"
import { Component, ElementRef, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// import { CardMarcadoresComponent } from "../Templates/card-marcadores/card-marcadores.component"
@Component({
  selector: 'app-catalogo-marcadores-cliente',
  standalone: true,
  schemas:[NO_ERRORS_SCHEMA],
  imports: [CommonModule],
  templateUrl: './catalogo-marcadores-cliente.component.html',
  styleUrls: ['./catalogo-marcadores-cliente.component.css']
})
export class CATALOGOMARCADORESCLIENTEComponent {
  @ViewChild('InputSearch') InputSearch: ElementRef;
  private router:Router=new Router()
  public TESTEE="BATATAPALHAFRITA"
  public MARCADORES:any[]=[]
  private Service:ConectDBService=new ConectDBService()

  constructor(InputSearch:ElementRef){this.InputSearch=InputSearch}

  async ngOnInit(){
    console.log("GET ALL MARKERS")
    this.Service.GET(`Produto/?${
      new URLSearchParams({
        TYPEFIND:"MARKER"
      }).toString()
    }`).then((v:any)=>{this.MARCADORES=v})
  }
  Encaminhar(I:string){
    this.router.navigate(['/Catalogo',{MARKER:I}]);
  }
  Pesquisar(){
    const Txt:string|null=this.InputSearch.nativeElement.value
    if(Txt!=null && Txt!=""){
      this.router.navigate(['/Search',{Search:Txt}]);
    }
  }
}