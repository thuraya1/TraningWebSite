import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foramtedPipes'
})
export class ForamtedPipesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    const date=new Date(value);
    //day/month/year
    const formatedDate=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    return formatedDate;
  }

}
