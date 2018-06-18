import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Charity } from '../../models/charity';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public monthly: number;
  public total: number;
  public charities: Array<Charity> = [];
  public token: string;
  public user_id: number;

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;

  constructor(public navCtrl: NavController, public http: Http, public storage: Storage) {
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
            this.user_id = result.json().user_id;
          },
          error => {
            console.log(error);
          }
        );
    });
    this.http
      .get("http://localhost:3000/portfolio/{{this.user_id}}")
      .subscribe(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Habitat For Humanity", "Relay For Life", "Unicef"],
        datasets: [{
          label: 'Percentage of Monthly Pay',
          data: [35, 55, 20],
          backgroundColor: [
            'rgba(255, 0, 0, 0.2)',
            'rgba(0, 0, 255, 0.2)',
            'rgba(0, 255, 0, 0.2)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
          ]
        }]
      }

    })
  }
}