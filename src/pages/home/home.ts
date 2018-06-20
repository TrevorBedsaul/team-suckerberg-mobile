import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage) {
    storage.get('token').then((val) => {
      if(val){
        this.navCtrl.push(TabsPage);
      }
    });
  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage)
  }

  navigateToRegister() {
    this.navCtrl.push(RegisterPage)
  }

}
