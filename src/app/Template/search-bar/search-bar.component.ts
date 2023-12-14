import { Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @ViewChild('InputSearch') InputSearch: ElementRef;
  private storage: Storage;
  private router:Router=new Router()
  constructor( IptSrc: ElementRef){
    this.InputSearch=IptSrc;
    this.storage=window.localStorage;
  }
  Pesquisar(){
    const Txt:string|null=this.InputSearch.nativeElement.value
    if(Txt!=null && Txt!=""){
      this.router.navigate(['/Search',{Search:Txt}]);
    }
  }
  EstaLogado(){
    if(this.storage.getItem("skmyrshPHaqT")==""||this.storage.getItem("skmyrshPHaqT")==null){
      this.router.navigate(["/Login_Register"])
    }
    return true
  }
  IrConta(){
    if (this.EstaLogado()){

    }
  }
  IrCart(){
    if (this.EstaLogado()){
      this.router.navigate(['/Carrinho']);
    }
  }
  IrInicio(){
    if (this.EstaLogado()){
      this.router.navigate(['/']);
    }
  }
  SairConta(){
    if (this.EstaLogado()){
      this.storage.removeItem("skmyrshPHaqT")
      this.router.navigate(["/Login_Register"])
    }
  }
}
