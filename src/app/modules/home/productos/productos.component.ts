import { Component } from '@angular/core';
import { Producto } from 'src/app/core/models/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  productos: Producto[] = [
    {
      titulo: 'Carne',
      descripcion: 'La carne de res procede de un animal no menor a tres años de edad, su peso debe rondar los 500 kg; esta carne es de color rojo en diferentes tonalidades, su contenido graso medio o alto varía según la raza y alimentación de la res.',
      precio: 2.99,
      calificacion: 4,
      descuento: 5,
    },
    {
      titulo: 'Carne',
      descripcion: 'La carne de res procede de un animal no menor a tres años de edad, su peso debe rondar los 500 kg; esta carne es de color rojo en diferentes tonalidades, su contenido graso medio o alto varía según la raza y alimentación de la res.',
      precio: 2.99,
      calificacion: 4
    },
    {
      titulo: 'Carne',
      descripcion: 'La carne de res procede de un animal no menor a tres años de edad, su peso debe rondar los 500 kg; esta carne es de color rojo en diferentes tonalidades, su contenido graso medio o alto varía según la raza y alimentación de la res.',
      precio: 2.99,
      calificacion: 4
    },
    {
      titulo: 'Carne',
      descripcion: 'La carne de res procede de un animal no menor a tres años de edad, su peso debe rondar los 500 kg; esta carne es de color rojo en diferentes tonalidades, su contenido graso medio o alto varía según la raza y alimentación de la res.',
      precio: 2.99,
      calificacion: 4
    },
    {
      titulo: 'Carne',
      descripcion: 'La carne de res procede de un animal no menor a tres años de edad, su peso debe rondar los 500 kg; esta carne es de color rojo en diferentes tonalidades, su contenido graso medio o alto varía según la raza y alimentación de la res.',
      precio: 2.99,
      calificacion: 4,
      descuento: 5,
    },
    {
      titulo: 'Carne',
      descripcion: 'La carne de res procede de un animal no menor a tres años de edad, su peso debe rondar los 500 kg; esta carne es de color rojo en diferentes tonalidades, su contenido graso medio o alto varía según la raza y alimentación de la res.',
      precio: 2.99,
      calificacion: 4
    },
    {
      titulo: 'Carne',
      descripcion: 'La carne de res procede de un animal no menor a tres años de edad, su peso debe rondar los 500 kg; esta carne es de color rojo en diferentes tonalidades, su contenido graso medio o alto varía según la raza y alimentación de la res.',
      precio: 2.99,
      calificacion: 4
    },
    {
      titulo: 'Carne',
      descripcion: 'La carne de res procede de un animal no menor a tres años de edad, su peso debe rondar los 500 kg; esta carne es de color rojo en diferentes tonalidades, su contenido graso medio o alto varía según la raza y alimentación de la res.',
      precio: 2.99,
      calificacion: 4
    },
  ]
}
