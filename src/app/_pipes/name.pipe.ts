import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../_models/person';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(person: Person): string {
    let myString = "";

    if(person.lastName){
       myString += person.lastName + (person.firstName ? ', ' : ' ');
    }
    if(person.firstName){
       myString += person.firstName + (person.middleInitial ? ' ' : '');
    }
    if(person.middleInitial){
       myString += person.middleInitial + '.';
    }

    return myString;
  }

}
