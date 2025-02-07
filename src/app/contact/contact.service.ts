import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  public submitForm(form: any){
    return new Promise((resolve) => 
      setTimeout(()=>{
      resolve(true)
    }, 1000));
  }
}
