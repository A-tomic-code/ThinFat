import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardBlog'
})
export class CardBlogPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    return value.length > 100 ? value.slice(0,90) + '...ver mas' : value;
  }

}
