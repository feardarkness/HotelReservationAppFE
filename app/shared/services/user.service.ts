/**
 * Created by fear on 21-11-16.
 */
import {Injectable} from "@angular/core";
import {User} from "../models/user";

const userPromise: Promise<User[]> = Promise.resolve([
    {
        id: 1,
        name: "Ariel Alvarado",
        username: "ariel1",
        avatar: "https://pbs.twimg.com/profile_images/800507349727322112/hkOgf2mV.jpg"
    },
    {
        id: 2,
        name: "Anita",
        username: "pikapika",
        avatar: "https://pbs.twimg.com/profile_images/747581419191406592/RnbU2zqj_400x400.jpg"
    },
    {
        id: 3,
        name: "Ramiro",
        username: "Yapuceres",
        avatar: "https://pbs.twimg.com/profile_images/771039369834688512/8qKlT3SZ.jpg"
    }
]);

@Injectable()
export class UserService {
    getUsers() {
        return userPromise;
    }

    getUser(username) {
        let user: Promise<User> = userPromise.then( users => {
            return users.find( user => {
                return user.username === username;
            });
        });
        return user;
    }
}