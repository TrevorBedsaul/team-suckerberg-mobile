import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Charity } from '../../models/charity';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Donation } from '../../models/donation';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public monthly: number;
  public total: number;
  public charities: Array<Charity> = [];
  public charity_names: Array<string> = [];
  public abbreviated: Array<string> = [];
  public percentages: Array<number> = [];
  public payments: Array<number> = [];
  public donations: Array<Donation> = [];
  public donation_charities: Array<string> = [];
  public token: string;
  public user_id: number;

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;

  constructor(public navCtrl: NavController, public http: Http, public storage: Storage) {
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
          for (var i = 0; i < this.charities.length; i++) {
            this.percentages.push(100 / this.charities.length);
            this.charity_names.push(this.charities[i].name);
            this.abbreviated.push(this.charities[i].name.substr(0, 5));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // ionViewDidLoad() {
  //   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

  //     type: 'doughnut',
  //     data: {
  //       labels: ["Habitat For Humanity", "Relay For Life", "Unicef"],
  //       datasets: [{
  //         label: 'Percentage of Monthly Pay',
  //         data: [35, 55, 20],
  //         backgroundColor: [
  //           'rgba(255, 0, 0, 0.2)',
  //           'rgba(0, 0, 255, 0.2)',
  //           'rgba(0, 255, 0, 0.2)'
  //         ],
  //         hoverBackgroundColor: [
  //           "#FF6384",
  //           "#36A2EB",
  //           "#FFCE56",
  //         ]
  //       }]
  //     }

  //   })
  // }

  ionViewDidLoad() {
    console.log(this.percentages);
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.charity_names,
        datasets: [{
          label: 'Percentage of Monthly Pay',
          data: this.percentages,
          backgroundColor: [
            'rgba(255, 0, 0, 0.2)',
            // 'rgba(0, 0, 255, 0.2)',
            // 'rgba(0, 255, 0, 0.2)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            // "#36A2EB",
            // "#FFCE56",
          ]
        }]
      }

    });
    this.total = 0;
    for (var i = 0; i < this.percentages.length; i++) {
      this.total = this.total + this.percentages[i];
    }
    for (var i = 0; i < this.percentages.length; i++) {
      this.payments[i] = this.percentages[i] / this.total * this.monthly;
    }

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
    .get("http://localhost:3000/donations/" + this.user_id)
    .subscribe(
      result => {
        console.log(result.json());
        this.donations = result.json();
        for(var i = 0; i < this.donations.length; i++) {
          this.http
          .get("http://localhost:3000/charities/" + this.donations[i].charity_id)
          .subscribe(
            result => {
              this.donation_charities[i] = result.json().name;
              console.log(result.json().name);
            },
            error =>{
              console.log(error);
            }
          );
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}