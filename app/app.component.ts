/**
 * Created by fear on 13-11-16.
 */
import {Component} from '@angular/core';
import {User} from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent{
    message = 'Hello';
    users: User[] = [
        {
            id: 123,
            name: 'Ariel Alvarado',
            username: 'ariel1'
        },
        {
            id: 456,
            name: 'Coneja Loca',
            username: 'wiiiii'
        }
    ];
    activeUser: User;

    selectUser(user){
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event){
        // should be auto-generated after inserting to the database
        event.user.id = Math.floor(Math.random() * 1000);
        this.users.push(event.user);
        console.log(event);
    }
}