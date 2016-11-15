/**
 * Created by fear on 13-11-16.
 */
import {Component} from '@angular/core';
import {User} from './components/shared/models/user';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar navbar-default" role="navigation">
            	<!-- Brand and toggle get grouped for better mobile display -->
            	<div class="navbar-header">
            		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            			<span class="sr-only">Toggle navigation</span>
            			<span class="icon-bar"></span>
            			<span class="icon-bar"></span>
            			<span class="icon-bar"></span>
            		</button>
            		<a class="navbar-brand" href="#">Home</a>
            	</div>
            
            	<!-- Collect the nav links, forms, and other content for toggling -->
            	<div class="collapse navbar-collapse navbar-ex1-collapse">
            		<ul class="nav navbar-nav">
            			<li class="active"><a href="#">Link</a></li>
            			<li><a href="#">Link</a></li>
            		</ul>
            		<form class="navbar-form navbar-left" role="search">
            			<div class="form-group">
            				<input type="text" class="form-control" placeholder="Search">
            			</div>
            			<button type="submit" class="btn btn-default">Submit</button>
            		</form>
            		<ul class="nav navbar-nav navbar-right">
            			<li><a href="#">Link</a></li>
            			<li class="dropdown">
            				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
            				<ul class="dropdown-menu">
            					<li><a href="#">Action</a></li>
            					<li><a href="#">Another action</a></li>
            					<li><a href="#">Something else here</a></li>
            					<li><a href="#">Separated link</a></li>
            				</ul>
            			</li>
            		</ul>
            	</div><!-- /.navbar-collapse -->
            </nav>
        </header>
        
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <ul class="list-group users-list">
                <li class="list-group-item" *ngFor="let user of users" [class.active]="user === activeUser">
                    <a href="#" 
                        (click)="selectUser(user)"
                    >{{user.id}} ({{user.name}})</a>
                </li>                
            </ul>	
        </div>    
            
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        	<div class="jumbotron">
                <h1>Welcome to my App!!!</h1>
                <h2>{{message}}</h2>
            </div>
        </div>
        
        <footer>
            Copyright &copy;2016
        </footer>
    `,
    styles: [
        `.users-list {}`
    ]
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