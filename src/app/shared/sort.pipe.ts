import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class MyOrderByPipe implements PipeTransform {
  transform(items: any[], field: string, reverse: boolean = false): any[] {
    if (!items) return [];

      items.sort((a, b) => a[field] > b[field] ? 1 : -1);

    if (reverse) items.reverse();

    return items;
  }
}
