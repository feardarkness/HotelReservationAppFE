/**
 * Created by fear on 17-11-16.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import {User} from '../shared/models/user';
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'user-form',
    templateUrl: './app/users/user-form.component.html',
    styles: [
        // esto solamente se aplica al form del componente user-form gracias al shadow dom!!!!!
        `form {
            background: #f1ebf3;
            border-radius: 3px;
            padding: 4px;
        }`
    ]
})

export class UserFormComponent{
    newUser: User = new User();
    active: boolean = true;
    @Output() userCreated = new EventEmitter();

    onSubmit() {
        this.userCreated.emit({user: this.newUser});

        this.newUser = new User();
        // para que despues de hacer submit el  formulario este en estado inicial
        // esto se modificara cuando sea model driven, por ahora mantenemos el estilo template driven
        this.active = false;
        setTimeout( () => this.active = true, 0);
    }
}