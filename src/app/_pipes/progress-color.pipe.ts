import { Pipe, PipeTransform } from '@angular/core';
import { ProgressGroupItem } from '../_models';

@Pipe({
  name: 'progressColor',
  standalone: true
})
export class ProgressColorPipe implements PipeTransform {

  transform(item: ProgressGroupItem, index: number, total: number, items: ProgressGroupItem[], height = 10): any {
    return {
      'width': `${item.count / total * 100}%`,
      'background-color': item.color || '',
      'z-index': items.length - index,
      'height': `${height}px`
    };
  }
}
