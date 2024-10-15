import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [HeaderMenuComponent],
  template: `
    <main>
      <h1>Servicios</h1>
    </main>
  `,
  styles: ``
})
export class ServiciosComponent {

}
