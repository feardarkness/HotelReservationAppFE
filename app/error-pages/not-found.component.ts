/**
 * Created by fear on 20-11-16.
 */

import {Component} from "@angular/core";

@Component({
    template: `
        <div class="jumbotron">
            <div class="container">
                <h1>Not Found!!!!</h1>
                <p>
                    <a class="btn btn-primary btn-lg" routerLink="/">Go Back to our home!!!</a>
                </p>
            </div>
        </div>
        
    `,
    styles: [
        ''
    ]
})

export class NotFoundComponent {

}