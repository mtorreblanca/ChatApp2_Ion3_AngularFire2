import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { User } from 'firebase';
import { DataService } from '../../providers/data/data';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private data: DataService, private navCtrl: NavController,
    private toast:ToastController) {
  }

  login(event: LoginResponse){
    if(!event.error){
      this.toast.create({
        message: `Welcome to Beep, ${event.result.user.email}`,
        duration: 3000
      }).present();
      
      this.data.getProfile(<User>event.result.user).snapshotChanges().subscribe(profile => {
        console.log(profile.payload.val());
        profile.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
      })
      // this.navCtrl.setRoot('EditProfilePage');
    
    }
    else{
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }


}
