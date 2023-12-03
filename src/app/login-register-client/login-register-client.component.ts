import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login-register-client',
  standalone: true,
  imports: [],
  templateUrl: './login-register-client.component.html',
  styleUrl: './login-register-client.component.css'
})
export class LOGINREGISTERCLIENTComponent {
  @ViewChild("LoginSection") LogSec: ElementRef;
  @ViewChild("RegisterSection") RegSec: ElementRef;
  private Front: Boolean = true;
  constructor (LogSec:ElementRef,RegSec:ElementRef){
    this.LogSec=LogSec;
    this.RegSec=RegSec;
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