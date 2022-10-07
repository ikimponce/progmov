import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() {}

  loginUser(credential){
    return new Promise((accept, reject)=>{
      if (credential.email=="admin@admin.com" && credential.password=="admin12345"){
        accept("Login Correcto");
      }else if (credential.email=="user@user.com" && credential.password=="user12345"){
        accept("Login Correcto");
      }else{
        reject("Login Incorrecto");
      }
    });
  }
}
