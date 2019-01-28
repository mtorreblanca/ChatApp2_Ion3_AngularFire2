import { Component, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';
import { DataService } from '../../providers/data/data';
import { AuthService } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from 'firebase';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy{


  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  profile = {} as Profile;

  constructor(private data: DataService, private auth: AuthService) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

  async saveProfile(){
    if(this.authenticatedUser){
    this.profile.email = this.authenticatedUser.email;
    const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
    this.saveProfileResult.emit(result);
    }

  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }
}
