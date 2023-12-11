import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './card-catalogo.component.html',
  styleUrl: './card-catalogo.component.css'
})
export class CardCatalogoComponent {
  @Input() Nom:string="";
  @Input() Dec:string="";
  @Input() Val:string="";
  @Input() Tag:string="";
  constructor(){}
}
