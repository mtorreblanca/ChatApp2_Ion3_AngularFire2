import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { ProfileviewComponent } from './profileview/profileview.component';


@NgModule({
    declarations: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileviewComponent],
    imports: [ IonicModule ],
    exports: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileviewComponent]
})
export class ComponentsModule {
    
}