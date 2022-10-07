import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController,private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }

  goToHome(){
    this.navCtrl.navigateForward("/menu/home");
  }

  goToAbout(){
    this.navCtrl.navigateForward("/menu/about");
  }

  goToCoversor(){
    this.navCtrl.navigateForward("/menu/coversor");
  }

  closeMenu(){
    this.menu.close();
  }

  logout(){
    this.navCtrl.navigateRoot('/login');
    this.storage.set("isUserLoggedIn", false);
  }

}
