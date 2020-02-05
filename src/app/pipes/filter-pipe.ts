import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filter',
    pure:true
})
export class FilterPipe implements PipeTransform {

    transform(value: any, filterStr: string, propName: string): any {
        debugger;
        if (filterStr==undefined || filterStr=='') {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            if (item[propName].toLowerCase().indexOf( filterStr.toLowerCase())>=0){
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
