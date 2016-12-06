/**
 * Created by fear on 28-11-16.
 */
import {NgModule} from "@angular/core";
import {AboutComponent} from "./about.component";
import {AboutUserComponent} from "./about-user.component";
import {UserService} from "../shared/services/user.service";
import {aboutRouting} from "./about.routing";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        aboutRouting,
        CommonModule,
    ],
    declarations: [
        AboutComponent,
        AboutUserComponent,
    ],
    providers: [
        UserService,
    ],
})

export class AboutModule {}