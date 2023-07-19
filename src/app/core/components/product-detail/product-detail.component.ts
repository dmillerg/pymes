import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule, ReactiveFormsModule]
})
export class ProductDetailComponent {

  @Input() producto!: Producto;

  range(count: number): number[] {
    return Array(count).fill(0).map((x, i) => i);
  }
}
