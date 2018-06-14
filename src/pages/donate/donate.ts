import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular'
import { LoadingController } from 'ionic-angular';
import { Charity } from '../../models/charity';
declare var Stripe;

@Component({
    selector: 'page-donate',
    templateUrl: 'donate.html'
})
export class DonatePage {
    public charity: Charity;
    public amount: number;
    stripe = Stripe('pk_test_eYCX11dIxALec8Sqz2JpIfip');
    card: any;
    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public toastCtrl: ToastController) {
        this.charity = this.navParams.get("charity");
    }

    ionViewDidLoad() {
        this.setupStripe();
    }

    setupStripe() {
        let elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        this.card = elements.create('card', { style: style });
        this.card.mount('#card-element');

        this.card.addEventListener('change', event => {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });

        var form = document.getElementById('payment-form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            // this.stripe.createToken(this.card)
            this.stripe.createSource(this.card).then(result => {
                if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                } else {
                    console.log(result);
                }
            });
        });
    }

    submittingPayment() {
        let loader = this.loadingCtrl.create({
            content: "Submitting payment...",
            duration: 500
        });
        loader.present();
        this.sendDonation();
    }

    sendDonation() {
        let toast = this.toastCtrl.create({
            message: 'Donation made!',
            duration: 3000
        });
        toast.present();
    }

}
