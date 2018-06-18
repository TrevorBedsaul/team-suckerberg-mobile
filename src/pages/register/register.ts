import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { User } from '../../models/user';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;
  public confirm_password: string;
  public user: User;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public http: Http) {

  }

  async register() {
    let loader = this.loadingCtrl.create({
      content: "Registering. Please wait...",
      duration: 500
    });
    loader.present();

    this.http
      .post("http://localhost:3000/registration", {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      })
      .subscribe(
        result => {
          console.log(result);
          this.navCtrl.push(LoginPage)
        },
        error => {
          console.log(error);
          let toast = this.toastCtrl.create({
            message: 'Problem with registration',
            duration: 2000
          });
          toast.present();
        }
      );
  }

  checkPassword(){
    if(this.password!=this.confirm_password){
      alert('Passwords do not match');
    }
    else{
      this.register();
    }
  }

}
