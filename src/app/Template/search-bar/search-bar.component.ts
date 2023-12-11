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
  private router:Router=new Router()
  constructor( IptSrc: ElementRef){this.InputSearch=IptSrc}
  Pesquisar(){
    const Txt:string|null=this.InputSearch.nativeElement.value
    if(Txt!=null && Txt!=""){
      this.router.navigate(['/Search',{Search:Txt}]);
    }
  }
  Test(){
    console.log("AA")
  }
}
