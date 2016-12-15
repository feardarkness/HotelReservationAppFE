/**
 * Created by fear on 13-11-16.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {appRouting} from "./app.routing";
import {UserProfileComponent} from "./users/user-profile.component";
import {UserFormComponent} from "./users/user-form.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./error-pages/not-found.component";
import {UserService} from "./shared/services/user.service";
import {AboutModule} from "./about/about.module";
import {HabitacionModule} from "./habitacion/habitacion.module";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,    // add two way data binding
        AboutModule,
        HabitacionModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        UserProfileComponent,
        UserFormComponent,
        ContactComponent,
        HomeComponent,
        NotFoundComponent
    ],
    bootstrap: [AppComponent],
    providers: [UserService]
})
export class AppModule {}