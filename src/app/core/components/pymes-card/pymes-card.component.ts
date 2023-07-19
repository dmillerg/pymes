import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-pymes-card',
  templateUrl: './pymes-card.component.html',
  styleUrls: ['./pymes-card.component.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule],
})
export class PymesCardComponent {

@Input() titulo: string = '';
@Input() imagen: string = ''
}
