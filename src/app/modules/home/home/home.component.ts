import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Comentario } from 'src/app/core/models/comentarios.model';
import { Producto } from 'src/app/core/models/producto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  form: FormGroup =this.fb.group({
    search: ['']
  })
  pymes: any[] = [
    {
      titulo: 'MERCADITO',
      imagen: 'assets/recomendacion.webp'
    },
    {
      titulo: 'BOULEVARD',
      imagen: 'assets/recomendacion.webp'
    },
    {
      titulo: 'TUAMBIA',
      imagen: 'assets/recomendacion.webp'
    },
  ]

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
  ]

  comentarios: Comentario[]=[
    {
      usuario: 'caprichito',
      correo: 'caprichito@gmail.com',
      comentario: 'Comentario es una apreciación o escrito sobre cualquier cosa puesta en análisis. También es el título que se da a alguna historia escrita con brevedad como los Comentarios de Cayo Julio César. Es un texto que incluyen resumen y opiniones sobre ciertos elementos de un texto original previamente leído',
      fecha: new Date()
    },
    {
      usuario: 'caprichito',
      correo: 'caprichito@gmail.com',
      comentario: 'Comentario es una apreciación o escrito sobre cualquier cosa puesta en análisis. También es el título que se da a alguna historia escrita con brevedad como los Comentarios de Cayo Julio César. Es un texto que incluyen resumen y opiniones sobre ciertos elementos de un texto original previamente leído',
      fecha: new Date()
    }
  ]
  constructor(
    private fb: FormBuilder
  ){}
}
