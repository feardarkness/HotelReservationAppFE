/**
 * Created by fear on 20-11-16.
 */
import {Component, OnInit} from "@angular/core";
import {User} from "../shared/models/user";
import {UserService} from "../shared/services/user.service";



@Component({
    templateUrl: "./app/about/about.component.html",
    styleUrls: ["./app/about/about.component.css"]
})

export class AboutComponent implements OnInit {
    users: User[];

    constructor(
        private userService: UserService
    ) {}

    ngOnInit() {
        this.userService.getUsers().then(users => this.users = users);
    }
}