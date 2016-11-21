/**
 * Created by fear on 16-11-16.
 */
import {Component, Input} from "@angular/core";
import {User} from "../shared/models/user";

@Component({
    selector: "user-profile",
    templateUrl: "./app/users/user-profile.component.html"
    /*template: `<div class="jumbotron" *ngIf="user">
                    <h2>{{user.id}} <small>{{user.name}}</small></h2>

                    <input class="form-control" [(ngModel)]="user.name">
                </div>`*/
})

export class UserProfileComponent {
    @Input() user: User;
}