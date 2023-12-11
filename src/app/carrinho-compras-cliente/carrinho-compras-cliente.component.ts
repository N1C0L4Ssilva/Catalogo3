import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SearchBarComponent } from "../Template/search-bar/search-bar.component"
import { FooterBarComponent } from "../Template/footer-bar/footer-bar.component"
@Component({
  selector: 'app-carrinho-compras-cliente',
  standalone: true,
  imports: [SearchBarComponent,FooterBarComponent],
  templateUrl: './carrinho-compras-cliente.component.html',
  styleUrl: './carrinho-compras-cliente.component.css'
})
export class CARRINHOCOMPRASCLIENTEComponent {
  private storage: Storage;
  constructor(private router:Router){
    this.storage=window.localStorage;
  }
  ngOnInit(){
    if(this.storage.getItem("skmyrshPHaqT")==""||this.storage.getItem("skmyrshPHaqT")==null){
      this.router.navigate(["/Login_Register"])
    }
  }
}
