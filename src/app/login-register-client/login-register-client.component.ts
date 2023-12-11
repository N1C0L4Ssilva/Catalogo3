import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ConectDBService} from "../conect-db.service"
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-register-client.component.html',
  styleUrl: './login-register-client.component.css'
})
export class LOGINREGISTERCLIENTComponent {
  @ViewChild("LoginSection") LogSec: ElementRef;
  @ViewChild("RegisterSection") RegSec: ElementRef;
  private Front: Boolean = true;
  private storage: Storage;
  private Service:ConectDBService=new ConectDBService()
  constructor (LogSec:ElementRef,RegSec:ElementRef,private router:Router){
    this.LogSec=LogSec;
    this.RegSec=RegSec;
    this.storage= window.localStorage
  };
  public Rotate(){
    if (this.LogSec!=null && this.RegSec!=null){
      if(this.Front){
        this.LogSec.nativeElement.setAttribute("class","LOGIN Traz")
        this.RegSec.nativeElement.setAttribute("class","REGISTER Frente")
      }else{
        this.LogSec.nativeElement.setAttribute("class","LOGIN Frente")
        this.RegSec.nativeElement.setAttribute("class","REGISTER Traz")
      }
      this.Front=!this.Front
    }
  }

  LogarDados={
    Email:"",
    Senha:"",
  }
  RegistrarDados={
    Email:"",
    Senha:"",
    Nome:"",
    ConfirmSenha:"",
  }

  ngOnInit=()=>{
    console.log("TESTE")
    this.Service.GET(`Produto/?${
      new URLSearchParams({
        ACESSO:"ITEM_BY_MARKER",
        SENHA:"ITEM_BY_MARKER",
      }).toString()
    }`)
  }
  Registrar=()=>{
    console.log(this.RegistrarDados)
    if(this.RegistrarDados.Senha==this.RegistrarDados.ConfirmSenha){
      this.Service.POST(`Usuario/?${
        new URLSearchParams({
        ACESSO:this.RegistrarDados.Email,
        SENHA:this.RegistrarDados.Senha,
        NOME:this.RegistrarDados.Nome,
      }).toString()}`).then((v)=>console.log(v))
    }
  }
  Logar=()=>{
    console.log(this.LogarDados)
    this.Service.GET(`Usuario/?${
      new URLSearchParams({
        ACESSO:this.LogarDados.Email,
        SENHA:this.LogarDados.Senha,
      }).toString()
    }`).then((V)=>{
      if(V.ID){
        this.storage.setItem("skmyrshPHaqT",V.ID)
        this.router.navigate(["/"])
      }else{
        alert(V)
      }
    })
  }
}