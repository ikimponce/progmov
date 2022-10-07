import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;
  validation_messages = {
    email: [
      {type : "required", message: "El email es requerido"},
      {type : "email", message: "El email no es válido"}
    ],
    password:[
      {type : "required", message: "La contraseña es requerida"},
      {type : "minLength", message: "La contraseña debe tener mas de 5 caracteres"}
    ]
  };

  errorMessage: string="";

  constructor(
      private formBuilder: FormBuilder,
      private authService:AuthenticateService,
      private navCtrl: NavController,
      private storage: Storage
     ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }
  register(userData){
    console.log(userData);
  }
  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }
}
