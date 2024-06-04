import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[stopEvent]',
  standalone: true,
})
export class StopEventDirective {
  @HostListener('click', ['$event'])
  public onClick(event: PointerEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
