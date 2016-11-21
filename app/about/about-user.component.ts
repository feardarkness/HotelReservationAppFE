/**
 * Created by fear on 20-11-16.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: "./app/about/about-user.component.html",
    styleUrls: ["./app/about/about-user.component.css"]
})

export class AboutUserComponent {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        let username: string = this.route.snapshot.params["username"];
        console.log(username);
    }
}