const baseURL="http://localhost:3000/Produto"
import { TESTEService } from "../teste.service"
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo-marcadores-cliente',
  standalone: true,
  imports: [],
  templateUrl: './catalogo-marcadores-cliente.component.html',
  styleUrl: './catalogo-marcadores-cliente.component.css'
})
export class CATALOGOMARCADORESCLIENTEComponent {
  async ngOnInit(){
    new TESTEService().GetDados()
  }
}