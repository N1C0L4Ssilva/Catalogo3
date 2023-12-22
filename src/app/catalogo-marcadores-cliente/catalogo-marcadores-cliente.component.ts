import { CommonModule } from "@angular/common";
import {ConectDBService} from "../conect-db.service"
import { Component, ElementRef, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FooterBarComponent } from "../Template/footer-bar/footer-bar.component"
import { SearchBarComponent } from "../Template/search-bar/search-bar.component"
@Component({ 
  selector: 'app-catalogo-marcadores-cliente',
  standalone: true,
  schemas:[NO_ERRORS_SCHEMA],
  imports: [CommonModule,SearchBarComponent,FooterBarComponent],
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
    this.Service.GET(`Produto/?${
      new URLSearchParams({
        TYPEFIND:"MARKER"
      }).toString()
    }`).then((v:any)=>{this.MARCADORES=v})
  }
  Encaminhar(I:string){
    this.router.navigate(['/Catalogo',{MARKER:I}]);
  }
}