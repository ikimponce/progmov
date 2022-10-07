import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
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
    this.loginForm = this.formBuilder.group({
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

  async ngOnInit() {
    await this.storage.create();
  }

  async loginUser(credentials){
    this.authService
      .loginUser(credentials)
      .then(res => {
        this.errorMessage = "";
        this.storage.set('isUserLoggedIn', true);
        this.navCtrl.navigateForward("/menu/home");
      })
      .catch(err => {
        this.errorMessage = err;
      });
  }

  goToRegister(){
    this.navCtrl.navigateForward("/register");
  }
}
