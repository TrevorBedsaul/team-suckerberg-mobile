import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    name: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public toastCtrl: ToastController) {
        // storage.get('token').then((val) => {
        //     this.token = val;
        //     this.http
        //         .get("http://localhost:3000/users", {
        //             params: {
        //                 token: this.token
        //             }
        //         })
        //         .subscribe(
        //             result => {
        //                 this.user_id = result.json().user_id;
        //             },
        //             error => {
        //                 console.log(error);
        //             }
        //         );
        // });
    }

    navigateToHome() {
        this.app.getRootNav().setRoot(HomePage);
    }

    saveChanges() {
        let toast = this.toastCtrl.create({
            message: 'Changes saved!',
            duration: 3000
        });
        toast.present();
    }

}
