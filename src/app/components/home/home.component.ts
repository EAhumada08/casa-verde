import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
      <div class="logo-container">
        <img [src]="imgLogo" alt="asd">
      </div>
  `,
  styles: `
  .logo-container{

  }

  img{
    width: 500px;
  }
  `
})
export class HomeComponent {
  imgLogo = 'images/logo.png';
}
