const baseURL="http://localhost:3542/Produto"
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
    const Resp = await fetch(baseURL);
    const Dt = await Resp.json(); // ou Resp.text() dependendo do tipo de resposta
    console.log(Dt);
  }
}