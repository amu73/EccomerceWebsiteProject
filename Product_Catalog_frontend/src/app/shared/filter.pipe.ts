import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any = [];
    // if(value == null) {
      
    //   return 
    // }
    if (!value || filterString == '' || propName == '')
      return value;
    else {
      value.forEach((a: any) => {
        if (a[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
          return result.push(a);
        }
      }
      );
    }
    return result;
  }

}
