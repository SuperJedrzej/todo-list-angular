import { trigger, transition, animate, style, keyframes, useAnimation, query, animateChild, group, stagger } from '@angular/animations';
import { fade, slide, bounceOutLeftAnimation, fadeInAnimation } from './../animations';
import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform: 'translateY(-20px)' }),
            animate(1000)
          ]),
          query('@todoAnimation',
            stagger(200, animateChild()))
        ])
      ])
    ]),

    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '2s'
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: '#ef5350' }),
        animate(500),
        useAnimation(bounceOutLeftAnimation)
      ]),
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Learn how to dockerize angular app',
    'Learn how to dockerize angular app and deploy on raspberry pi',
    'Deploy this app on the server'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event) { console.log($event); }
  animationDone($event) { console.log($event); }
}
