const baseURL="http://localhost:3542/"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConectDBService {
  constructor() { }
  GET = async (Compl:String)=>{
    const Resp = await fetch(baseURL+Compl,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await Resp.json()
  }
  POST = async (Compl:String,Data:any)=>{
    await fetch(baseURL+Compl,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(Data)
    });
  }
  PUT = async (Compl:String,Data:any)=>{
    await fetch(baseURL+Compl,{
      method:"PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(Data)
    });
  }
  DELETE = async (Compl:String)=>{
    await fetch(baseURL+Compl,{
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
