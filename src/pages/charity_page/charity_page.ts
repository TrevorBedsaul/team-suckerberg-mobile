import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular'
import { LoadingController } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { DonatePage } from '../donate/donate';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-charity_page',
    templateUrl: 'charity_page.html'
})
export class CharityPage {
    public charity: Charity;
    public token: string;
    public user_id: number;

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public toastCtrl: ToastController, public http: Http, public storage: Storage) {
        this.charity = this.navParams.get("charity");
        storage.get('token').then((val) => {
            this.token = val;
            this.http
                .get("http://localhost:3000/user/token", {
                    params: {
                        token: this.token
                    }
                })
                .subscribe(
                    result => {
                        // this.user_id = result.json().user.user_id;
                        this.user_id = result.json().user.id;
                    },
                    error => {
                        console.log(error);
                    }
                );
        });
    }

    addingToPortfolio() {
        let loader = this.loadingCtrl.create({
            content: "Adding to porfolio...",
            duration: 500
        });
        loader.present();
        this.addToPortfolio();

    }

    openingPaymentPortal(charity: Charity) {
        let loader = this.loadingCtrl.create({
            content: "Opening payment portal...",
            duration: 500
        });
        loader.present();
        this.navCtrl.push(DonatePage, { charity: charity });
    }

    addedToPortfolio() {
        let toast = this.toastCtrl.create({
            message: 'Added to your account portfolio!',
            duration: 3000
        });
        toast.present();
    }

    addToPortfolio() {
        this.http
            .post("http://localhost:3000/portfolio", {
                user_id: this.user_id,
                percentage: 0,
                charity_id: this.charity.id,
            })
            .subscribe(
                result => {
                    console.log(result);
                    this.addedToPortfolio();
                },
                error => {
                    console.log(error);
                    let toast = this.toastCtrl.create({
                        message: 'Error adding to portfolio',
                        duration: 2000
                      });
                      toast.present();
                }
            );
    }
}
