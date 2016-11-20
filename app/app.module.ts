/**
 * Created by fear on 13-11-16.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {UserProfileComponent} from './users/user-profile.component';
import {UserFormComponent} from './users/user-form.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        UserProfileComponent,
        UserFormComponent,
        ContactComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}