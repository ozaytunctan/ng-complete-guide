import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:"shorten"
})
export class ShortenPipe implements PipeTransform{
  
    transform(value: string,limit:number,delim:string) {
        if(value.length>limit){
            return value.substr(0,limit)+delim;
        }
        return value;
    }


}