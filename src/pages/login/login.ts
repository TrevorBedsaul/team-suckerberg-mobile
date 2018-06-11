import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular'
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ResetPage } from '../reset/reset';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    public email: string;
    public password: string;
    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public navParams: NavParams, public http: Http) {

    }

    navigateHome() {
        this.navCtrl.push(HomePage)
    }

    navigateToReset() {
        this.navCtrl.push(ResetPage)
    }

    navigateToTabs() {
        this.navCtrl.setRoot(TabsPage)
    }

    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Logging you in. Please wait...",
            duration: 500
        });
        loader.present();
        this.http
            .post("http://localhost:3000/login", {
                email: this.email,
                password: this.password
            })
            .subscribe(
                result => {
                    console.log(result);
                    this.navCtrl.push(TabsPage, result)
                },
                error => {
                    console.log(error);
                    let toast = this.toastCtrl.create({
                        message: 'Invalid email and password combination.',
                        duration: 2000
                      });
                      toast.present();
                }
            );
    }
}
