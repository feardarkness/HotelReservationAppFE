export class App {

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
