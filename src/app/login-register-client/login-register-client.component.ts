import { Component } from '@angular/core';

@Component({
  selector: 'app-login-register-client',
  standalone: true,
  imports: [],
  templateUrl: './login-register-client.component.html',
  styleUrl: './login-register-client.component.css'
})
export class LOGINREGISTERCLIENTComponent {
  private Front: Boolean = true;
  private LogSec: HTMLElement | null=document.getElementById("LoginSection");
  private RegSec: HTMLElement | null=document.getElementById("LoginSection");
  public Rotate(){
    if (this.LogSec!=null && this.RegSec!=null){
      if(this.Front){
        this.LogSec.setAttribute("class","LOGIN Traz")
        this.RegSec.setAttribute("class","REGISTER Frente")
        this.Front=false
      }else{
        this.LogSec.setAttribute("class","LOGIN Frente")
        this.RegSec.setAttribute("class","REGISTER Traz")
        this.Front=true
      }
    }
  }
}



/*
  var Front=true
  function Rotate(){
      var LogSec=document.getElementById("LoginSection")
      var RegSec=document.getElementById("RegisterSection")
      if(Front){
          LogSec.setAttribute("class","LOGIN Traz")
          RegSec.setAttribute("class","REGISTER Frente")
          Front=false
      }else{
          LogSec.setAttribute("class","LOGIN Frente")
          RegSec.setAttribute("class","REGISTER Traz")
          Front=true
      }
  }
*/ 