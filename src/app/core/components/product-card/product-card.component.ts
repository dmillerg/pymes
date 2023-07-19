import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class ProductCardComponent {
 @Input() producto!: Producto;
 @Input() detalle: boolean = false;

 range(count: number): number[] {
  return Array(count).fill(0).map((x, i) => i);
}

}
