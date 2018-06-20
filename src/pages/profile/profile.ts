import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    name: string;
    first: string;
    last: string;
    token: string;

    constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, private app: App, public toastCtrl: ToastController, private storage: Storage) {
        storage.get('token').then((val) => {
            this.token = val;
            this.http
                .get("http://localhost:3000/users", {
                    params: {
                        token: this.token
                    }
                })
                .subscribe(
                    result => {
                        this.first = result.json()[0].firstname;
                        this.last = result.json()[0].lastname;
                        this.name = this.first + " " + this.last;
                    },
                    error => {
                        console.log(error);
                    }
                );
        });
    }

    navigateToHome() {
        this.app.getRootNav().setRoot(HomePage);
    }

    logout() {
        this.storage.remove('token');
        this.navigateToHome();
    }

    saveChanges() {
        let toast = this.toastCtrl.create({
            message: 'Changes saved!',
            duration: 3000
        });
        toast.present();
    }

}
