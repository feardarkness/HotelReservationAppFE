import {bindable, bindingMode} from 'aurelia-framework';

export class BootstrapInput {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) texto;
}

