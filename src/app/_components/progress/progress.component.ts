import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { ProgressGroupItem } from '../../_models';
import { ProgressColorPipe } from '../../_pipes/progress-color.pipe';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle, ProgressColorPipe],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  @Input() items: ProgressGroupItem[] = [];
  @Input() total = 100;
  @Input() height?: number;
}
