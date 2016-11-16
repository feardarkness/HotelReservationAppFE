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
            name: 'Ariel Alvarado'
        },
        {
            id: 456,
            name: 'Coneja Loca'
        }
    ];
    activeUser: User;

    selectUser(user){
        this.activeUser = user;
        console.log(this.activeUser);
    }
}