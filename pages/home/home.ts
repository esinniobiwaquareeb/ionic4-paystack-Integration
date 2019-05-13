import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public DonationForm: FormGroup;
    public public_key = 'pk_test_2a60f669e5dcddabb68a5984c0396579278af9b8';
  public channels = ['bank', 'card', 'ussd', 'qr'];
  public random_id = Math.floor(Date.now() / 1000);
  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    this.DonationForm = new FormGroup({
          phoneNumber: new FormControl('', Validators.required),
          amount: new FormControl('', Validators.required),
          email: new FormControl('', Validators.required)
        });
  }


   paymentCancel() {
    console.log('Payment Cancelled');
  }

  paymentDone(ref: any) {
    console.log('payment Done');
    console.log(ref.reference);
    
  }

}
