export class App {

  listaDeFrameworks = ['Aurelia', 'EmberJS', 'Angular', 'React', 'Vue', 'Backbone'];
  
  nombres;
  evento = 'Aún no han ocurrido eventos';

  constructor() {
    this.message = 'Hello World!';
  }

  evento = 'Aún no han ocurrido eventos';
  handleEvent(event) {
    this.evento = event;
    return true;
  }

}
