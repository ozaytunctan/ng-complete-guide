import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'filter',
    pure: true
})
export class FilterPipe implements PipeTransform {

    transform(value: any, filterStr: string, propName: string): any {
        if (filterStr == undefined || filterStr == '') {
            return value;
        }
        const resultArray = value.filter(item => item[propName]
                                 .toLowerCase()
                                 .indexOf(filterStr.toLowerCase()) >= 0);
        return resultArray;
    }
}
