/**
 * Created by fear on 20-11-16.
 */
import {Component} from "@angular/core";
import {User} from "../shared/models/user";

const users: User[] = [
    {
        id: 1,
        name: 'Ariel Alvarado',
        username: 'ariel1',
        avatar: 'https://pbs.twimg.com/profile_images/800507349727322112/hkOgf2mV.jpg'
    },
    {
        id: 2,
        name: 'Anita',
        username: 'pikapika',
        avatar: 'https://pbs.twimg.com/profile_images/747581419191406592/RnbU2zqj_400x400.jpg'
    },
    {
        id: 3,
        name: 'Ramiro',
        username: 'Yapuceres',
        avatar: 'https://pbs.twimg.com/profile_images/771039369834688512/8qKlT3SZ.jpg'
    }
];

@Component({
    templateUrl: './app/about/about.component.html',
    styleUrls: ['./app/about/about.component.css']
})

export class AboutComponent{
    users: User[] = users;
}