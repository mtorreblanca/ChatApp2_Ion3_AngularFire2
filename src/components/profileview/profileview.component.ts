import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data/data';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from 'firebase';
import { Profile } from '../../models/profile/profile.interface';

/**
 * Generated class for the ProfileviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileviewComponent implements OnInit{
 
  userProfile: Profile;

  constructor(private data: DataService, private auth: AuthService) {
    
  }
  ngOnInit(): void {
   this.auth.getAuthenticatedUser().subscribe((user: User) => {
    this.data.getProfile(user).snapshotChanges().subscribe(profile=> {
        this.userProfile = <Profile>profile.payload.val();
    })
   }) 
  }
}
