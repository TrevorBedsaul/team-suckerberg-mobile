import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { User } from '../../models/user';
import { Charity } from '../../models/charity';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    public name: string;
    public first: string;
    public last: string;
    public token: string;
    public about_me: string;
    public user_id: number;
    public charities: Array<Charity>;
    public images: Array<string>;
    public charity_names: Array<string>;
    public user = new User();

    constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, private app: App, public toastCtrl: ToastController, private storage: Storage) {
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
                        this.first = result.json().user.firstname;
                        this.last = result.json().user.lastname;
                        this.name = this.first + " " + this.last;
                        this.about_me = result.json().user.about_me;
                        this.user_id = result.json().user.id;
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
        // this.user.id = this.user_id;
        // this.user.firstname = this.first;
        // this.user.lastname = this.last;
        // this.user.about_me = this.about_me;
        // this.http
        //     .patch("http://localhost:3000/user/" + this.user_id, {
        //         user: this.user
        //     })
        //     .subscribe();
        let toast = this.toastCtrl.create({
            message: 'Changes saved!',
            duration: 3000
        });
        toast.present();
    }

    ionViewDidLoad() {
        this.storage.get('token').then((val) => {
            this.token = val;
            this.http
              .get("http://localhost:3000/user/token", {
                params: {
                  token: this.token
                }
              })
              .subscribe(
                result => {
                  this.user_id = result.json().user.id;
                },
                error => {
                  console.log(error);
                }
              );
          });
          this.http
            .get("http://localhost:3000/portfolio/" + this.user_id)
            .subscribe(
              result => {
                this.charities = result.json();
                // for (var i = 0; i < this.charities.length; i++) {
                //   this.charity_names.push(this.charities[i].name);
                //   this.images.push(this.charities[i].imageUrl);
                // }
              },
              error => {
                console.log(error);
              }
            );
      }
}
