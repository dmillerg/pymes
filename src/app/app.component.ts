import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pymes';

  mipymes: any[]=[
    {texto: 'Mercadito', ruta: '..'},
    {texto: 'Tuambia', ruta: '..'},
    {texto: 'SuperMarket23', ruta: '..'},
    {texto: 'Amazon', ruta: '..'},
  ];
}
