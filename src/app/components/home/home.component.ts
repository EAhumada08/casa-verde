import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <main>
      <h1>{{title}}</h1>
      @if (isAdmin){
        <button >Erase database</button>
      } @else {
        <p>You are not authorized</p>
      }
      <ul>
      @for (ingredient of ingredientList; track ingredient.name){
        <li>{{ingredient.quantitity}} - {{ingredient.name}}</li>
      }
      </ul>
    </main>
  `,
  styles: ``
})
export class HomeComponent {
  title = "Home";
  isAdmin = false;
  ingredientList = [
    {name: 'noodles', quantitity: 1},
    {name: 'miso broth', quantitity: 1},
    {name: 'egg', quantitity: 2},
  ];
}
