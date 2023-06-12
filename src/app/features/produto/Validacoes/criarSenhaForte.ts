import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createSenhaForte(): ValidatorFn {

    return(control: AbstractControl) : ValidationErrors | null => {
        

        const value = control.value;

        if(!value){
            return null;
        }

        const temCaracterMaiusculo = /[A-Z]+/.test(value);

        const temCaracterMinusculo = /[a-z]+/.test(value);

        const temCaracterNumerico = /[0-9]+/.test(value);

        const senhaValida = temCaracterMaiusculo && temCaracterMinusculo && temCaracterNumerico;

        return !senhaValida ? {senhaForte: true}: null;

    }

}