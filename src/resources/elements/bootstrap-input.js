import {bindable, bindingMode, LogManager} from 'aurelia-framework';

export class BootstrapInput {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) texto;

  constructor() {
    this.logger = LogManager.getLogger('app-js');
    this.message = 'Hello World!';
    this.logger.info('CONSTRUCTOR iniciado');
  }

  bind(contexto, contextoSobrecargado) {
    this.logger.info('BIND iniciado');
  }

  attached() {
    this.logger.info('ATTACHED iniciado');
  }

  unbind() {
    this.logger.info('UNBIND iniciado');
  }

  detached() {
    this.logger.info('DETACHED iniciado');
  }
}

