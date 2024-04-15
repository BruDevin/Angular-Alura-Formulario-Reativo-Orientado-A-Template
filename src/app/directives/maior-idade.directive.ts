import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[validatorMaiorIdade]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const dataNascimento = control.value
    const anoNascimento = new Date(dataNascimento).getFullYear()
    const anoAtual = new Date().getFullYear()

    const ehMaior = (anoNascimento + 18) <= anoAtual

    return ehMaior? null : {'validatorMaiorIdade': true}
  }

  constructor() { }

}
