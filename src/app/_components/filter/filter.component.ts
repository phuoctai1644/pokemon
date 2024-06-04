import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FilterItem, FilterItemUI } from '../../_models/filter.model';
import { StopEventDirective } from '../../_directives/stop-event.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgClass, NgIf, FormsModule, StopEventDirective],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnChanges {
  @Input() label!: string;
  @Input() items!: FilterItem[];
  @Output() change = new EventEmitter<FilterItemUI[]>;

  selectedItems: FilterItemUI[] = [];
  filterItemUI: FilterItemUI[] = [];
  isCollapsed = true;

  ngOnChanges(changes: SimpleChanges): void {
    const filterItems = changes['items']?.currentValue
    if (filterItems) {
      this.setupFilterData(filterItems);
    }
  }

  setupFilterData(data: FilterItem[]) {
    this.filterItemUI = data.map(el => ({ ...el, selected: false }));
  }

  onToggle(option: FilterItemUI) {
    option.selected = !option.selected;
    if (option.selected) {
      this.selectedItems.push(option);
    } else {
      const idx = this.selectedItems.findIndex(el => el.id === option.id);
      this.selectedItems.splice(idx, 1);
    }

    this.change.emit(this.selectedItems);
  }
}
