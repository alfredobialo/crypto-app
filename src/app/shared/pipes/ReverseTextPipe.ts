import {PipeTransform, Pipe} from '@angular/core';
import {LowerCasePipe, UpperCasePipe} from '@angular/common';

@Pipe({name :"reverse"})
export class ReverseTextPipe implements PipeTransform{
  constructor(private uppercasePipe : UpperCasePipe, private lowercasePipe : LowerCasePipe) {
  }
  transform(value: any, ...args: any[]): any {
    let result  = this.reverseText(value);
    console.log("Args", ...args)
    if(args){
      const upper  = args[0];
      if(upper === 'uppercase'){
        result = this.uppercasePipe.transform(result);
      }
      else if(upper === 'lowercase'){
        result = this.lowercasePipe.transform(result);
      }
    }
    return result;
  }
  private reverseText(text : string){
    let result  = "";
    for (let i = 0; i < text.length; i++){
      result = text.charAt(i) + result;
    }
    console.log(result);
    return result;
  }
}
