/**
 * Created by fear on 20-11-16.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/user";

@Component({
    templateUrl: "./app/about/about-user.component.html",
    styleUrls: ["./app/about/about-user.component.css"]
})

export class AboutUserComponent implements OnInit {

    user: User;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private router: Router
    ) {
    }

    ngOnInit() {
        let username: string = this.route.snapshot.params["username"];
        this.userService.getUser(username).then(user => {
            this.user = user;
        } );
    }

    goBack() {
        // window.history.back();
        this.router.navigate(["/about"]);
    }
}