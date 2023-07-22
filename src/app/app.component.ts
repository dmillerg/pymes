import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pymes';
  mode = new FormControl('over' as MatDrawerMode);
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  mipymes: any[]=[
    {texto: 'Mercadito', ruta: '..'},
    {texto: 'Tuambia', ruta: '..'},
    {texto: 'SuperMarket23', ruta: '..'},
    {texto: 'Amazon', ruta: '..'},
  ];
}
