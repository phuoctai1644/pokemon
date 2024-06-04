import { Component, EventEmitter, Output } from '@angular/core';
import { SortDirection, SortItems } from '../../_consts/sort.const';
import { NgClass, NgIf } from '@angular/common';
import { SortItem } from '../../_models/sort.model';
import { StopEventDirective } from '../../_directives/stop-event.directive';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [NgIf, SortComponent, NgClass, StopEventDirective],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss'
})
export class SortComponent {
  @Output() change = new EventEmitter<SortItem>();

  sortItems = SortItems;
  selected?: SortItem;
  selectedDir = SortDirection.ASC;
  direction = SortDirection;
  isCollapsed = true;

  onSelect(sort: SortItem) {
    this.selected = { ...sort, direction: this.selectedDir };
    this.change.emit(this.selected);
  }

  onChangeDirection(dir: SortDirection) {
    if (this.selected) {
      this.selected.direction = dir;
      this.change.emit(this.selected);
    }
    
    this.selectedDir = dir;
  }
}
