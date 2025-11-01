import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cambiaLetrasASCI'
})

export class cambiaLetrasASCI implements PipeTransform {
    transform(value: string) {
        return value.split('').map(char => char.charCodeAt(0)).join(' ');
    }
}